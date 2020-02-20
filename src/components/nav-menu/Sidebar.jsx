import React from 'react';
import Topbar from './Topbar';
import './Navbar.css';
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
      <div className="navbar">
        <NavLink to="/" className="navbar-brand d-flex align-items-center"><img src="resources/images/common/logo.png" alt="" id="blackLogo" /></NavLink>
        <div className="sidenavWrap bg-dark" id="navbarHeader">
            <div className="sidenav">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/"><i className="fc-home"></i> DashBoard</NavLink></li>
                    <li><NavLink  activeClassName="active" to="/new-meeting"><i className="fc-user-plus"></i> New Meeting</NavLink></li>
                    <li><NavLink  activeClassName="active" to="/document-mom"><i className="fc-list-thumb"></i> Document MOM</NavLink></li>
                    <li><NavLink  activeClassName="active" to="/track-mom"><i className="fc-map-marker"></i> Track MOM</NavLink></li>
                    <li><NavLink  activeClassName="active" to="/about"><i className="fc-info"></i> About</NavLink></li>
                </ul>
                <span className="d-flex align-items-center copy-txt"><i className="fc-copy"></i> Copyright</span>
            </div>
        </div>
        <Topbar/>
    </div>
  );
}

export default Sidebar;
