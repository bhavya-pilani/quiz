// Generated from the six supplied Programming in Java assignment PDFs.
// Assignments 7-12 are left empty because no PDFs for those assignments were supplied.
window.QUIZ_ASSIGNMENTS = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `Assignment ${index + 1}`,
  questions: []
}));

QUIZ_ASSIGNMENTS[0].questions = [
  {
    prompt: "Consider the following program.\n\n      class NPTEL {\n          public static void main(String[] args) {\n              System.out.println(\"Hello, World!\");\n          }\n      }\n\nWhat is the output of the above code?",
    choices: ["Hello, World!", "HelloWorld!", "Compilation Error", "Runtime Error"],
    answerIndex: 0,
    explanation: "This is the standard syntax for a Java program to print the string \"Hello, World!\" to the console."
  },
  {
    prompt: "A Java file with extension '.class' contains:",
    choices: ["Java source code", "HTML tags", "Java Byte code", "A program file written in Java programming language"],
    answerIndex: 2,
    explanation: "A .class file is a compiled version of the .java file in byte code. It is a kind of object code with the JVM\n(Java Virtual Machine) as the target machine."
  },
  {
    prompt: "Which of the following is NOT an object-oriented programming paradigm?",
    choices: ["Encapsulation", "Inheritance", "Polymorphism", "Dynamic memory allocation"],
    answerIndex: 3,
    explanation: "Encapsulation, Inheritance, and Polymorphism are core paradigms. Dynamic memory allocation is a\nmemory allocation strategy and not a programming paradigm."
  },
  {
    prompt: "What is the correct sequence of steps to execute a Java program?",
    choices: ["Run â†’ Edit â†’ Compile", "Edit â†’ Run â†’ Compile", "Compile â†’ Edit â†’ Run", "Edit â†’ Compile â†’ Run"],
    answerIndex: 3,
    explanation: "The Java development process involves writing code (Edit), converting it to bytecode (Compile), and then\nexecuting it on the JVM (Run)."
  },
  {
    prompt: "Which program is used to compile Java source code into bytecode?",
    choices: ["javap", "javac", "java", "javad"],
    answerIndex: 1,
    explanation: "The JDK includes a tool called â€˜javacâ€™ that compiles from Java source code to a target of Java\nbytecodes. The program â€˜javaâ€™ is used to execute Java bytecode."
  },
  {
    prompt: "In Java, what is the role of the public static void main(String[] args) method?",
    choices: ["Initialization method", "Execution entry point", "Constructor", "Destructor"],
    answerIndex: 1,
    explanation: "The public static void main(String[] args) method is the entry point for the execution of a Java program."
  },
  {
    prompt: "Which of the following is not a feature of Java?",
    choices: ["Platform Independence", "Object-Oriented Programming", "Supports Explicit Pointers", "Supports Polymorphism"],
    answerIndex: 2,
    explanation: "Java is platform-independent, object-oriented, and secure. It does not support explicit pointers, as they\ncan lead to memory management issues and compromise security."
  },
  {
    prompt: "What is the primary purpose of the Java Virtual Machine (JVM) in the Java programming language?",
    choices: ["Graphical User Interface", "Platform independence", "Code Debugging", "Game Engine"],
    answerIndex: 1,
    explanation: "The Java Virtual Machine (JVM) enables platform independence by interpreting Java bytecode, allowing\nJava programs to run on any device with a compatible JVM."
  },
  {
    prompt: "Consider the following program.\n\n      public class Question {\n          public static void main(String[] args) {\n              int x = 5;\n              x *= (2 + 8);\n              System.out.println(x);\n          }\n      }\n\nWhat is the output of the above code?",
    choices: ["50", "10", "0", "5"],
    answerIndex: 0,
    explanation: "Here, x *= (2 + 8) is equivalent to x = x * (2 + 8), which results in x = x * 10. Therefore, x = 5 * 10 => x =\n50."
  },
  {
    prompt: "Which of the following is true regarding how Java handles code execution?",
    choices: ["Java uses only interpreter.", "Java uses only compiler.", "Java uses both interpreter and compiler.", "None of the above."],
    answerIndex: 2,
    explanation: "Creating a .class file from .java using the javac command is a compilation task, whereas execution of a\n.class file using java is the process of interpretation."
  },
];

QUIZ_ASSIGNMENTS[1].questions = [
  {
    prompt: "What is the correct signature of the main method in Java?",
    choices: ["public static void main(String[] args)", "public void main(String args[])", "void main(String[] args)", "public static void main(Sting [])"],
    answerIndex: 0,
    explanation: "The main method in Java must be declared as public static void main(String[] args) to be\nrecognized by the JVM as the entry point of the program. The public modifier allows the method to be\naccessible from anywhere, static ensures it can be called without creating an instance of the class, and\nString[] args is the parameter used for command-line arguments.\nNote: Please refer to the book Joy with Java Chapter 3 for more detailed explanation."
  },
  {
    prompt: "Consider the code given below.\n\n      public class VarPrint {\n          int x = 30;\n          static int y = 20;\n\n           public static void main(String[] args) {\n               VarPrint t1 = new VarPrint();\n               t1.x = 88;\n               t1.y = 99;\n               int z1 = t1.x + t1.y;\n               VarPrint t2 = new VarPrint();\n               System.out.println(t2.x + \" \" + t2.y + \" \" + z1);\n           }\n      }\nWhat will be the output of the above Java program?",
    choices: ["30 99 178", "30 88 129", "30 99 187", "99 99 187"],
    answerIndex: 2,
    explanation: "If you perform any change for instance variable these changes wonâ€™t be reflected for the remaining\nobjects. Because for every object a separate copy of instance variable will be there. But if you do any\nchange to the static variable, that change will be reflected for all objects because a static instance\nmaintains a single copy in memory.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination."
  },
  {
    prompt: "Consider the code given below.\n\n      public class ArgumenTest {\n          public static void main(String[] args) {\n              Test t = new Test();\n              t.start();\n          }\n\n           static class Test {\n               void start() {\n                   int a = 4;\n                   int b = 5;\n                   System.out.print(\"\" + 8 + 3 + \"\");\n                   System.out.print(a + b);\n                   System.out.print(\" \" + a + b + \"\");\n                   System.out.print(foo() + a + b + \" \");\n                   System.out.println(a + b + foo());\n\n                 }\n\n                 String foo() {\n                     return \"foo\";\n                 }\n           }\n      }\n\n      What will be the output of the code given above?",
    choices: ["839 45foo45 9foo", "9 7 7 foo34 34foo", "72 34 34 foo34 34foo", "839 45foo45 9foo9"],
    answerIndex: 0,
    explanation: "Here, print() methods internally converts the data in its argument into a String object and then print the\ncomposition. Here, + is the concatenation of different String representation.\nPlease refer to chapter 3 of book Joy With Java for a more detailed explaination."
  },
  {
    prompt: "Which keyword is used in Java to refer to the current object?",
    choices: ["this", "that", "self", "current"],
    answerIndex: 0,
    explanation: "In Java, the this keyword is used to refer to the current object within an instance method or a\nconstructor. Refer to Lecture 8 for more details."
  },
  {
    prompt: "Which of the following is true about constructors in a class?",
    choices: ["Constructors do not have a return type.", "Constructors arenâ€™t used to initialize objects.", "A class can have only one constructor.", "Constructors cannot be overloaded."],
    answerIndex: 0,
    explanation: "A constructor is a special method in a class that is automatically called when an object of the class is\ncreated. Its main purpose is to initialize the object's properties (variables). Unlike other methods,\nconstructors:\n    â— Have the same name as the class.\n    â— Do not have a return type, not even void. A class can have multiple constructors with different\n        parameter lists (constructor overloading) to allow flexibility in object creation.\n    Please refer book Joy with Java Chapter 3 for mored etailed explaination."
  },
  {
    prompt: "Consider the following code snippet\n\n      class NPTEL_W2 {\n        int x;\n\n          NPTEL_W2(int x) {\n              this.x = x;\n          }\n\n          void printX() {\n              System.out.println(this.x);\n          }\n\n          public static void main(String[] args) {\n              NPTEL_W2 obj = new NPTEL_W2(000);\n              obj.printX();\n          }\n      }\n\n      What will be the output of the code given above?",
    choices: ["0", "10", "100", "Runtime error"],
    answerIndex: 0,
    explanation: "The constructor NPTEL_W2 (int x) initializes the instance variable x with the value passed as an\nargument. The method printX() prints the value of x, which is 10. Refer to Lecture 7 for more\ndetails."
  },
  {
    prompt: "Consider the code snippet give below.\n(\\n in output is to be assumed to be the new line character)\n\n      public class Main {\n        public static void main(String[] args) {\n          System.out.println(\"Hello\");\n          System.out.println(\"World\");\n          System.out.printf(\"Number: %d\", 10);\n        }\n      }\n\n      What will be the output of the code given above?",
    choices: ["Hello World\\nNumber: 10", "Hello WorldNumber: 10", "Hello\\nWorld\\nNumber: 10", "Hello World\\nNumber: 10\\n"],
    answerIndex: 2,
    explanation: "The print method prints text without a newline, println prints text with a newline, and printf\nprints formatted text. The output is Hello World on the first line and Number: 10 on the second\nline. Refer to Lecture 10 for more details."
  },
  {
    prompt: "Which class is used in Java to take runtime data input from the user?",
    choices: ["BufferReader", "UserInputStreamReader", "Scanner", "DataInputStreamReader"],
    answerIndex: 2,
    explanation: "The Scanner class is used to take runtime data input from the user. It provides methods to read\nvarious types of input such as strings, integers, and floating-point numbers. Refer to Lecture 9 for more\ndetails."
  },
  {
    prompt: "How do you read a line of text from the console using the Scanner class in Java?",
    choices: ["scanner.readLine()", "scanner.nextLine()", "scanner.getLine()", "scanner.fetchLine()"],
    answerIndex: 1,
    explanation: "The nextLine() method of the Scanner class reads a line of text from the console. Refer to Lecture 10 for\nmore details."
  },
  {
    prompt: "Which of the following is the correct way to declare a class in Java?",
    choices: ["public class MyClass {}", "class MyClass[] {}", "public MyClass class {}", "MyClass public class {}"],
    answerIndex: 0,
    explanation: "The correct way to declare a class in Java is by using the class keyword followed by the class name and\ncurly braces. Refer to Lecture 7 for more details."
  },
];

QUIZ_ASSIGNMENTS[2].questions = [
  {
    prompt: "Which of the following statements is true regarding the order of execution of constructors in an\ninheritance hierarchy?",
    choices: ["Derived class constructor will be called followed by the base class constructor.", "Only Base class constructor will be called.", "Only derived class constructor will be called.", "Base class constructor will be called followed by the derived class constructor."],
    answerIndex: 3,
    explanation: "On object creation of a derived class, Java ensures that the base (parent) class constructor is executed\nfirst to initialize the parent's state before executing the derived class constructor."
  },
  {
    prompt: "The super() method is used to:",
    choices: ["Call constructor of friend class", "Call constructor of the parent class", "Call constructor", "Is a declared method"],
    answerIndex: 1,
    explanation: "In Java, `super()` is used to invoke the constructor of the immediate parent class. It allows the subclass\nto initialize the parent class's state."
  },
  {
    prompt: "What is the output of the following Java program?\n\n      class Vehicle {\n          public void move() {\n              System.out.println(\"The vehicle moves\");\n          }\n      }\n\n      class Car extends Vehicle {\n          public void move() {\n              System.out.println(\"The car moves\");\n          }\n      }\n\n      public class Main {\n          public static void main(String[] args) {\n              Vehicle vehicle = new Car();\n              vehicle.move();\n          }\n      }",
    choices: ["\"The vehicle moves\"", "\"The car moves\"", "The code does not compile", "None of the above"],
    answerIndex: 1,
    explanation: "This is an example of method overriding. Since the object is instantiated as a `Car`, the overridden\n`move` method in the `Car` class is executed, even though the reference type is `Vehicle`."
  },
  {
    prompt: "Which of the following is NOT true regarding the final keyword in Java?",
    choices: ["A final method cannot be overridden in a subclass.", "A final variable can only be assigned once.", "A final class can have subclasses.", "A final variable can be assigned during declaration or in the constructor."],
    answerIndex: 2,
    explanation: "A class marked as `final` cannot be extended, meaning it cannot be subclassed (it cannot have any child\nclasses)."
  },
  {
    prompt: "Which type of inheritance leads to the \"Diamond Problem\"?",
    choices: ["Single level", "Multi-level", "Multiple", "Hierarchical"],
    answerIndex: 2,
    explanation: "The diamond problem arises in multiple inheritance when a class inherits from two classes that have a\ncommon ancestor, leading to ambiguity regarding which path to follow for inherited members. Java\navoids this by not supporting multiple inheritance with classes."
  },
  {
    prompt: "Members of a class which are not intended to be inherited by subclasses should be declared as:",
    choices: ["Public members", "Protected members", "Private members", "Private or Protected members"],
    answerIndex: 2,
    explanation: "The `private` access specifier is the most restrictive. Private members are not visible to subclasses and\ntherefore are not inherited."
  },
  {
    prompt: "In Java, is it possible to override a static method?",
    choices: ["Yes, we can override a static method just like we do with instance methods.", "No, static methods cannot be overridden because they belong to the class, not the object.", "It depends on whether the static method is declared as final or not.", "It depends on the access modifier of the static method."],
    answerIndex: 1,
    explanation: "Static methods are bound to the class rather than the instance (static binding). If a subclass defines a\nstatic method with the same signature, it \"hides\" the parent method rather than overriding it."
  },
  {
    prompt: "What is the output of the following Java program?\n\n      public class NptelExample {\n          public static int fun(int n) {\n              if (n == 0) {\n                  return 1;\n              }\n              return n * fun(n - 1);\n          }\n\n             public static void main(String[] args) {\n                 System.out.println(fun(5));\n             }\n      }",
    choices: ["5", "24", "120", "Runtime Error"],
    answerIndex: 2,
    explanation: "The `fun` method is a recursive function calculating the factorial of `n`. For input 5, it calculates 5 * 4 * 3\n* 2 * 1 = 120."
  },
  {
    prompt: "Which of the following statements about abstract classes in Java is correct?",
    choices: ["Abstract classes can be instantiated directly.", "An abstract class must contain at least one abstract method.", "A class inheriting from an abstract class must implement all its abstract methods unless it is itself abstract.", "Abstract classes can be marked as final."],
    answerIndex: 2,
    explanation: "Abstract classes cannot be instantiated. Any concrete subclass (non-abstract) must provide\nimplementations for all abstract methods defined in the parent abstract class."
  },
  {
    prompt: "What will be the output of the below program?\n\n      class superDemoClass {\n          final int a = 20;\n      }\n\n      class subDemoClass extends superDemoClass {\n          void subFunc() {\n              a = 40;\n              System.out.println(\"value of a = \" + a);\n          }\n      }\n\n      class demo {\n          public static void main(String[] args) {\n              subDemoClass subc = new subDemoClass();\n              subc.subFunc();\n          }\n      }",
    choices: ["value of a = 20", "error: cannot assign a value to final variable a", "error: unknown variable 'a' in class subDemoClass", "value of a = 40"],
    answerIndex: 1,
    explanation: "The variable `a` is declared as `final` in the superclass. While it is inherited, its value cannot be modified\n(re-assigned) by the subclass, causing a compilation error."
  },
];

QUIZ_ASSIGNMENTS[3].questions = [
  {
    prompt: "What is the process by which we can control what parts of a program can access the members of a\nclass?",
    choices: ["Polymorphism", "Augmentation", "Encapsulation", "Recursion"],
    answerIndex: 2,
    explanation: "Encapsulation in Java is the process by which data (variables) and the code that acts upon them\n(methods) are integrated as a single unit. By encapsulating a class's variables, other classes cannot\naccess them, and only the methods of the class can access them."
  },
  {
    prompt: "Consider the program given below.\n\n      public class Main{\n          public static void main(String args[]){\n              System.out.println(cos(2*PI));\n          }\n      }\n\n      What will be the output if the program is executed?",
    choices: ["It will give compile-time error", "It will give run-time error", "1.0", "3.14"],
    answerIndex: 0,
    explanation: "The program gives a compile time error as the Math class is missing.\nThe static import statement needs to be used to import the static members (e.g., PI) of java.lang.Math.\n\n      import static java.lang.Math.*;\n\nThis will allow the program to use PI directly."
  },
  {
    prompt: "Consider the following code:\n\n      class Person {\n          int a = 1;\n          int b = 1;\n          public Person() {\n              System.out.print(a * b + \"Java\" + a);\n          }\n      }\n\n      class Employee extends Person {\n          int a = 0;\n          int b = 1;\n          public Employee() {\n              System.out.print(a + b + \"Java\" + a);\n          }\n      }\n\n      public class Question {\n          public static void main(String args[]) {\n              Person p = new Employee();\n          }\n      }\n\n      What will be the output of the code given above?",
    choices: ["1Java11Java0", "1Java10Java0", "10Java0Java", "0Java11Java0"],
    answerIndex: 0,
    explanation: "If no super() or this() is included explicitly within the derived class constructor, the super() is implicitly\ninvoked by the compiler. Therefore, in this case, the Person class constructor is called first and then the\nEmployee class constructor is called. Up casting is allowed."
  },
  {
    prompt: "In Java, can a subclass in a different package access a superclassâ€™s protected method?",
    choices: ["Yes, without any restrictions.", "Yes, but only if they are in the same package.", "No, protected methods are not accessible by subclasses.", "Yes, but only through inheritance (i.e., using super or this, not via an object)"],
    answerIndex: 3,
    explanation: "- A subclass in a different package can access protected members only through inheritance (directly via\nsuper or this).\n\n- It cannot access the superclassâ€™s protected method via an instance of the superclass.\n\n- Protected also allows access to classes in the same package without subclassing, but thatâ€™s not the\ncase here."
  },
  {
    prompt: "A package is a collection of:",
    choices: ["Only classes", "Only interfaces", "editing tools", "classes,methods and interfaces"],
    answerIndex: 3,
    explanation: "In Java (and many other object-oriented languages), a package is a namespace that organizes a set of\nrelated classes, interfaces, and methods."
  },
  {
    prompt: "Consider the following 2 programs:\n\n      // Main1.java ------------------\n      public class Main1{\n          public static void main(String args[]){\n              int number = 10;\n              System.out.println(number++ + ++number);\n          }\n      }\n\n      // Main2.java ------------------\n      public class Main2{\n          public static void main(String args[]){\n              int number = 10;\n              System.out.println(++number + number++);\n          }\n      }\n\n      Choose the best option among the following for the code snippet given above",
    choices: ["Both pre-increment and post-increment operators becomes pre-increment during print.", "Both pre-increment and post-increment operators becomes post-increment during print.", "Both Main1 and Main2 classes give the same output (but can depend on the compiler).", "Pre-increment and post-increment operators donâ€™t work during print."],
    answerIndex: 2,
    explanation: "The output of both the program are 22 (but can depend on the compiler). Therefore, option c is correct\nand we can eliminate option d that the operators donâ€™t work. Further, the operators are doing exactly\nwhat they are supposed to do i.e. pre-increment first increases the values and post-increment increases\nthe value during the next operation. The print statement is the next operation; hence it received the\npost incremented value as well making option a and b invalid."
  },
  {
    prompt: "Consider the following program:\n\n     class Base {\n         public void print() {\n             System.out.println(\"Base class...\");\n         }\n     }\n     class Derived extends Base {\n         public void print() {\n             System.out.println(\"Derived class...\");\n         }\n     }\n     public class Main {\n         private static void main (String[] args) {\n             Base b = new Base();\n             b.print();\n             Derived d = new Derived();\n             d.print();\n         }\n     }\nHow many errors does this program contain?",
    choices: ["None", "1", "2", "3"],
    answerIndex: 1,
    explanation: "This code has one error:\n1. Incorrect visibility of `main` method:\nThe `main` method is defined as `private static void main(String[] args)`. The\n`main` method must be `public static void main(String[] args)` to be recognized as\nthe entry point of the program by the Java Virtual Machine (JVM)."
  },
  {
    prompt: "Consider the code given below.\n\n      // Teacher.java ------------------\n      package nptel1;\n      public class Teacher {\n        protected void showMarks() {\n          System.out.println(\"100 Marks\");\n        }\n      }\n\n      // Student.java ------------------\n      package nptel2;\n      import nptel1.*;\n      public class Student extends Teacher {\n        void show() {\n          showMarks();\n        }\n        public static void main(String[] args) {\n          Student st1 = new Student();\n          st1.show();\n        }\n      }\n\nWhat is the output of the above Java Code Snippet with protected access modifier?",
    choices: ["100 marks", "No output", "Compiler error", "None of the above"],
    answerIndex: 0,
    explanation: "Through inheritance, one can access a protected variable or method of a class even from outside the\npackage. Here, we accessed Teacher class of nptel1 from Student class of nptel2."
  },
  {
    prompt: "Choose the correct syntax of a Java Package below.",
    choices: ["package PACKAGE_NAME;", "package PACKAGE_NAME.*;", "pkg PACKAGE_NAME;", "pkg PACKAGE_NAME.*;"],
    answerIndex: 0,
    explanation: "A package declaration statement should end with a package name but not with *."
  },
  {
    prompt: "Which of these access specifiers must be used for main() method?",
    choices: ["private", "public", "protected", "default"],
    answerIndex: 1,
    explanation: "main() method must be specified public as it called by Java run time system, outside of the\nprogram. If no access specifier is used then by default member is public within its own package &\ncannot be accessed by Java run time system."
  },
];

QUIZ_ASSIGNMENTS[4].questions = [
  {
    prompt: "Which keyword is NOT used by Java during exception handling?",
    choices: ["try", "catch", "final", "finally"],
    answerIndex: 2,
    explanation: "In Java, exceptions are handled using the try, catch, and finally blocks. The try block contains code\nthat might throw an exception, the catch block handles specific exceptions, and the finally block\nexecutes regardless of whether an exception occurs."
  },
  {
    prompt: "What is the purpose of the throws keyword in Java?",
    choices: ["To declare exceptions that a method can throw", "To throw an exception immediately", "To catch an exception", "It is not a keyword in Java"],
    answerIndex: 0,
    explanation: "The throws keyword is used in a method signature to declare the exceptions that the method might\nthrow, alerting callers to handle or propagate these exceptions."
  },
  {
    prompt: "Which of the following is TRUE about interfaces in Java?",
    choices: ["Interfaces should always be defined as final", "Interfaces can be instantiated directly.", "Interfaces can extend multiple interfaces.", "Interfaces cannot have any method signatures"],
    answerIndex: 2,
    explanation: "In Java, an interface can extend multiple interfaces. Interfaces can also contain public, static,\nand final variables, but they cannot be instantiated directly."
  },
  {
    prompt: "What will be the output of the following code?\n\n      interface Demo {\n          void display();\n      }\n\n      class Test implements Demo {\n          public void display() {\n              System.out.println(\"Hello, NPTEL!\");\n          }\n      }\n\n      public class Main {\n          public static void main(String[] args) {\n              Test obj = new Test();\n              obj.display();\n          }\n      }",
    choices: ["Hello, NPTEL!", "Compilation Error", "Runtime Error", "No Output"],
    answerIndex: 0,
    explanation: "The Test class implements the Demo interface and provides a definition for the display method.\nWhen display() is called, it prints â€œHello, NPTEL!â€."
  },
  {
    prompt: "What will be the output of the following Java program?\n\n      interface Calculator {\n          void calculate(int value);\n      }\n\n      class Square implements Calculator {\n          int result;\n          public void calculate(int value) {\n              result = value * value;\n              System.out.print(\"Square: \" + result + \" \");\n          }\n      }\n\n      class Cube extends Square {\n          public void calculate(int value) {\n              result = value * value * value;\n              super.calculate(value);\n              System.out.print(\"Cube: \" + result + \" \");\n          }\n      }\n\n      public class Main {\n          public static void main(String[] args) {\n              Calculator obj = new Cube();\n              obj.calculate(3);\n          }\n      }",
    choices: ["Square: 9 Cube: 9", "Cube: 27 Square: 9", "Square: 9 Square: 27 Cube: 27", "Square: 9 Cube: 27 Square: 27"],
    answerIndex: 0,
    explanation: "The Cube class overrides the calculate method of the Square class. In the Cube classâ€™s calculate\nmethod, super.calculate(value) is called, which executes the calculate method of the Square\n\nclass. First, \"Square: 9\" is printed by the superclass method. The call to super.calculate(value) overwrites\nthe previously computed cube value. Then, the overridden method in Cube prints \"Cube: 9\"."
  },
  {
    prompt: "What will be the output of the following program?\n\n      class NPTEL {\n          public static void main(String[] args) {\n              try {\n                  int a = 5;\n                  int b = 0;\n                  System.out.println(a / b);\n              } catch (ArithmeticException e) {\n                  System.out.print(\"Error \");\n              } finally {\n                  System.out.print(\"Complete\");\n              }\n          }\n      }",
    choices: ["5 Complete", "Error Complete", "Runtime Error", "Compilation Error"],
    answerIndex: 1,
    explanation: "An ArithmeticException is caught in the catch block, which prints â€œErrorâ€. The finally block\nexecutes afterward, printing â€œCompleteâ€."
  },
  {
    prompt: "What will be the output of the following Java program?\n\n      interface A {\n          int x = 10;\n          void display();\n      }\n      class B implements A {\n          public void display() {\n              System.out.println(\"Value of x: \" + x);\n          }\n      }\n      public class Main {\n          public static void main(String[] args) {\n              B obj = new B();\n              obj.display();\n          }\n      }",
    choices: ["Value of x: 10", "Value of x: 0", "Compilation Error", "Runtime Error"],
    answerIndex: 0,
    explanation: "Variables in interfaces are public, static, and final by default. Hence, the value of x is accessible\nin the display method."
  },
  {
    prompt: "Which keyword is used by Java during exception handling?",
    choices: ["final", "finally", "caught", "finished"],
    answerIndex: 1,
    explanation: "In Java, exceptions are handled using the try, catch, and finally blocks. The try block contains code that\nmight throw an exception, the catch block handles specific exceptions, and the finally block executes\nregardless of whether an exception occurs."
  },
  {
    prompt: "A method that potentially generates a checked exception must include this keyword in its method\nsignature:",
    choices: ["throw", "extend", "throws", "extends"],
    answerIndex: 2,
    explanation: "Any Java class that generates a checked exception and does not handle it internally must use the throws\nkeyword to alert other methods of its instability."
  },
  {
    prompt: "Consider the following code.\n\n      class Test extends Exception {}\n\n      class Main {\n\n          public static void main(String args[]) {\n            try {\n              throw new Test();\n            } catch (Test t) {\n              System.out.println(\"Got the Test Exception\");\n            } finally {\n              System.out.println(\"Inside finally block \");\n            }\n          }\n      }\n\nWhat will be the output of the above code?",
    choices: ["Got the Test Exception Inside finally block", "Got the Test Exception", "Inside finally block", "Compiler Error"],
    answerIndex: 0,
    explanation: "In Java, the finally is always executed after the try-catch block. This block can be used to do the common\ncleanup work."
  },
];

QUIZ_ASSIGNMENTS[5].questions = [
  {
    prompt: "What is the primary difference between Byte Streams and Character Streams in Java?",
    choices: ["Byte Streams handle characters, while Character Streams handle bytes.", "Byte Streams are used for binary data, while Character Streams are used for decimal data.", "Character Streams are faster than Byte Streams in all cases.", "Byte Streams are used for binary data, while Character Streams are used for text data."],
    answerIndex: 3,
    explanation: "Byte Streams: Handle raw binary data like images or files (InputStream, OutputStream).\nCharacter Streams: Handle text data and support encoding like Unicode (Reader, Writer).\nCharacter Streams are better for text processing, especially when handling international characters.\nFor a detailed understanding of Java I/O streams, refer to the book Joy with Java."
  },
  {
    prompt: "Which of the following best describes the concept of multithreading in Java?",
    choices: ["Multiple threads execute concurrently, sharing the same memory space.", "Only one thread executes at a time, ensuring sequential execution.", "Threads in Java cannot communicate with each other.", "Threads require separate memory allocation for each thread to run."],
    answerIndex: 0,
    explanation: "Multithreading in Java allows multiple threads to run concurrently within the same program, sharing the\nsame memory space. This feature makes Java programs more efficient, especially for tasks like\nmultitasking or background processing. However, proper synchronization is crucial to avoid issues like\ndata inconsistency. For a more detailed explanation of multithreading concepts, refer to the book Joy\nwith Java."
  },
  {
    prompt: "Consider the code given below:\n\n      class ExampleThread extends Thread {\n          public void run() {\n              System.out.println(\"Thread is running.\");\n          }\n      }\n\n      public class Main {\n          public static void main(String[] args) {\n              ExampleThread thread = new ExampleThread();\n              thread.start();\n              //thread.start();\n          }\n      }\nWhat will happen when the above code is executed?",
    choices: ["The program will execute successfully, printing \"Thread is running.\" twice.", "The program will throw an error when attempting to start the thread a second time.", "The program will terminate without any output.", "The program will execute successfully, printing \"Thread is running.\""],
    answerIndex: 3,
    explanation: "â— The second thread.start(); is commented out, so it's not executed.\n    â— Only one thread is started, and the run() method prints:\n\n      Thread is running.\nFor more details about the thread lifecycle,please refer to the relavant chapter in the book Joy with Java."
  },
  {
    prompt: "Which method is used to start a thread in Java?",
    choices: ["run()", "start()", "execute()", "begin()"],
    answerIndex: 1,
    explanation: "The start() method begins a new thread and calls the run() method in a separate call stack.\n\nFor more details, refer to the book \"Joy with Java\" â€” it's great for beginners!"
  },
  {
    prompt: "Cosnider the code given below:\n\n      class RunnableExample implements Runnable {\n          public void run() {\n              for (int i = 1; i <= 3; i++) {\n                  System.out.println(\"Thread running: \" + i);\n              }\n          }\n      }\n\n      public class Main {\n          public static void main(String[] args) {\n              RunnableExample task = new RunnableExample();\n              Thread thread = new Thread(task);\n              thread.start();\n          }\n      }\nWhat will happen when the above code is executed?",
    choices: ["The program will throw a compile-time error because Runnable is not a thread.", "The program will execute successfully, and the run() method will run in a new thread.", "The program will execute the run() method directly on the main thread.", "The program will throw a runtime error because Runnable is not properly implemented."],
    answerIndex: 1,
    explanation: "The Runnable interface is implemented by the class RunnableExample. To create a thread, the Runnable\nobject is passed to the Thread constructor, and calling start() ensures that the run() method is executed\nin a new thread.For more details on creating threads using Runnable, refer to the book Joy with Java."
  },
  {
    prompt: "Which of the following states can a thread enter during its lifecycle in Java?",
    choices: ["New, Runnable, Running, Blocked", "New, Runnable, Waiting, Blocked", "New, Runnable, Running, Sleeping, Dead", "New, Runnable, Waiting, Blocked, Terminated"],
    answerIndex: 3,
    explanation: "The states of a thread in Java are:\n    â— New: Thread is created but not started.\n    â— Runnable: Thread is ready to run but waiting for CPU time.\n    â— Waiting/Blocked: Thread is paused or waiting for some resource.\n    â— Terminated: Thread has completed execution.\n\nAdditional note:\nIn Java thread lifecycle, Waiting and Blocked are two distinct states:\n     â— Blocked means the thread is waiting to enter a synchronized block/method because another\n         thread holds the lock.\n     â— Waiting means the thread is waiting indefinitely for another thread to notify it (e.g., via\n         wait()/notify()).\n     â— This distinction helps in understanding thread coordination better. For more details, check Joy\n         with Java"
  },
  {
    prompt: "What does the thread scheduler use to decide which thread to run when multiple threads are in the\nrunnable state?",
    choices: ["Thread priority", "Thread's execution time", "Thread name", "Thread creation order"],
    answerIndex: 0,
    explanation: "The thread scheduler uses thread priorities as a hint to determine the execution order of threads in the\nrunnable state. However, thread scheduling also depends on the operating system's scheduling policies\nand may not strictly follow priority.\nFor more on thread scheduling, refer to the book Joy with Java."
  },
  {
    prompt: "Consider the code given below:\n\n      class PriorityExample extends Thread {\n          public void run() {\n              System.out.println(Thread.currentThread().getName() +\n                                 \" with priority \" +\n      Thread.currentThread().getPriority());\n          }\n      }\n\n      public class Main {\n          public static void main(String[] args) {\n              PriorityExample t1 = new PriorityExample();\n              PriorityExample t2 = new PriorityExample();\n\n                t1.setPriority(Thread.MIN_PRIORITY);\n                t2.setPriority(Thread.MAX_PRIORITY);\n\n                t1.start();\n                t2.start();\n           }\n      }\nWhich of the following is true about the output?",
    choices: ["The thread with the higher priority is guaranteed to execute first.", "The thread with the lower priority will never execute.", "The order of execution depends on the JVM and OS scheduling policies.", "The program will throw an error due to invalid priority values."],
    answerIndex: 2,
    explanation: "Thread priority is a hint to the thread scheduler but does not guarantee execution order. The actual\nbehavior depends on the JVM and the underlying OS.For more on thread priorities, refer to the book Joy\nwith Java."
  },
  {
    prompt: "What is the primary purpose of thread synchronization in Java?",
    choices: ["To allow multiple threads to execute a method at the same time", "To ensure thread execution follows a specific order", "To prevent rare conditions and ensure data in-consistency", "To prevent race conditions and ensure data consistency"],
    answerIndex: 3,
    explanation: "Thread synchronization is used to control the access of multiple threads to shared resources, ensuring\ndata consistency and preventing race conditions. This is typically done using synchronized methods or\nblocks.\nFor more details on thread synchronization, refer to the book Joy with Java."
  },
  {
    prompt: "Which of the following method returns a reference to the currently executing thread object?",
    choices: ["public static boolean interrupted();", "public static Thread currentThread();", "public final boolean isAlive();", "public final void suspend();"],
    answerIndex: 1,
    explanation: "Only public static Thread currentThread() method returns a reference to the currently\nexecuting thread object among the options."
  },
];

// Assignment 7 — Programming in Java
window.QUIZ_ASSIGNMENTS[6].questions = [
  {
    prompt: `What will be the output of the following Java program?

import java.io.*;
class ReadFile {
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("NPTEL.txt");
        BufferedReader br = new BufferedReader(fr);
        System.out.println(br.readLine());
        br.close();
    }
}

Assume NPTEL.txt contains:
This is Programming in Java online course.`,
    choices: [
      "Hello, World!",
      "This is Programming in Java online course.",
      "IOException",
      "null"
    ],
    answerIndex: 1,
    explanation: "BufferedReader.readLine() reads and returns the first line of the file, so the given text is printed."
  },
  {
    prompt: `Complete the following snippet with the required code.

File file = new File("file.txt");
if ( _______ ) {
    System.out.println("File exists.");
} else {
    System.out.println("File does not exist.");
}`,
    choices: [
      "file.exists()",
      "file.isFile()",
      "file.isExists()",
      "file.isAvailable()"
    ],
    answerIndex: 0,
    explanation: "The exists() method checks whether the specified file or directory exists."
  },
  {
    prompt: `What is the output of the following Java program?

class Main {
    public static void main(String args[]) {
        final int i;
        i = 20;
        i = 30;
        System.out.println(i);
    }
}`,
    choices: [
      "30",
      "Compiler Error",
      "Garbage value",
      "0"
    ],
    answerIndex: 1,
    explanation: "A final local variable can be assigned only once. Assigning i first to 20 and then to 30 causes a compilation error."
  },
  {
    prompt: "Which of these values is returned by the read() method when the end of file (EOF) is encountered?",
    choices: [
      "0",
      "1",
      "-1",
      "Null"
    ],
    answerIndex: 2,
    explanation: "The read() method returns -1 when the end of the input stream is reached."
  },
  {
    prompt: `What will be the output of the following Java program?

public class Calculator {
    int num = 100;

    public void calc(int num) {
        this.num = num * 10;
    }

    public void printNum() {
        System.out.println(num);
    }

    public static void main(String[] args) {
        Calculator obj = new Calculator();
        obj.calc(2);
        obj.printNum();
    }
}`,
    choices: [
      "20",
      "100",
      "1000",
      "2"
    ],
    answerIndex: 0,
    explanation: "Calling calc(2) sets the instance variable num to 2 * 10. Therefore, printNum() prints 20."
  },
  {
    prompt: "What is the primary difference between Byte Streams and Character Streams in Java?",
    choices: [
      "Byte Streams handle characters, while Character Streams handle bytes.",
      "Byte Streams are used for binary data, while Character Streams are used for image data.",
      "Character Streams are faster than Byte Streams in all cases.",
      "Byte Streams are used for binary data, while Character Streams are used for text data."
    ],
    answerIndex: 3,
    explanation: "Byte streams handle raw binary data, while character streams are designed for text data."
  },
  {
    prompt: "What is the primary purpose of thread synchronization in Java?",
    choices: [
      "To allow multiple threads to execute a method at the same time",
      "To ensure thread execution follows a specific order",
      "To ensure data inconsistency",
      "To prevent race conditions and ensure data consistency"
    ],
    answerIndex: 3,
    explanation: "Synchronization controls access to shared resources to prevent race conditions and maintain data consistency."
  },
  {
    prompt: "Which stream does a Java application use to only READ data from a source, which may be a file, an array, a peripheral device, or a socket?",
    choices: [
      "InputStream",
      "OutputStream",
      "Input/OutputStream",
      "DataOutputStream"
    ],
    answerIndex: 0,
    explanation: "InputStream is the base class for reading byte data from sources."
  },
  {
    prompt: "Which class in Java is used to create a new directory?",
    choices: [
      "FileReader",
      "FileWriter",
      "File",
      "Directory"
    ],
    answerIndex: 2,
    explanation: "The java.io.File class provides mkdir() and mkdirs() methods to create directories."
  },
  {
    prompt: "What is the primary purpose of input streams in Java?",
    choices: [
      "To write data to a file.",
      "To read data from a file.",
      "To delete a file.",
      "To create directories."
    ],
    answerIndex: 1,
    explanation: "Input streams are used to read data from a source, such as a file or another input device."
  }
];

// Assignment 8 - Programming in Java
window.QUIZ_ASSIGNMENTS[7].questions = [
  {
    prompt: "Which of the following is TRUE about check boxes and radio buttons?",
    choices: [
      "Check boxes allow only one selection, while radio buttons allow multiple selections.",
      "Check boxes allow multiple selections, while radio buttons allow only one selection.",
      "Both allow only one selection.",
      "Both allow multiple selections."
    ],
    answerIndex: 1,
    explanation: "Check boxes allow multiple independent selections, while radio buttons in the same group allow only one selection."
  },
  {
    prompt: "Which layout manager arranges components in a rectangular grid?",
    choices: [
      "FlowLayout",
      "CardLayout",
      "BorderLayout",
      "GridLayout"
    ],
    answerIndex: 3,
    explanation: "GridLayout arranges components in a rectangular grid of rows and columns."
  },
  {
    prompt: "Which method is used to set the title of a Frame in Java?",
    choices: [
      "setTitle()",
      "setName()",
      "setText()",
      "setLabel()"
    ],
    answerIndex: 0,
    explanation: "The setTitle() method sets the title displayed in the title bar of a Frame."
  },
  {
    prompt: "Which method is used to request that a component be repainted in Java?",
    choices: [
      "paint()",
      "repaint()",
      "update()",
      "draw()"
    ],
    answerIndex: 1,
    explanation: "The repaint() method requests that the component be redrawn."
  },
  {
    prompt: "Which AWT component is used to display a scrolling list of items?",
    choices: [
      "Label",
      "List",
      "Button",
      "TextField"
    ],
    answerIndex: 1,
    explanation: "The AWT List component displays a list of items and supports selecting items from it."
  },
  {
    prompt: "Which layout manager arranges components in a flow, placing them one after another?",
    choices: [
      "FlowLayout",
      "BorderLayout",
      "GridLayout",
      "CardLayout"
    ],
    answerIndex: 0,
    explanation: "FlowLayout places components sequentially, moving to the next line when necessary."
  },
  {
    prompt: "What does AWT stand for in Java?",
    choices: [
      "Abstract Widget Toolkit",
      "Advanced Window Toolkit",
      "Abstract Window Toolkit",
      "Advanced Widget Toolkit"
    ],
    answerIndex: 2,
    explanation: "AWT stands for Abstract Window Toolkit, Java's GUI toolkit for creating graphical components."
  },
  {
    prompt: "Which AWT component is used to create a button in a GUI?",
    choices: [
      "Label",
      "Button",
      "TextField",
      "Checkbox"
    ],
    answerIndex: 1,
    explanation: "The AWT Button component creates a clickable button in a graphical user interface."
  },
  {
    prompt: "Which of the following correctly describes the GUI shown in the question?",
    choices: [
      "It contains two Labels and one TextField.",
      "It contains one Frame, two Labels, and two TextFields.",
      "It contains two Frames, two Labels, and two TextFields.",
      "It contains one Frame, two Buttons, and two TextFields."
    ],
    answerIndex: 1,
    explanation: "The GUI contains one Frame with two Labels and two TextFields, one each for First Name and Last Name."
  },
  {
    prompt: "Which of the following is TRUE about a check box in Java?",
    choices: [
      "A check box cannot be in the on or off state.",
      "Clicking a check box changes its state between on and off.",
      "A check box can be on and off at the same time.",
      "A check box cannot be grouped with other check boxes."
    ],
    answerIndex: 1,
    explanation: "A check box can be selected or deselected by clicking it, toggling between the on and off states."
  }
];