import React from 'react';

function Card(props) {
  return (        
    <li>
        <div className="d-flex justify-content-between align-items-center">
            <div className="card-thumb"><img src={props.src} alt="" /></div>
            <div className="card-text"><b>{props.boldText}</b> {props.meetingDep}</div>
            <small className="text-muted"><span>{props.date}</span> {props.time}</small>
        </div>
    </li>
  );
}

export default Card;
