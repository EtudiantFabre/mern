import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "./template/SideBar"; // Update the path accordingly
import Navbar from "./template/NavBar"; // Update the path accordingly
import Footer from "./template/Footer"; // Update the path accordingly
import $ from 'jquery';


const UserLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;