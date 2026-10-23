(() => {
  "use strict";

  const assignments = window.QUIZ_ASSIGNMENTS || [];
  const screens = {
    home: document.getElementById("home-screen"),
    quiz: document.getElementById("quiz-screen"),
    results: document.getElementById("results-screen")
  };
  const assignmentSelect = document.getElementById("assignment-select");
  const homeMessage = document.getElementById("home-message");
  const mixedCount = document.getElementById("mixed-count");
  const timerElement = document.getElementById("timer");
  let questions = [];
  let answers = [];
  let currentQuestion = 0;
  let elapsedSeconds = 0;
  let timerId = null;
  let quizLabel = "";

  function allQuestions() {
    return assignments.flatMap((assignment) =>
      (assignment.questions || []).map((question) => ({
        ...question,
        assignmentTitle: assignment.title
      }))
    );
  }

  function shuffle(items) {
    for (let index = items.length - 1; index > 0; index -= 1) {
      const otherIndex = Math.floor(Math.random() * (index + 1));
      [items[index], items[otherIndex]] = [items[otherIndex], items[index]];
    }
    return items;
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, screen]) => {
      screen.classList.toggle("hidden", key !== name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setupHome() {
    assignments.forEach((assignment) => {
      const option = document.createElement("option");
      option.value = String(assignment.id);
      option.textContent = assignment.title;
      assignmentSelect.append(option);
    });
    const count = allQuestions().length;
    mixedCount.textContent = count
      ? `${count} question${count === 1 ? "" : "s"} ready to go`
      : "Questions will appear here once added";
  }

  function startQuiz(selectedQuestions, label) {
    if (selectedQuestions.length === 0) {
      homeMessage.textContent = "There aren't any questions here yet. Add your questions to questions.js to get started.";
      return;
    }
    homeMessage.textContent = "";
    questions = selectedQuestions;
    answers = Array(questions.length).fill(null);
    currentQuestion = 0;
    elapsedSeconds = 0;
    quizLabel = label;
    document.getElementById("quiz-label").textContent = label;
    showScreen("quiz");
    renderQuestion();
    renderTimer();
    timerId = window.setInterval(() => {
      elapsedSeconds += 1;
      renderTimer();
    }, 1000);
  }

  function renderQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question-count").textContent =
      `QUESTION ${currentQuestion + 1} OF ${questions.length}`;
    const prompt = document.getElementById("question-prompt");
    prompt.replaceChildren();
    question.prompt.split(/\n\s*\n/).forEach((block) => {
      const content = block.trim();
      if (!content) return;

      const hasCode = content.includes("\n") &&
        /(?:\b(?:class|public|static|void|int|System\.out|return|if|for|while|new)\b|[{};])/.test(content);
      if (hasCode) {
        const lines = content.split("\n");
        const nonEmptyLines = lines.filter((line) => line.trim());
        const indentation = Math.min(...nonEmptyLines.map((line) => line.match(/^\s*/)[0].length));
        const code = document.createElement("pre");
        code.className = "question-code";
        code.textContent = lines.map((line) => line.slice(indentation)).join("\n");
        prompt.append(code);
      } else {
        const text = document.createElement("p");
        text.className = "question-text";
        text.textContent = content;
        prompt.append(text);
      }
    });
    const options = document.getElementById("answer-options");
    options.replaceChildren();
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `answer-option${answers[currentQuestion] === index ? " selected" : ""}`;
      button.setAttribute("aria-pressed", String(answers[currentQuestion] === index));
      const marker = document.createElement("span");
      marker.className = "option-marker";
      marker.textContent = String.fromCharCode(65 + index);
      const text = document.createElement("span");
      text.textContent = choice;
      button.append(marker, text);
      button.addEventListener("click", () => {
        answers[currentQuestion] = index;
        if (currentQuestion < questions.length - 1) {
          currentQuestion += 1;
          renderQuestion();
        } else {
          finishQuiz();
        }
      });
      options.append(button);
    });

    document.getElementById("progress-bar").style.width =
      `${((currentQuestion + 1) / questions.length) * 100}%`;
    document.getElementById("previous-question").disabled = currentQuestion === 0;
    document.getElementById("next-question").classList.toggle("hidden", currentQuestion === questions.length - 1);
    document.getElementById("finish-quiz").classList.toggle("hidden", currentQuestion !== questions.length - 1);
  }

  function renderTimer() {
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;
    const display = hours > 0
      ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    timerElement.textContent = display;
    timerElement.setAttribute("aria-label", `Elapsed time ${display}`);
  }

  function finishQuiz() {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
    const correctCount = questions.reduce(
      (total, question, index) => total + (answers[index] === question.answerIndex ? 1 : 0),
      0
    );
    const percentage = Math.round((correctCount / questions.length) * 100);
    document.getElementById("result-title").textContent =
      percentage === 100 ? "Perfect score!" : percentage >= 70 ? "Nice work." : "Keep practicing.";
    document.getElementById("result-summary").textContent =
      `${quizLabel} · Completed in ${timerElement.textContent}.`;
    document.getElementById("score-value").textContent = `${percentage}%`;
    document.getElementById("score-detail").textContent = `${correctCount} of ${questions.length} correct`;

    const incorrectQuestions = questions
      .map((question, index) => ({ question, answer: answers[index] }))
      .filter(({ question, answer }) => answer !== question.answerIndex);
    document.getElementById("review-count").textContent = incorrectQuestions.length
      ? `${incorrectQuestions.length} ${incorrectQuestions.length === 1 ? "question" : "questions"} to revisit`
      : "All correct";
    const review = document.getElementById("answer-review");
    review.replaceChildren();
    if (incorrectQuestions.length === 0) {
      const message = document.createElement("p");
      message.className = "no-incorrect-message";
      message.textContent = "Perfect — you got every question right.";
      review.append(message);
    }
    incorrectQuestions.forEach(({ question, answer }, index) => {
      const item = document.createElement("article");
      item.className = "review-item is-wrong";
      const status = document.createElement("p");
      status.className = "review-status";
      status.textContent = `MISSED QUESTION ${index + 1}`;
      const prompt = document.createElement("h3");
      prompt.className = "review-question";
      prompt.textContent = question.prompt;
      item.append(status, prompt);
      const comparison = document.createElement("div");
      comparison.className = "answer-comparison";
      const selected = document.createElement("div");
      selected.className = "review-answer your-answer";
      const selectedLabel = document.createElement("span");
      selectedLabel.className = "review-answer-label";
      selectedLabel.textContent = "YOUR ANSWER";
      const selectedText = document.createElement("p");
      selectedText.textContent = answer === null ? "Not answered" : question.choices[answer];
      selected.append(selectedLabel, selectedText);
      const correct = document.createElement("div");
      correct.className = "review-answer correct-answer";
      const correctLabel = document.createElement("span");
      correctLabel.className = "review-answer-label";
      correctLabel.textContent = "CORRECT ANSWER";
      const correctText = document.createElement("p");
      correctText.textContent = question.choices[question.answerIndex];
      correct.append(correctLabel, correctText);
      comparison.append(selected, correct);
      item.append(comparison);
      if (question.explanation) {
        const explanation = document.createElement("p");
        explanation.className = "explanation";
        explanation.textContent = `Explanation: ${question.explanation}`;
        item.append(explanation);
      }
      review.append(item);
    });
    showScreen("results");
  }

  document.getElementById("start-assignment").addEventListener("click", () => {
    const assignment = assignments.find((entry) => String(entry.id) === assignmentSelect.value);
    if (!assignment) {
      homeMessage.textContent = "No assignments are available.";
      return;
    }
    startQuiz(
      (assignment.questions || []).map((question) => ({ ...question, assignmentTitle: assignment.title })),
      assignment.title
    );
  });

  document.getElementById("start-mixed").addEventListener("click", () => {
    const mixed = shuffle(allQuestions());
    startQuiz(mixed, "Mixed quiz");
  });
  document.getElementById("exit-quiz").addEventListener("click", () => {
    if (timerId !== null) window.clearInterval(timerId);
    timerId = null;
    showScreen("home");
  });
  document.getElementById("previous-question").addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion -= 1;
      renderQuestion();
    }
  });
  document.getElementById("next-question").addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion();
    }
  });
  document.getElementById("finish-quiz").addEventListener("click", () => finishQuiz());
  document.getElementById("back-home").addEventListener("click", () => showScreen("home"));

  setupHome();
})();
