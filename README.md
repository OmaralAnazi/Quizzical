# Quizzical

## Description
"Quizzical" is a solo project, part of a learning journey in React, where users can engage with a quiz pulled from an API. It allows users to select a category and then presents a series of questions. As the quiz concludes, users can see their scores. The project emphasizes a clean user experience and interactivity.

## Technologies
- HTML
- CSS
- JavaScript
- React
- JSX

## Learnings
- Integrating React applications with an external API to fetch data dynamically.
- Structuring the user interface into smaller, reusable React components to manage complexity and improve maintainability.
- Managing state and props effectively to control the flow of data and user interactions within the application.
- Refactoring code to adhere to the DRY principle, making it simpler and more efficient. For example, here's a function I wrote before and after refactoring:

    before:
    ```js
    function isAllQuestionsFilled() {
        let isAllFiled = true
        questions.forEach( question => {
            if (question.currentChoice === "")
                isAllFiled = false
        })
        return isAllFiled
    }
    ```

    after:
    ```js
    function isAllQuestionsFilled() {
        return questions.every( question => question.currentChoice !== "")
    }
    ```
- Solidifying understanding of React fundamentals through practical implementation and problem-solving.

## Setup
To view this project, clone the repository to your local machine and open the `index.html` file in a web browser.

## Demo
[View Live Project](https://unique-otter-cdb693.netlify.app/)
