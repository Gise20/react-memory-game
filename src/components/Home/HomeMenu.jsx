import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";

const HomeMenu = () => {
  const navigate = useNavigate();

  // Event handler for clicking the "About" label
  const handleClickAbout = () => {
    navigate("/about");
  };

  // State variable to track the visibility of the menu
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  // Event handler for clicking the menu button
  const handleButtonClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  // Event handler for clicking outside the menu to close it
  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  // Add and remove event listener for outside menu clicks when the component mounts/unmounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  // Render the component
  return (
    <div>
      {/* Header section */}
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

      {/* Menu button */}
      <button className="home-menu-button" onClick={handleButtonClick}>
        <TfiMenu size={30} />
      </button>

      {/* Menu options */}
      {isMenuVisible && (
        <div className="home-menu" ref={menuRef}>
          <div className="home-menu-option">
            <label>HighScores</label>
          </div>
          <div className="home-menu-option">
            <label onClick={handleClickAbout} >About</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeMenu; // Export the HomeMenu component as the default export
