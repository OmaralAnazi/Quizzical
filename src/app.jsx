import React from "react"
import HomePage from "./components/home-page"
import Quiz from "./components/quiz"

export default function App() {
    const nbQuestions = 10

    const [isStart, setIsStart] = React.useState(false)
    const [category, setCategory] = React.useState("any")
    
    function changeCategory(newCategory) {
        setCategory(newCategory)
    }

    function startGame() {
        setIsStart(true)
    }

    return (
        !isStart ? <HomePage startGame={startGame} changeCategory={changeCategory} nbQuestions={nbQuestions}/> 
        : <Quiz nbQuestions={nbQuestions} category={category} />
    )
}