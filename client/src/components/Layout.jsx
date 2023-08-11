import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "./Sidebar"; // Update the path accordingly
import Navbar from "./Navbar"; // Update the path accordingly
import Footer from "./Footer"; // Update the path accordingly
import $ from 'jquery';


const UserLayout = ({ children }) => {
  useEffect(() => {
    // const API_BASEURL = document.querySelector('meta[name="api_baseurl"]').getAttribute('content');
    const token = localStorage.getItem('token');

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    const downloadFile = async (url) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const filename = response.headers.get('filename');
        
        const urlObject = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = urlObject;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(urlObject);
      } catch (error) {
        const response = await error.response.json();
        const errorList = response.errors.map(error => `<li>${error}</li>`).join('');
        
        Swal.fire({
          title: 'Error',
          html: `<ul style="list-style-type: none;">${errorList}</ul>`,
          icon: 'error',
        });
      }
    };

    const getToken = () => {
      if (!token) {
        return null;
      }

      const payload = JSON.parse(atob(token.split('.')[1]));

      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
      }

      return token;
    };

    const setToken = (token) => {
      localStorage.setItem('token', token);
    };

    if (!getToken()) {
      window.location.replace('/login');
    } else {
      $('body').show();
    }

    $.ajaxSetup({
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  }, []);

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