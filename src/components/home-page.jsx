import React from "react"

export default function HomePage(props) {
    const [categories, setCategories] = React.useState([])

    React.useEffect( () => {
        fetch("https://opentdb.com/api_category.php")
            .then(res=>res.json())
            .then(data => setCategories(data.trivia_categories))
    }, [])

    const optionElements = categories.map( category => <option key={category.id} value={category.id}> {category.name} </option>)

    return (
        <main className="home-page">
            <h1 className="home-page-title">Quizzical</h1>
            <h4 className="home-page-description">Take a quiz of {props.nbQuestions} questions in any category you prefer with Quizzical. Don't forget to select the category below before starting.</h4>
            <select className="category-selector" onChange={ e => props.changeCategory(e.target.value)}>
                <option value="any">Any Category</option>
                { optionElements }
            </select>
            <button className="btn" onClick={props.startGame}>Start Quiz</button>
        </main>
    )
}