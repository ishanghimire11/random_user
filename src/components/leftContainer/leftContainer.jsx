import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import PlaceholderPhoto from "../../assets/placeholderImage.jpg"
import UserContact from "./userContact";
import UserLogin from "./userLogin";

const LeftContainer = (props) => {
  const { user } = props;
  const {picture: { large } } = user;

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );
  
  const handleColorMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    return localStorage.setItem('darkMode', newDarkMode);
  };
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <img src={large} alt="user picture" id="user-picture" />

      <div className="contact-container">
        <UserContact user={user} />
      </div>

      <div className="login-container">
        <UserLogin user={user} />
      </div>

      <div className="light-mode-container">
        <button onClick={handleColorMode} id="theme-button" type="button">
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} className="theme-icon" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="theme-icon" />
          )}
          {`${darkMode ? "Light Theme" : "Dark Theme"}`}
        </button>
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

LeftContainer.defaultProps = {
  large: "https://www.cmete.com/skins/theme_cmete_2016/images/placeholders/testimonial-placeholder.jpg"
}

LeftContainer.propTypes = {
  user: PropTypes.object,
  large: PropTypes.string
}

export default LeftContainer;
