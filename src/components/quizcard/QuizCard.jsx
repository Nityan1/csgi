import React from 'react';
import "./QuizCard.css"

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
                <img src="/img/edit-icon.png" alt="edit" className="actionIcon" />
                <img src="/img/delete-icon.png" alt="delete" className="actionIcon" />
            </div>
        </div>
    )
}

export default QuizCard