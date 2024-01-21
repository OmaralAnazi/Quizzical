import React from "react";
import { nanoid } from 'nanoid'
import Choice from "./choice"

export default function Question(props) {

    const choicesBtns = new Array(props.choices.length).fill(null).map( (e, i) => 
        <Choice 
            key={nanoid()}
            value={props.choices[i]}
            handleSelect={() => props.selectAnswer(props.id, props.choices[i])}
            isFinish={props.isFinish}
            isSelected={props.choices[i] === props.currentChoice}
            isCorrectChoice={props.correctAnswer === props.choices[i]}
        />)

    return (
        <div className="question">
            <h3>{props.question}</h3>
            <div className="question-choices">
                {choicesBtns}
            </div>
        </div>
    )
}