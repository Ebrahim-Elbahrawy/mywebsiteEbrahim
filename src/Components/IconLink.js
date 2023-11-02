import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

function IconLink() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.style.setProperty(
      "--main-color",
      isDarkMode ? "#FFFFFF" : "#000000"
    );
    document.documentElement.style.setProperty(
      "--sec-color",
      isDarkMode ? "#000000" : "#FFFFFF"
    );
    document.documentElement.style.setProperty(
      "--third-color",
      isDarkMode ? "#82780b" : "#98b8faf8"
    );
  };
  return (
    // <div className="d-flex flex-column brand-link justify-content-center align-items-center icons-dark pb-4 pt-3">
    //   <a
    //     href="https://www.youtube.com/channel/UCboauVlgiA6zLADSctlEKzA"
    //     target="_blank"
    //     rel="noreferrer"
    //     className="icon-brand  pt-4"
    //   >
    //     <FontAwesomeIcon icon={faYoutubeSquare} />
    //   </a>
    //   <a
    //     href="https://www.facebook.com/ebrahim.elbahrawy.96"
    //     target="_blank"
    //     rel="noreferrer"
    //     className="icon-brand "
    //   >
    //     <FontAwesomeIcon icon={faFacebook} />
    //   </a>
    //   </div>
    <div className="theme-container d-flex flex-column brand-link justify-content-center align-items-center icons-dark pb-4 pt-3">
      <div className="theme-toggler">
        <span>Light</span>
        {isDarkMode ? (
          <FontAwesomeIcon
            icon={faMoon}
            className="theme_change"
            onClick={handleToggleDarkMode}
          />
        ) : (
          <FontAwesomeIcon
            icon={faLightbulb}
            className="theme_change2"
            onClick={handleToggleDarkMode}
          />
        )}
        <span>Dark</span>
      </div>
    </div>
  );
}

export default IconLink;
