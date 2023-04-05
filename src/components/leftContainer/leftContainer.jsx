import { useEffect } from "react";
import { useState } from "react";
import UserContact from "./userContact";
import UserLogin from "./userLogin";

const LeftContainer = (props) => {
    const { user } = props
    const {picture: {large}} = user;

    const [darkMode, setDarkMode] = useState(false);

    const handleColorMode = () => {
      setDarkMode(!darkMode)
    }



    useEffect(() => {
      if (darkMode) {
        document.body.className = "dark-mode";
      } else {
        document.body.className = "light-mode";
      }
    }, [darkMode]); 

  return (
    <>
      <img src={large} alt="user picture" id="user-picture" />

      <div className="login-container">
        <UserLogin user={user} />
      </div>

      <div className="contact-container">
        <UserContact user={user} />
      </div>
      <div className="light-mode-container">
        
      <button onClick={handleColorMode} id="theme-button"><i className={`theme-icon fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}></i>{`${darkMode ? "Light Theme" : "Dark Theme"}`} </button>
      </div>
      <div className="api-details">
      
        API data from
        <a
          href="https://randomuser.me/"
          className="randomuser-url"
          target="_blank"
        >
          RandomUser.me
        </a>
      </div>
    </>
  );
};

export default LeftContainer;
