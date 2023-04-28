

import React, { useEffect, useState } from "react"
// import QuizCard from "../../components/quizcard/QuizCard"
// import QuizRail from "../../components/quizrail/QuizRail"
import "./Quiz.css"
import { Modal } from "react-overlays"

function Quiz() {
    // const quizList = [
    //     {
    //         id: 1,
    //         company_name: 'quiz1'
    //     },
    //     {
    //         id: 2,
    //         company_name: 'quiz2'
    //     },
    //     {
    //         id: 3,
    //         company_name: 'quiz3'
    //     },
    //     {
    //         id: 4,
    //         company_name: 'quiz4'
    //     },
    //     {
    //         id: 5,
    //         company_name: 'quiz5'
    //     },
    // ]
    const [addquizModal, setAddQuizModal] = useState(false)
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;
    const [quizName, setQuizName] = useState('')
    const [quizDescription, setQuizDescription] = useState('')
    const [deleteQuizModal, setDeleteQuizModal] = useState(false)
    const [addquesModal, setAddquesModal] = useState(false)
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')
    const [option4, setOption4] = useState('')
    const [selectedOption, setSelectedOption] = useState('');
    const [quizList, setQuizList] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState(quizList[0]);
    const [editquestion, setEditQuestion] = useState(false);
    const [deletequestion, setDeleteQuestion] = useState(false)




    useEffect(() => {
        // console.log('Selected QUiz is /', selectedQuiz)
    }, [selectedQuiz]);

    useEffect(() => {
        fetch(`http://192.168.19.155:8000/v1/quiz`)
            .then((response) => response.json())
            .then((actualData) => { setQuizList(actualData.result) });
    }, [])


    const addQuiz = (event) => {
        event.preventDefault();

        console.log(quizName, quizDescription);
        const newData = {
            company_name: quizName,
            description: quizDescription
        };
        quizList.push(newData);
        setQuizName('')
        setQuizDescription('');
        setAddQuizModal(false)
        console.log(quizList)
    }


    function deleteQuiz() {

        setDeleteQuizModal(false);


    }

    const addQuestion = (event) => {
        event.preventDefault();
        console.log('question', question)
        console.log('options', option1, option2, option3, option4)
        console.log('isko delte krne ka re babu', selectedQuiz)
        setAddquesModal(false)

    }

    function QuizCard() {
        return (
            <div className="container">
                <div className="dataContainer">
                    <b>Ques 1. </b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tortor quam, pulvinar vel massa convallis, scelerisque auctor lacus. Nulla sed semper nibh, quis feugiat ante. Fusce non est in tortor malesuada lobortis. Vestibulum eget sapien ex.
                    <ol type="A">
                        <li>Lorem ipsum dolor sit amet, </li>
                        <li>Lorem ipsum dolor sit amet, </li>
                        <li>Lorem ipsum dolor sit amet, </li>
                        <li>Lorem ipsum dolor sit amet, </li>
                    </ol>
                </div>
                <div className="actionsContainer">
                    <img src="/img/edit-question.png" alt="edit" className="actionIcon" onClick={() => { setEditQuestion(true) }} />
                    <img src="/img/delete-question.png" alt="delete" className="actionIcon" onClick={() => { setDeleteQuestion(true) }} />
                </div>
            </div>
        )
    }


    function QuizRail() {

        // console.log('rgsr', quizList)
        function QuizRailCard({ labelData, active }) {

            const getQuestion = () => {
                setSelectedQuiz(labelData);
                fetch(`http://192.168.19.155:8000/v1/question/` + labelData.id)
                    .then((response) => response.json())
                    .then((actualData) => { console.log(actualData) });

            }

            return (
                <div onClick={() => { getQuestion() }} className={`quizCard ${active && 'cardActive'}`}>
                    {labelData.company_name}
                </div>
            )
        }


        return (
            <div className="quizRailContainer">
                {
                    quizList.map(listItem => { return (<QuizRailCard labelData={listItem} active={selectedQuiz.company_name === listItem.company_name ? true : false} />) })
                }
            </div>
        )
    }



    return (
        <div className="mainDiv">
            <h1 className="heading">QUIZ</h1>
            <div className="addQuizContainer" onClick={() => { setAddQuizModal(true) }}>
                <img src="/img/add-quiz.png" alt="add" className="addQuizIcon" />
                <div className="addText">Add Quiz</div>
            </div>

            <QuizRail />

            <div className="boxContainer">
                {/* <h1>{selectedQuiz.company_name}</h1> */}
                <img src="/img/delete-quiz.png" alt="delete" className="iconDel" onClick={() => { setDeleteQuizModal(true) }} />
            </div>

            <div className="addquestionContainer">
                <img src="/img/add-question.png" alt="addQuestion" className="addQues" onClick={() => { setAddquesModal(true) }} />
                <p>Add Question</p>
            </div>



            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />

            {/* Add Quiz Modal */}
            <Modal
                className="modal"
                show={addquizModal}
                onHide={() => { setAddQuizModal(false) }}
                renderBackdrop={renderBackdrop}
            >
                <>
                    <div className="modalContainer">
                        <div></div>
                        <div className="addQuizText">Add Quiz</div>
                        <div onClick={() => { setAddQuizModal(false) }} >
                            <img src="/img/cancel-icon.png" alt="delte" className="quizDelete" />
                        </div>
                    </div>
                    <div className="formContainer">
                        <div className="formInt" >
                            <form className="inputContianer" onSubmit={addQuiz}>

                                <label className="inputHeading">Name</label>
                                <input className="inputBox" name="name" placeholder="Quiz Name" value={quizName} onChange={(event) => { setQuizName(event.target.value) }} />

                                <label className="inputHeading">Description</label>
                                <input className="inputBox" name="desciption" placeholder="Description" value={quizDescription} onChange={(event) => { setQuizDescription(event.target.value) }} />

                                <button className="AddquizBTN" type="submit">Submit </button>
                            </form>
                        </div>
                    </div>
                </>
            </Modal>
            {/* Add Quiz Modal */}


            {/* Delete quiz Modal */}
            <Modal
                className="modal"
                show={deleteQuizModal}
                onHide={() => { setDeleteQuizModal(false) }}
                renderBackdrop={renderBackdrop}
            >
                <>
                    <div className="modalContainer">
                        <div></div>
                        <div className="addQuizText">Delete Quiz</div>
                        <div onClick={() => { setDeleteQuizModal(false) }} >
                            <img src="/img/cancel-icon.png" alt="delte" className="quizDelete" />
                        </div>
                    </div>
                    <div className="formContainer">
                        <div className="formInt" >
                            <form className="inputContianer" onSubmit={deleteQuiz}>

                                {/* <label className="inputHeading">You want to delete {selectedQuiz.company_name} </label> */}

                                <button className="deleteQuizBtn" type="submit">Delete </button>
                            </form>
                        </div>
                    </div>
                </>
            </Modal>
            {/* Delete quiz Modal */}

            {/* Add Question Modal */}
            <Modal
                className="queModal"
                show={addquesModal}
                onHide={() => { setAddQuizModal(false) }}
                renderBackdrop={renderBackdrop}
            >
                <>
                    <div className="modalContainer">
                        <div></div>
                        <div className="addQuizText">Add Question</div>
                        <div onClick={() => { setAddquesModal(false) }} >
                            <img src="/img/cancel-icon.png" alt="delte" className="quizDelete" />
                        </div>
                    </div>
                    <div className="addQuesInt">
                        {/* <div className="addQuesInt" > */}
                        <form className="addquesContainer" onSubmit={addQuestion}>

                            <label className="inputHeading">Question</label>
                            <textarea className="questionInput" name="name" placeholder="Question" value={question} onChange={(event) => { setQuestion(event.target.value) }} />

                            <label className="inputHeading">Options</label>

                            <div className="optionContainer">
                                <div className={`  ${(selectedOption === option1 && selectedOption !== '') ? 'SelectedAnswer' : 'normalAnswer'}`} onClick={() => { setSelectedOption(option1) }}></div>
                                <input className="option" name="option" placeholder="Option 1" value={option1} onChange={(event) => { setOption1(event.target.value) }} />
                            </div>

                            <div className="optionContainer">
                                <div className={` ${(selectedOption === option2 && selectedOption !== '') ? 'SelectedAnswer' : 'normalAnswer'}`} onClick={() => { setSelectedOption(option2) }}></div>
                                <input className="option" name="option" placeholder="Option 2" value={option2} onChange={(event) => { setOption2(event.target.value) }} />
                            </div>

                            <div className="optionContainer">
                                <div className={`  ${(selectedOption === option3 && selectedOption !== '') ? 'SelectedAnswer' : 'normalAnswer'}`} onClick={() => { setSelectedOption(option3) }}></div>
                                <input className="option" name="option" placeholder="Option 3" value={option3} onChange={(event) => { setOption3(event.target.value) }} />
                            </div>

                            <div className="optionContainer">
                                <div className={` ${(selectedOption === option4 && selectedOption !== '') ? 'SelectedAnswer' : 'normalAnswer'}`} onClick={() => { setSelectedOption(option4) }}></div>
                                <input className="option" name="option" placeholder="Option 4" value={option4} onChange={(event) => { setOption4(event.target.value) }} />
                            </div>

                            <button className="AddquizBTN" type="submit">Submit </button>
                        </form>
                        {/* </div> */}
                    </div>
                </>
            </Modal>

            {/* Add Question Modal */}


            {/* Delete Question */}


            <Modal
                className="queModal"
                show={deletequestion}
                onHide={() => { setDeleteQuestion(false) }}
                renderBackdrop={renderBackdrop}
            >
                <>

                    <div className="modalContainer">
                        <div></div>
                        <div className="addQuizText">Delete Question</div>
                        <div onClick={() => { setDeleteQuestion(false) }} >
                            <img src="/img/cancel-icon.png" alt="delte" className="quizDelete" />
                        </div>
                    </div>
                    <div className="formContainer">
                        <div className="formInt" >
                            <form className="inputContianer" onSubmit={deleteQuiz}>

                                {/* <label className="inputHeading">You want to delete {selectedQuiz.company_name} </label> */}

                                <button className="deleteQuizBtn" type="submit">Delete </button>
                            </form>
                        </div>
                    </div>
                </>

            </Modal>










            {/* Delete Question */}
















        </div>
    )
}

export default Quiz