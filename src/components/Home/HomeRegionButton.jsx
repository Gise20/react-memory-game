import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "../../styles/Home/HomeCmp.css";

const HomeRegionButton = ({ region, selectedRegions, setSelectedRegions }) => {
    const isSelected = selectedRegions.includes(region);
    const buttonClassName = `btn-region button-style-1 button-style-1-color-2${isSelected ? " region-selected" : ""}`;
  
    const handleButtonClick = () => {
      if (isSelected) {
        setSelectedRegions(selectedRegions.filter((r) => r !== region));
      } else {
        setSelectedRegions([...selectedRegions, region]);
      }
    };
  
    return (
      <button className={buttonClassName} onClick={handleButtonClick}>
        <div>
          {region} {isSelected && <BsCheckCircleFill />}
        </div>
      </button>
    );
  };

export default HomeRegionButton;