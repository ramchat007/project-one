import React, { useState, useEffect } from 'react';
import axios from 'axios'
import MeetingCard from './Meeting-card';
import { NavLink } from "react-router-dom";
import meetingData from './Meeting-data.js';

function Card(props) {

    let meetingCard;
    const [ past, upcoming, cancelled] = meetingData;
    const { meetingCard: pastMeetingCard} = past;
    const { meetingCard: cancelledMeetingCard} = cancelled;

    // const [meetings, setMeetings] = useState([]);

    // function addMeeting(newMeeting) {
    //     console.log(newMeeting);
    //     setMeetings(prevMeetings => {
    //         return [...prevMeetings, newMeeting];
    //     });
    // }
    
    const [meetingDataApi, setMeetingDataApi] = useState([]);
    const [meeting] = useState({
        src:"",
        boldText:"",
        meetingDep:"",
        date:"",
        time:""
    });

    useEffect(() => {
        axios.get('https://booking-engine-1.firebaseio.com/meeting.json').then(result => {
            const meetingDatas = result.data;
            const meetings = [];
            for (const key in meetingDatas) {
                meetings.push({id: key, boldText:meetingDatas[key].boldText, meetingDep:meetingDatas[key].meetingDep, date:meetingDatas[key].date, time:meetingDatas[key].time, src:meetingDatas[key].src})
            }
            setMeetingDataApi(meetings);
        });
        return () => {
            console.log('clean UP')
        }
    },[meeting]);

    let cardData = [];
    if(props.heading === past.heading) {
        cardData = pastMeetingCard.map((item) => <MeetingCard key={item.id} src={item.src} boldText={item.boldText} meetingDep={item.meetingDep} date={item.date} time={item.time} />).slice(0, 3);
        meetingCard = pastMeetingCard;
    }
    else if(props.heading === upcoming.heading) {
        cardData = meetingDataApi.map((item) => <MeetingCard key={item.id} src={item.src} boldText={item.boldText} meetingDep={item.meetingDep} date={item.date} time={item.time} />).slice(0, 3);
        meetingCard = meetingDataApi;
    }
    else if(props.heading === cancelled.heading) {
        cardData = cancelledMeetingCard.map((item) => <MeetingCard key={item.id} src={item.src} boldText={item.boldText} meetingDep={item.meetingDep} date={item.date} time={item.time} />).slice(0, 3);
        meetingCard = cancelledMeetingCard;
    }

  return (        
    <div className="col-md-4">
        <div className={props.className}>
            <div className="card-header justify-content-between">
                <h2>{props.heading}</h2>
                <div className="sec-rt">
                    <b>{meetingCard.length}</b>
                    <NavLink to="/new-meeting" className="btn btn-action"><i className="fc-user-plus"></i></NavLink>
                </div>
            </div>
            <div className="card-body">
                <ul>
                    {
                        cardData
                    }
                    
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Card;
