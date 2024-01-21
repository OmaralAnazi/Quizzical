import React from "react"
import { nanoid } from 'nanoid'
import Question from "./question"
import Confetti from "react-confetti"
import 'react-notifications/lib/notifications.css'
import {NotificationContainer, NotificationManager} from 'react-notifications'

export default function Quiz(props) {

    const [isFinish, setIsFinish] = React.useState(false)
    const [isQuizLoading, setIsQuizLoading] = React.useState(true)
    const [questions, setQuestions] = React.useState([])
    
    React.useEffect(getNewQuiz, [])

    function getNewQuiz() {
        const category =  props.category==="any"? "" : `&category=${props.category}`
        fetch(`https://opentdb.com/api.php?amount=${props.nbQuestions}&encode=url3986` + category) 
            .then(res => res.json())
            .then(data => {
                const questionsArray = data.results.map( quesData => ({
                    id: nanoid(),
                    question: convertToString(quesData.question),
                    correctAnswer: convertToString(quesData.correct_answer),
                    choices: quesData.type === "boolean" ? ["True", "False"] : 
                             createChoices(convertToString(quesData.correct_answer), quesData.incorrect_answers.map(encoded => convertToString(encoded))),
                    currentChoice: ""
                }))
                
                setQuestions(questionsArray)
                setIsQuizLoading(false)
            })
    }

    function convertToString(encodedString) {
        return decodeURIComponent(encodedString)
    }

    function createChoices(correctAnswer, choicesArray) {
        // The parameter choicesArray currently contains only 3 incorrect choices

        const nbChoices = 4
        const randomIndex = Math.floor( Math.random() * nbChoices )
        // Modify the choicesArray array by inserting the correctAnswer in it with a random index 
        choicesArray.splice(randomIndex, 0, correctAnswer)
        return choicesArray 
    }

    function selectAnswer(id, clickedChoice) {
        setQuestions(prevQuestions => 
            prevQuestions.map(quesData => 
                quesData.id !== id ? quesData : {...quesData, currentChoice: clickedChoice}))
    }
    
    function isAllQuestionsFilled() {
        return questions.every( question => question.currentChoice !== "")
    }

    function getNbCorrectAnswers() {
        return questions.filter( question => question.currentChoice === question.correctAnswer).length
    }

    function handleQuizMainBtn() {
        if(!isFinish && !isAllQuestionsFilled()) {
            NotificationManager.error('Please fill all the questions!', 'Error', 5000)
            return
        }

        if(isFinish) {
            setIsQuizLoading(true)
            getNewQuiz()
        }
        setIsFinish( prevState => !prevState )
    }

    const nbCorrectAnswers = getNbCorrectAnswers()
    const isFullMark = nbCorrectAnswers === props.nbQuestions
    const questionElements = questions.map( quesData => {
        return <Question
            key={quesData.id}
            id={quesData.id}
            selectAnswer={selectAnswer}
            question={quesData.question}
            choices={quesData.choices}
            currentChoice={quesData.currentChoice}
            correctAnswer={quesData.correctAnswer}
            isFinish={isFinish}
        />
    })

    return (
        <main>
            {
            isQuizLoading ?

            <div className="loading">
                <img src="/loading.gif" alt="loading gif" />
                <h1>Loading...</h1>
            </div>

            :

            <>  
                {isFullMark && isFinish && <Confetti />}
                <div className="questions-container"> {questionElements} </div>
                <div className="bottom-quiz">
                    {isFinish && <h3>You scored {nbCorrectAnswers}/{props.nbQuestions} correct answers</h3>}
                    <button onClick={handleQuizMainBtn} className="btn" disabled={isQuizLoading} > {isFinish? "Play Again" : "Check Answers"} </button>
                </div>
            </>
            }

            <NotificationContainer/>
        </main>
    )
}