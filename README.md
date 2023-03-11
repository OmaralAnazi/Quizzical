# Quizzical

Quizzical is a simple project built by ReactJS, for practice purposes. [Click here to test the project website.](https://quizzical-by-omaralanazi.netlify.app/)

<br/>

![image](https://user-images.githubusercontent.com/97122147/224481323-bf2da409-360e-4e0e-9668-5fc73a6f295b.png)

## Lessons Learned:
* How to connect React app to an API to retrieve questions by [Trivia API.](https://opentdb.com/api_config.php/)
* How to divide the UI into smaller components. For example, in this project I divided the UI into the following components tree:

![tree](https://user-images.githubusercontent.com/97122147/224482252-5c90dd6e-fccb-4bdb-90e1-d55a2cab802f.png)
* Manage props and states in React components.
* Refactoring the code & writing as DRYer (simple) code as possible. Here's an example of a function I wrote before and after refactoring:

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
* In genral, I have learned and practiced the basic fundemetnals of React. 
