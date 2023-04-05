import { useEffect, useState } from "react";
import "./QuizRail.css"



export default function QuizRail(data) {
    // console.log('asdas', data);
    const [selectedQuiz, setSelectedQuiz] = useState(data.data[0])

    useEffect(() => {
        console.log('Selected QUiz is /', selectedQuiz)
    }, [selectedQuiz])

    function QuizRailCard({ labelData, active }) {
        return (
            <div onClick={() => { setSelectedQuiz(labelData) }} className={`quizCard ${active && 'cardActive'}`}>
                {labelData.company_name}
            </div>
        )
    }

    
    return (
        <div className="quizRailContainer">

            {
                data.data.map(listItem => { return (<QuizRailCard labelData={listItem} active={selectedQuiz.company_name === listItem.company_name ? true : false} />) })
            }

        </div>
    )
}

