# Study Quiz

A small, dependency-free quiz website. Open `index.html` in a browser to use it.

## Add questions

Edit `questions.js` and add question objects to the matching assignment's `questions` array. There are 12 assignment groups. Each question uses this format:

```js
{
  prompt: "Which answer is correct?",
  choices: ["First option", "Second option", "Third option", "Fourth option"],
  answerIndex: 1,
  explanation: "The second option is correct because ..."
}
```

`answerIndex` is zero-based: `0` is the first choice, `1` is the second, and so on. The optional `explanation` appears in the answer review. Assignment quizzes use only their selected assignment; mixed quizzes shuffle all available questions. A stopwatch tracks elapsed time without limiting the quiz. Selecting an answer moves to the next question automatically; selecting an answer on the final question submits the quiz.

The Quick revision mode displays all available questions and choices in assignment order, marks the correct answer, and shows any explanation. Revision mode has no timer.
