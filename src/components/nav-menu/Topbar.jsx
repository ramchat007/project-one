import React from 'react';
import {NavLink} from 'react-router-dom';


function Topbar() {
    function openNav() {  
        document.querySelector("body").classList.toggle("sidenavOpend");
    }

  return (
    <div className="top-nav">
        <div className="container fluid d-flex">
        <button className="navbar-toggler openbtn" type="button" onClick={openNav}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="search-input-sec">
            <div className="form-group">
                <button type="button" className="btn"><i className="fc-search dark"></i></button>
                <input type="text" placeholder="Search Minutes, Action Items" />
            </div>
        </div>
        <ul className="navigation mid">
            <li><NavLink to="/"><i className="fc-home dark"></i></NavLink></li>
            <li><NavLink to="/"><i className="fc-user-plus dark"></i></NavLink></li>
            <li><NavLink to="/"><i className="fc-list-thumb dark"></i></NavLink></li>
            <li><NavLink to="/"><i className="fc-map-marker dark"></i></NavLink></li>
        </ul>
        <ul className="navigation right">
            <li><NavLink to="/" className="info-btn"><i className="fc-info dark"></i></NavLink></li>
            <li><NavLink to="/" className="notification-btn"><i className="fc-bell dark"><span>4</span></i></NavLink></li>
            <li><NavLink to="/" className="profile-btn fc-user"><img src="resources/images/common/user-profile.png" alt="user" /></NavLink></li>
        </ul>
        </div>
    </div>
  );
}

export default Topbar;
