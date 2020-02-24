import React, { useState, useEffect } from 'react';
import axios from 'axios'
import MeetingCard from './Meeting-card';

function AddNewMeeting() {
    const [meetingData, setMeetingData] = useState([]);
    const [meeting, setMeeting] = useState({
        src:"",
        boldText:"",
        meetingDep:"",
        date:"",
        time:""
    });

    function handleChange(event){
        const{name, value} = event.target;
        setMeeting(prevMeeting => {
            return {
                ...prevMeeting,
                [name]: value
            }
        });
    }

    useEffect(() => {
        axios.get('https://booking-engine-1.firebaseio.com/meeting.json').then(result => {
            const meetingDatas = result.data;
            const meetings = [];
            for (const key in meetingDatas) {
                meetings.push({id: key, boldText:meetingDatas[key].boldText, meetingDep:meetingDatas[key].meetingDep, date:meetingDatas[key].date, time:meetingDatas[key].time, src:meetingDatas[key].src})
            }
            setMeetingData(meetings);
        });        
        return () => {
            console.log('clean UP')
        }
    },[meeting]);

    function submitForm(event) {        
        
        axios.post('https://booking-engine-1.firebaseio.com/meeting.json', meeting)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
        setMeeting({
            src:"",
            boldText:"",
            meetingDep:"",
            date:"",
            time:""
        })
        event.preventDefault();
    }

  return (    
    <>
        <main role="main">
            <section>
                <div className="container">
                    <h1>Add Meeting Schedule</h1>
                    <div className="row">
                        <div className="col-sm-12">
                            <form onSubmit={submitForm}>
                                <div className="form-group">
                                    <label htmlFor="name">Company Name:</label>
                                    <input type="text" onChange={handleChange} name="boldText" className="form-control" id="company-name" value={meeting.boldText} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="meetingDep">Department:</label>
                                    <input type="text" onChange={handleChange} name="meetingDep" className="form-control" id="meetingDep" value={meeting.meetingDep} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date:</label>
                                    <input type="date" onChange={handleChange} name="date" className="form-control" id="date" value={meeting.date} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Time:</label>
                                    <input type="time" onChange={handleChange} name="time" className="form-control" id="time" value={meeting.time} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="src">Image Path:</label>
                                    <input type="text" onChange={handleChange} name="src" className="form-control" id="src" value={meeting.src} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-sm-12">
                            <ul>
                                {meetingData.map((item) => <MeetingCard key={item.id} src={item.src} boldText={item.boldText} meetingDep={item.meetingDep} date={item.date} time={item.time} />)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
}

export default AddNewMeeting;
