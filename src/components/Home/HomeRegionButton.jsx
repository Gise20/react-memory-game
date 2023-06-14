import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

// Define the HomeRegionButton component as a functional component
const HomeRegionButton = ({ region, selectedRegions, setSelectedRegions }) => {
  // Check if the current region is selected
  const isSelected = selectedRegions.includes(region);

  // Define the CSS class for the button based on selection state
  const buttonClassName = `home-btn-region button-style-1 home-btn_media_adjust 
  button-style-1-color-2`;
  const buttonClassNameSelected = "region-selected";

  // Event handler for when the button is clicked
  const handleButtonClick = () => {
    if (isSelected) {
      // If the region is already selected, remove it from the selected regions
      setSelectedRegions(selectedRegions.filter((r) => r !== region));
    } else {
      // If the region is not selected, add it to the selected regions
      setSelectedRegions([...selectedRegions, region]);
    }
  };
  console.log(isSelected);
  // Render the component
  return (
    <button
      className={`${buttonClassName} ${
        isSelected && buttonClassNameSelected
      } `}
      onClick={handleButtonClick}
    >
      <div>
        {region} {isSelected && <BsCheckCircleFill />}
        {/* Display the region name and a checkmark icon if it's selected */}
      </div>
    </button>
  );
};

export default HomeRegionButton; // Export the HomeRegionButton component as the default export
