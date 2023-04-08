

import React from "react"
import QuizCard from "../../components/quizcard/QuizCard"
import QuizRail from "../../components/quizrail/QuizRail"
import "./Quiz.css"

function Quiz() {
    const quizList = [
        {
            id: 1,
            company_name: 'quiz1'
        },
        {
            id: 2,
            company_name: 'quiz2'
        },
        {
            id: 3,
            company_name: 'quiz3'
        },
        {
            id: 4,
            company_name: 'quiz4'
        },
        {
            id: 5,
            company_name: 'quiz5'
        },
    ]
    return (
        <div className="mainDiv">
            <h1 className="heading">QUIZ</h1>
            <div className="addQuizContainer">
                <img src="/img/add-quiz.png" alt="add" className="addQuizIcon" />
                <div className="addText">Add Quiz</div>
            </div>

            <QuizRail data={quizList} />

            <div className="boxContainer">
                <h1>QUIZ</h1>
                <img src="/img/delete-quiz.png" alt="delete" className="iconDel" />
            </div>

            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
        </div>
    )
}

export default Quiz