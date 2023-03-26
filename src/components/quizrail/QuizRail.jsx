import "./QuizRail.css"

export default function QuizRail (data = []){
    return (
        <div className="quizRailContainer">
            <QuizRailCard label="Quiz 1" active/>
            <QuizRailCard label="Quiz 2" />
            <QuizRailCard label="Quiz 3" />
            <QuizRailCard label="Quiz 4" />
        </div>
    )
}

function QuizRailCard({label, active}) {
    return (
        <div className={`quizCard ${active && 'cardActive'}`}>
            {label}
        </div>
    )
}