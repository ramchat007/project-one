import React from 'react';
import { NavLink } from "react-router-dom";
import meetingData from './Meeting-data.js';

import './Home.css';
import Card from './Card';

function Home() {
  // const [ past, upcoming, cancelled] = meetingData;
  return (
        <main role="main" style={{backgroundColor: "#e9edf4"}}>
            <section>
                <div className="container">
                    <div className="head-txt text-center">
                        <h1>Minutes of Meeting</h1>
                        <p className="lead text-muted">New Meeting, Document MOM, Track MOM</p>
                    </div>
                    <h2>My Dashboard</h2>
                    <div className="row dashboard-box">
                        {meetingData.map((item) => <Card key={item.key} meetings={item.meetings} heading={item.heading} className={item.className} />)}
                        {/* <Card meetings={upcoming.meetings} heading={upcoming.heading} className={upcoming.className} />
                        <Card meetings={cancelled.meetings} heading={cancelled.heading} className={cancelled.className} /> */}
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                          <div className="card">
                            <h5 className="card-header"><i className="fc-bell dark"></i> Notifications</h5>
                            <div className="card-body">
                              <ul className="list-def chat">
                                <li>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="card-text">Lorem Ipsum Dummy Text Lorem Ipsum dumm</div>
                                        <small className="text-muted">2 days ago</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="card-text">Lorem Ipsum Dummy Text Lorem Ipsum dumm</div>
                                        <small className="text-muted">2 days ago</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="card-text">Lorem Ipsum Dummy Text Lorem Ipsum dumm</div>
                                        <small className="text-muted">2 days ago</small>
                                    </div>
                                </li>
                              </ul>
                              <NavLink to="/" className="btn btn-primary">View All</NavLink>
                            </div>
                          </div>
                        </div>
                          <div className="col-sm-6">
                            <div className="card">
                              <h5 className="card-header"><i className="fc-paper-plane dark"></i> MOM Features</h5>
                              <div className="card-body">
                                <ul className="list-def hand">
                                  <li>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <div className="card-text">Lorem Ipsum Dummy Text Lorem Ipsum dumm</div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <div className="card-text">Lorem Ipsum Dummy Text Lorem Ipsum dumm</div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <div className="card-text">Lorem Ipsum Dummy Text Lorem Ipsum dumm</div>
                                      </div>
                                  </li>
                                </ul>
                                <NavLink to="/" className="btn btn-primary">View All</NavLink>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
            </section>
        </main>
  );
}

export default Home;
