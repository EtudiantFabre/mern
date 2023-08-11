
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="leftside-menu">
      <a href="/" className="logo text-center logo-light">
        <span className="logo-lg">
          <img src="/assets/images/zeepay.png" alt="" height="65" />
        </span>
      </a>

      <a href="/" className="logo text-center logo-dark">
        <span className="logo-lg">
          <img src="/assets/images/logo-dark.png" alt="" height="16" />
        </span>
        <span className="logo-sm">
          <img src="/assets/images/logo_sm_dark.png" alt="" height="16" />
        </span>
      </a>

      <div className="h-100" id="leftside-menu-container" data-simplebar>
        <ul className="side-nav">
          <li className="side-nav-title side-nav-item">Navigation</li>

          <li className="side-nav-item">
            <Link to="/dashboard" className="side-nav-link">
              <i className="mdi mdi-home"></i>
              <span> Dashboard </span>
            </Link>
          </li>

          <li className="side-nav-item">
            <Link to="/tickets" className="side-nav-link">
              <i className="mdi mdi-ticket-confirmation"></i>
              <span>Tickets</span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/terminations" className="side-nav-link">
              <i className="mdi mdi-tray-full"></i>
              <span>Terminations</span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link
              to="#"
              className="side-nav-link"
              data-bs-toggle="collapse"
              data-bs-target="#Inflow"
              aria-expanded="false"
            >
              <i className="uil-layer-group"></i>
              <span>Inflow</span>
              <span className="menu-arrow"></span>
            </Link>
            <div className="collapse" id="Inflow">
              <ul className="side-nav-second-level">
                <li>
                  <Link to="/inflow/manual">Manual Entries</Link>
                </li>
                <li>
                  <Link to="/inflow/bulk">Bulk Loading</Link>
                </li>
                <li>
                  <Link to="/inflow/list">Inflows</Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Repeat for Reversals */}
          <li className="side-nav-item">
            <Link to="/partners" className="side-nav-link">
              <i className="mdi mdi-handshake-outline"></i>
              <span>Partners</span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/rate" className="side-nav-link">
              <i className="mdi mdi-timetable"></i>
              <span>Rate Setup</span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/reports" className="side-nav-link">
              <i className="mdi mdi-clipboard-list-outline"></i>
              <span>Reports</span>
            </Link>
          </li>
        </ul>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Sidebar;
