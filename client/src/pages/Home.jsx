import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  //   const [cookies, setCookie, removeCookie] = useCookies(["token"]); // Initialize with the cookie name
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  useEffect(() => {
    console.log("Checking token:", token);

    if (!token) {
      console.log("No token found, redirecting to login");
      navigate("/login");
    }

    const verifyCookie = async () => {
      try {
        console.log("xxxxxx",token)
        const { data } = await axios.post(
          "http://localhost:4000/",
          {},
          {
            headers: {
              Authorization: token, // Include the token in the Authorization header
            },
          },
          { withCredentials: true }
        );

        const { status, user } = data;
        console.log(data);
        setUsername(user);

        if (status) {
          console.log("User authenticated:", user);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          console.log("User not authenticated, redirecting to login");
          //   removeCookie("token");
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        // removeCookie("token");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [token, navigate]);
  const Logout = () => {
    // removeCookie("token");
    localStorage.removeItem("token");
    navigate("/signup");
  };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
