import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";

const HomeMenu = () => {
  const navigate = useNavigate();
  const handleClickAbout = () => {
    navigate("/about");
  };

  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const handleButtonClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div>
      <div className="home-header">
        <label className="home-lbl-header">HighScores</label>
        <label
          className="home-lbl-header"
          style={{ marginLeft: "35px" }}
          onClick={handleClickAbout}
        >
          About
        </label>
      </div>

      <button className="home-menu-button" onClick={handleButtonClick}>
        <TfiMenu size={30} />
      </button>

      {isMenuVisible && (
        <div className="home-menu" ref={menuRef}>
          <div className="home-menu-option">
            <label>HighScores</label>
          </div>
          <div className="home-menu-option">
            <label>About</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeMenu;
