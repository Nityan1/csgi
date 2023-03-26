

import React from "react"
import QuizCard from "../../components/quizcard/QuizCard"
import QuizRail from "../../components/quizrail/QuizRail"
import "./Quiz.css"

function Quiz (){
    return (
        <div>
            <h1 className="heading">QUIZ</h1>
            <div className="addQuizContainer">
                <img src="/img/add-icon.png" alt="add" className="addQuizIcon"/>
                <div>Add Quiz</div>
            </div>
            <QuizRail />

            <div className="boxContainer">
                <h1>QUIZ</h1>
                <img src="/img/delete-icon.png" alt="delete" className="iconDel" />  
            </div>

            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
        </div>
    )
}

export default Quiz