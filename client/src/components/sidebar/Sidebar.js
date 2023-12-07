import React from "react";
import usericon from './userIcon.webp';

import {
 
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand ">
          <a href="/" style={{ textDecoration: "none", color: "#fff" }} className="d-flex">
            <img src={usericon} alt="usericon" style={{ height:"45px", marginRight:"5px"}}/>
            <div className="p-1 ">
            <h5 style={{fontSize:"18px"}} className="m-0 ">ASIF ZIA </h5>
            <p style={{fontSize:"11px", letterSpacing:".5px"}}>FrontEnd Developer</p>
            </div>
          </a>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link
          to={"/assignment"}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Assignment
          </li>
        </Link>

        <Link to={"/task"} style={{ textDecoration: "none", color: "#fff" }}>
          <li className="sidebar-list-item">
            <BsFillArchiveFill className="icon" /> Task
          </li>
        </Link>

        <Link to={"/team"} style={{ textDecoration: "none", color: "#fff" }}>
          <li className="sidebar-list-item">
            <BsPeopleFill className="icon" /> Team
          </li>
        </Link>

        <li className="sidebar-list-item">
          <a href="/">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
