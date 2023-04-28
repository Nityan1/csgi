

import React, { useState } from "react"
import "./Dashboard.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TextareaAutosize, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function Dashboard() {

    const [expanded, setExpanded] = useState(false);
    const [noticeDate, setNoticeDate] = useState(new Date());
    const [openCalender, setOpenCalender] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const submitDate = () => {
        console.log(noticeDate);
        setExpanded(false)
    }

    const addEvent = () => {
        console.log('event added');

    }


    return (
        <div className="mainDiv" >
            <div className="Mcontainer" >

                <div className="mockPhone">
                    <div className="header">
                        <img src="/img/logo.png" alt="logo" className="headerLogo" />
                    </div>

                    <div className="notice">

                        <div className="noticeHeader">
                            <h3>Notice</h3>
                            <h5>25/04/2023</h5>

                        </div>
                        <p className="noticeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum lorem sit amet turpis mollis sollicitudin. Integer leo eros, faucibus eu velit eu, sagittis ullamcorper elit. Integer eget pretium felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur elementum neque ex, in bibendum magna consectetur ut. Aenean ac ex a turpis vehicula suscipit. Sed sed nulla eget augue tempor sodales. Morbi vulputate posuere metus, vitae sollicitudin risus pellentesque ac. Pellentesque at dignissim nisi, at eleifend urna. Aliquam eget arcu ex. </p>
                    </div>

                    <div className="notice">
                        <img src="/img/dash.jpg" alt="pic" className="dashPic" />
                        <p className="noticeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum lorem sit amet turpis mollis sollicitudin. Integer leo eros, faucibus eu velit eu, sagittis ullamcorper elit. Integer eget pretium felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur elementum neque ex, in bibendum magna consectetur ut. Aenean ac ex a turpis vehicula suscipit. Sed sed nulla eget augue tempor sodales. Morbi vulputate posuere metus, vitae sollicitudin risus pellentesque ac. Pellentesque at dignissim nisi, at eleifend urna. Aliquam eget arcu ex. </p>

                    </div>
                </div>

                <div className="modals">


                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            // aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <p sx={{ width: '33%', flexShrink: 0, }} className="modalHeading">
                                Notice
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>


                            <TextareaAutosize
                                className="noticeArea"
                                minRows={3}
                                placeholder="Minimum 3 rows"
                                aria-label="minimum height"
                            />


                            <div className="dateArea">

                                {!openCalender &&
                                    <div onClick={() => { setOpenCalender(true) }}>
                                        <CalendarMonthIcon />
                                    </div>
                                }

                                {openCalender &&
                                    <div>
                                        <Calendar onChange={(e) => { setNoticeDate(e) }} value={noticeDate} />
                                    </div>}

                                <p className="dateInput"> {moment(noticeDate).format('DD/MM/YYYY')} </p>


                                <img src="/img/submit-icon.png" alt="submit-icon" className="submitIcon" onClick={() => { submitDate() }} />


                            </div>




                        </AccordionDetails>
                    </Accordion>


                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <p sx={{ width: '33%', flexShrink: 0 }} className="modalHeading">Events</p>

                        </AccordionSummary>
                        <AccordionDetails>
                            <form onSubmit={addEvent}>

                                <input type="file" className="pic" name="pic" accept="image/png, image/jpeg" />

                                <TextareaAutosize
                                    className="noticeArea"
                                    minRows={3}
                                    placeholder="Description"
                                    aria-label="minimum height"
                                />

                                <img src="/img/submit-icon.png" alt="submit-icon" className="submitIconEvent" onClick={() => { submitDate() }} />
                            </form>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <p sx={{ width: '33%', flexShrink: 0 }} className="modalHeading">Leaderboard</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <form className="leaderBoard">
                                <div>
                                    <label className="leaderbaordText1">Semester</label>
                                    <input type="text" name="sem" className="leaderboardInput" />
                                </div>

                                <div>
                                    <label className="leaderbaordText2">Branch</label>
                                    <input type="text" name="branch" className="leaderboardInput" />
                                </div>

                                <div>
                                    <label className="leaderbaordText3">Name</label>
                                    <input type="text" name="name" className="leaderboardInput" />
                                </div>

                                <div>
                                    <label className="leaderbaordText4">Achievement</label>
                                    <input type="text" name="achievement" className="leaderboardInput" />
                                </div>


                            </form>
                            <img src="/img/submit-icon.png" alt="submit-icon" className="submitIconEvent" onClick={() => { }} />
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>

        </div>
    )
}

export default Dashboard