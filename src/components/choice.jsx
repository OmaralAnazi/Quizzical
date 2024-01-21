import React from "react";

export default function Choice(props) {
    let styles = {}
    
    if(props.isFinish) {
        styles = {
            color: props.isCorrectChoice? "#293264" : "#4D5B9E",
            backgroundColor:  props.isCorrectChoice ? "#94D7A2" :
                              props.isSelected && !props.isCorrectChoice? "#F8BCBC" :
                              "#F5F7FB" 
        }
    } 
    else {
        styles = {
            backgroundColor: props.isSelected ? "#D6DBF5" : "#F5F7FB"
        }
    }
    
    return <button onClick={props.handleSelect} style={styles} disabled={props.isFinish}> {props.value} </button>
}