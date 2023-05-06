import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "../../styles/Home/HomeCmp.css";

const HomeRegion = () => {
  const [selectedRegions, setSelectedRegions] = useState(['Kanto']);

  const handleButtonClick = (region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter((r) => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };
 
  const renderButton = (region) => {
    const isSelected = selectedRegions.includes(region);
    const buttonClassName = `btn-region button-style-1 button-style-1-color-2${isSelected ? " region-selected" : ""}`;

    return (
      <button className={buttonClassName} onClick={() => handleButtonClick(region)}>
        <div>
          {region}{" "}
          {isSelected && <BsCheckCircleFill />}
        </div>
      </button>
    );
  };

  return (
    <div>
      <div className="lbl-region-container">
        <label className="lbl-region">Region:</label>
      </div>
      <div className="btn-region-container">
        {renderButton("Kanto")}
        {renderButton("Johto")}
        {renderButton("Hoeen")}
      </div>
      <div className="btn-region-container">
        {renderButton("Sinnoh")}
        {renderButton("Unovao")}
        {renderButton("Kalos")}
      </div>
      <div className="btn-region-container">
        {renderButton("Alola")}
        {renderButton("Galar")}
        {renderButton("Hisui")}
      </div>
    </div>
  );
};

export default HomeRegion;