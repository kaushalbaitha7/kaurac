# Mini Project 7 – Quiz Application

Welcome to the seventh mini project of the **KauraX C Programming Course**.

In this project, you'll build an interactive **Quiz Application** that presents multiple-choice questions, checks answers, calculates scores, and displays the final result.

---

# 🎯 Project Objective

Develop a console-based Quiz Application that allows users to:

- Start Quiz
- Answer Multiple Choice Questions
- Calculate Score
- Display Result
- Exit

---

# 📚 Concepts Used

- Structures
- Arrays
- Loops
- Functions
- Conditional Statements
- Strings

---

# 🖥️ Sample Output

```
========== Quiz Application ==========

1. Start Quiz
2. Exit

Enter Choice : 1

Question 1:
What is the extension of a C program?

A. .cpp
B. .java
C. .c
D. .py

Enter Answer : C
Correct!
```

---

# 💻 Complete Program

```c
#include<stdio.h>
#include<string.h>

#define QUESTIONS 5

struct Question
{
    char question[150];
    char optionA[50];
    char optionB[50];
    char optionC[50];
    char optionD[50];
    char answer;
};

struct Question quiz[QUESTIONS]=
{
    {
        "What is the extension of a C program?",
        ".cpp",
        ".java",
        ".c",
        ".py",
        'C'
    },
    {
        "Which function is the entry point of a C program?",
        "start()",
        "run()",
        "main()",
        "begin()",
        'C'
    },
    {
        "Which symbol is used to end a statement?",
        ",",
        ";",
        ":",
        ".",
        'B'
    },
    {
        "Which header file is used for printf()?",
        "stdio.h",
        "math.h",
        "string.h",
        "stdlib.h",
        'A'
    },
    {
        "Which loop always executes at least once?",
        "for",
        "while",
        "if",
        "do-while",
        'D'
    }
};

void startQuiz()
{
    char choice;
    int score=0;

    printf("\n========== Quiz Started ==========\n");

    for(int i=0;i<QUESTIONS;i++)
    {
        printf("\nQuestion %d\n",i+1);

        printf("%s\n",quiz[i].question);

        printf("A. %s\n",quiz[i].optionA);
        printf("B. %s\n",quiz[i].optionB);
        printf("C. %s\n",quiz[i].optionC);
        printf("D. %s\n",quiz[i].optionD);

        printf("Your Answer : ");
        scanf(" %c",&choice);

        if(choice==quiz[i].answer ||
           choice==quiz[i].answer+32)
        {
            printf("Correct!\n");
            score++;
        }
        else
        {
            printf("Wrong!\n");
            printf("Correct Answer : %c\n",quiz[i].answer);
        }
    }

    printf("\n========== Quiz Result ==========\n");

    printf("Score : %d/%d\n",score,QUESTIONS);

    printf("Percentage : %.2f%%\n",
           (score*100.0)/QUESTIONS);

    if(score==QUESTIONS)
        printf("Excellent!\n");
    else if(score>=3)
        printf("Good Job!\n");
    else
        printf("Keep Practicing!\n");
}

int main()
{
    int choice;

    do
    {
        printf("\n========== Quiz Application ==========\n");

        printf("1. Start Quiz\n");
        printf("2. Exit\n");

        printf("Enter Choice : ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                startQuiz();
                break;

            case 2:
                printf("\nThank You!\n");
                break;

            default:
                printf("\nInvalid Choice.\n");
        }

    }while(choice!=2);

    return 0;
}
```

---

# 🔍 Code Explanation

## Structure

Each question contains:

- Question
- Option A
- Option B
- Option C
- Option D
- Correct Answer

---

## startQuiz()

This function:

- Displays each question.
- Accepts the user's answer.
- Checks whether the answer is correct.
- Updates the score.
- Displays the correct answer if the response is incorrect.

---

## Result Calculation

After all questions:

- Total Score
- Percentage
- Performance Message

are displayed automatically.

---

## Main Menu

The application uses:

- `do-while`
- `switch-case`
- Functions

to provide a simple menu-driven interface.

---

# 💡 Suggested Improvements

Try implementing:

- 20–50 Questions
- Random Question Selection
- Timer for Each Question
- Negative Marking
- Difficulty Levels
- High Score Table
- Student Name Entry
- Category-wise Quizzes
- File Handling to Save Scores

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Build interactive console applications.
- Work with arrays of structures.
- Compare user input with stored values.
- Calculate scores and percentages.
- Design menu-driven quiz systems.

---

# 🏆 Challenge

Upgrade this project by adding:

- Question bank loaded from a file.
- Randomized questions and options.
- Multiple quiz categories.
- Countdown timer.
- Leaderboard.
- Replay quiz feature.
- Dynamic memory allocation.
- User login system.

---

# 📌 Next Project

Continue to **Mini Project 8 – ATM Simulation**, where you'll build an ATM interface supporting PIN authentication, balance inquiry, cash withdrawal, deposits, and mini statements.