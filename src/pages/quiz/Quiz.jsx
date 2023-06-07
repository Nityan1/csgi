

import React, { useEffect, useState } from "react"
// import QuizCard from "../../components/quizcard/QuizCard"
// import QuizRail from "../../components/quizrail/QuizRail"
import "./Quiz.css"
import { Modal } from "react-overlays"
import { DatabaseService, AddQuizDatabase, getAllquestions, deleteQuizDatabase } from "../../Service/DatabaseService";
import { green } from "@mui/material/colors";

function Quiz() {
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
    const [selectedQuiz, setSelectedQuiz] = useState({});
    const [editquestion, setEditQuestion] = useState(false);
    const [deletequestionModal, setDeleteQuestionModal] = useState(false);
    const [deletingQuestion, setDeletingQuestion] = useState({});
    const [questions, setQuestions] = useState([]);


    const getQuestions = async (id) => {
        let response = await getAllquestions(id);
        console.log('respose aya reeeeeee', response.data)
        setQuestions(response.data.result);
    }


    useEffect(() => {
        getQuiz();
    }, [])

    const getQuiz = async () => {
        let response = await DatabaseService();
        console.log('response', response)
        setQuizList(response.data.result)
        setSelectedQuiz(response.data.result[0])
        // console.log('/kokokokaoka',response.result[0].id)
        getQuestions(response.data.result[0].id)
    }

    useEffect(() => {
        // console.log('Selected QUiz is /', selectedQuiz)
    }, [selectedQuiz]);

    const addQuiz = async (event) => {
        event.preventDefault();

        console.log(quizName, quizDescription);
        const newData = {
            company_name: quizName,
            details: quizDescription,
            start_time: "2023-02-07 13:13:00",
            end_time: "2023-02-07 22:00:00"
        };

        let response = await AddQuizDatabase(newData);
        console.log('add quiz response', response);
        setQuizName('')
        setQuizDescription('');
        setAddQuizModal(false)
        console.log(quizList)
        if (response.status === 200) {
            console.log('response code 200')
            getQuiz();
        }

    }


    const deleteQuiz = async () => {
        console.log('selected quiz', selectedQuiz)
        let response = await deleteQuizDatabase(selectedQuiz.id);
        console.log('delete quiz response', response);
        getQuiz();


        setDeleteQuizModal(false);


    }

    const addQuestion = async (event) => {
        event.preventDefault();
        let data = {
            "question": question,
            "answers": [
                {
                    answer: option1,
                    is_correct: selectedOption === option1 ? 'true' : 'false'
                },
                {
                    answer: option2,
                    is_correct: selectedOption === option2 ? 'true' : 'false'
                },
                {
                    answer: option3,
                    is_correct: selectedOption === option3 ? 'true' : 'false'
                },
                {
                    answer: option4,
                    is_correct: selectedOption === option4 ? 'true' : 'false'
                },

            ],
            quiz_id: selectedQuiz.id
        }

        let response = await AddQuizDatabase(data);
        console.log('add question response', response);
        console.log('question', question)
        console.log('options', option1, option2, option3, option4)
        console.log('isko delte krne ka re babu', selectedOption)
        setAddquesModal(false)

    }

    const funcDeletingQuestion = () => {
        console.log('data item', deletingQuestion);
        setDeleteQuestionModal(false)




    }

    // let quizCardItems = 

    function QuizCard() {

        // console.log('list questions ki',questions.map((data)=>{ return (console.log(data))}))

        let displayData = questions?.map((data) => {
            return (
                <div className="container" >
                    <div className="dataContainer">
                        <b>Ques 1. </b>
                        <b> {data.question.question} </b>
                        <ol type="A">
                            {
                                data?.answer?.map((items) => { return (<li key={items.id} className={items.is_correct === 'true' ? "correct_answer" : null} >{items.answer}</li>) })
                            }
                        </ol>
                    </div>
                    <div className="actionsContainer">
                        <img src="/img/edit-question.png" alt="edit" className="actionIcon" onClick={() => { setEditQuestion(true) }} />
                        <img src="/img/delete-question.png" alt="delete" className="actionIcon" onClick={() => { setDeleteQuestionModal(true); setDeletingQuestion(data) }} />
                    </div>
                </div>


            )
        });


        return (displayData);
    }




    function QuizRail() {

        function QuizRailCard({ labelData, active }) {

            // console.log('label data', labelData)
            const getQuestion = () => {
                setSelectedQuiz(labelData);
                getQuestions(labelData.id);
            }

            return (
                <li onClick={() => { getQuestion() }} className={`quizCard ${active && 'cardActive'}`} key={labelData.id}>
                    {labelData.company_name}
                </li>
            )
        }


        return (
            <ul className="quizRailContainer">
                {
                    quizList?.map((listItem) => { return (<QuizRailCard labelData={listItem} active={selectedQuiz.company_name === listItem.company_name ? true : false} />) })
                }
            </ul>
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
                <h1>{selectedQuiz.company_name}</h1>
                <img src="/img/delete-quiz.png" alt="delete" className="iconDel" onClick={() => { setDeleteQuizModal(true) }} />
            </div>

            <div className="addquestionContainer">
                <img src="/img/add-question.png" alt="addQuestion" className="addQues" onClick={() => { setAddquesModal(true) }} />
                <p>Add Question</p>
            </div>



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
                    <form className="inputContianer" onSubmit={addQuiz}>

                        <label className="inputHeading">Name</label>
                        <input className="inputBox" name="name" placeholder="Quiz Name" value={quizName} onChange={(event) => { setQuizName(event.target.value) }} />

                        <label className="inputHeading">Description</label>
                        <input className="inputBox" name="desciption" placeholder="Description" value={quizDescription} onChange={(event) => { setQuizDescription(event.target.value) }} />

                        <button className="AddquizBTN" type="submit">Submit </button>
                    </form>
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
                            <div className="inputContianer" >

                                <label className="inputHeading">You want to delete "{selectedQuiz.company_name}" </label>

                                <button className="deleteQuizBtn" onClick={() => { deleteQuiz() }}>Delete </button>
                            </div>
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
                show={deletequestionModal}
                onHide={() => { setDeleteQuestionModal(false) }}
                renderBackdrop={renderBackdrop}
            >
                <>

                    <div className="modalContainer">
                        <div></div>
                        <div className="addQuizText">Delete Question</div>
                        <div onClick={() => { setDeleteQuestionModal(false) }} >
                            <img src="/img/cancel-icon.png" alt="delte" className="quizDelete" />
                        </div>
                    </div>
                    <div className="formContainer">
                        <div className="formInt" >
                            <div className="inputContianer" >

                                <label className="inputHeading">You want to delete { } </label>

                                <button className="deleteQuizBtn" onClick={() => { funcDeletingQuestion() }}>Delete </button>
                            </div>
                        </div>
                    </div>
                </>

            </Modal>










            {/* Delete Question */}
















        </div>
    )
}

export default Quiz