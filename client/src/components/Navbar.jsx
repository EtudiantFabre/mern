import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from 'jquery';
// import Popper from 'popper.js';
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-custom">
      <ul className="list-unstyled topbar-menu float-end mb-0">
        {/* ... Other menu items ... */}
        
        {/* Notification Dropdown */}
        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="dripicons-bell noti-icon"></i>
            <span className="noti-icon-badge"></span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
            <div className="dropdown-item noti-title px-3">
              <h5 className="m-0">
                <span className="float-end">
                  <a href="/" className="text-dark">
                    <small>Clear All</small>
                  </a>
                </span>Notification
              </h5>
            </div>
            <div className="px-3" style={{ maxHeight: "300px" }} data-simplebar>
              {/* Notification items */}
              {/* ... */}
            </div>
            {/* View All */}
            <a href="/" className="dropdown-item text-center text-primary notify-item border-top border-light py-2">
              View All
            </a>
          </div>
        </li>
        
        {/* Apps Dropdown */}
        <li className="dropdown notification-list d-none d-sm-inline-block">
          <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="dripicons-view-apps noti-icon"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
            <div className="p-2">
              <div className="row g-0">
                {/* App items */}
                <div className="col">
                  <a className="dropdown-icon-item" href="/">
                    {/* App icon */}
                    <img src="/assets/images/brands/slack.png" alt="slack" />
                    {/* App name */}
                    <span>Slack</span>
                  </a>
                </div>
                {/* ... */}
              </div>
              <div className="row g-0">
                {/* App items */}
                <div className="col">
                  {/* ... */}
                </div>
                {/* ... */}
              </div> {/* end row*/}
            </div>
          </div>
        </li>

        {/* User Dropdown */}
        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
            <span className="account-user-avatar">
              <img src="/assets/images/zeepay.png" alt="user" className="rounded-circle" />
            </span>
            <span>
              <span className="account-user-name"></span>
              <span className="account-position">Admin</span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
            {/* User profile items */}
            {/* ... */}
          </div>
        </li>
      </ul>
      <button className="button-menu-mobile open-left">
        <i className="mdi mdi-menu"></i>
      </button>
      <div className="app-search dropdown d-none d-lg-block">
        <form>
          {/* Search form */}
          {/* ... */}
        </form>
        {/* Search Dropdown */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Navbar;
