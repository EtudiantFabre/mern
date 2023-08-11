import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <p className="fs-6 mb-0">
            &copy; Copyright <span className="d-none d-sm-inline-block">JS Morlu 2023</span>
          </p>
        </div>
        {/* End Col */}

        <div className="col-auto">
          <div className="d-flex justify-content-end">
            {/* List Separator */}
            <ul className="list-inline list-separator">
              <li className="list-inline-item">
                <a className="list-separator-link" href="/">FAQ</a>
              </li>

              <li className="list-inline-item">
                <a className="list-separator-link" href="/">License</a>
              </li>

              <li className="list-inline-item">
                {/* Keyboard Shortcuts Toggle */}
                <button
                  className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="/offcanvasKeyboardShortcuts"
                  aria-controls="offcanvasKeyboardShortcuts"
                >
                  <i className="bi bi-command"></i>
                </button>
                {/* End Keyboard Shortcuts Toggle */}
              </li>
            </ul>
            {/* End List Separator */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
  );
};

export default Footer;
