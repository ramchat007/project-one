import React from 'react';
import MeetingCard from './Meeting-card';
import { NavLink } from "react-router-dom";
import meetingData from './Meeting-data.js';

function Card(props) {

    const [ past, upcoming, cancelled] = meetingData;
    const { meetingCard: pastMeetingCard} = past;
    const { meetingCard: upcomingMeetingCard} = upcoming;
    const { meetingCard: cancelledMeetingCard} = cancelled;

    let cardData = [];
    if(props.heading === past.heading) {
        cardData = pastMeetingCard.map((item) => <MeetingCard key={item.id} src={item.src} boldText={item.boldText} meetingDep={item.meetingDep} date={item.date} time={item.time} />)
    }
    else if(props.heading === upcoming.heading) {
        cardData = upcomingMeetingCard.map((item) => <MeetingCard key={item.id} src={item.src} boldText={item.boldText} meetingDep={item.meetingDep} date={item.date} time={item.time} />)
    }
    else if(props.heading === cancelled.heading) {
        cardData = cancelledMeetingCard.map((item) => <MeetingCard key={item.id} src={item.src} boldText={item.boldText} meetingDep={item.meetingDep} date={item.date} time={item.time} />)
    }

  return (        
    <div className="col-md-4">
        <div className={props.className}>
            <div className="card-header justify-content-between">
                <h2>{props.heading}</h2>
                <div className="sec-rt">
                    <b>{props.meetings}</b>
                    <NavLink to="/" className="btn btn-action"><i className="fc-user-plus"></i></NavLink>
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
