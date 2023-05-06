import React, { useState } from "react";
import HomeRegionButton from "./HomeRegionButton";
import "../../styles/Home/HomeCmp.css";

const HomeRegion = () => {
  const [selectedRegions, setSelectedRegions] = useState(["Kanto"]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);

    if (isChecked) {
      const allRegions = [
        "Kanto",
        "Johto",
        "Hoeen",
        "Sinnoh",
        "Unovao",
        "Kalos",
        "Alola",
        "Galar",
        "Hisui",
      ];
      setSelectedRegions(allRegions);
    } else {
      setSelectedRegions([]);
    }
  };

  return (
    <div>
      <div className="lbl-region-container">
        <div>
          <label className="lbl-region">Region:</label>
        </div>
        <div className="checkbox-container">
          <label className="lbl-region">
            {selectAll ? "Unselect All" : "Select All"}
          </label>
          <input className="marginL-1"
            type="checkbox"
            value="Select All"
            onChange={handleCheckboxChange}
            checked={selectAll}
          />
        </div>
      </div>
      <div className="btn-region-container">
        <HomeRegionButton
          region="Kanto"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <HomeRegionButton
          region="Johto"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <HomeRegionButton
          region="Hoeen"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
      </div>
      <div className="btn-region-container">
        <HomeRegionButton
          region="Sinnoh"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <HomeRegionButton
          region="Unovao"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <HomeRegionButton
          region="Kalos"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
      </div>
      <div className="btn-region-container">
        <HomeRegionButton
          region="Alola"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <HomeRegionButton
          region="Galar"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <HomeRegionButton
          region="Hisui"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
      </div>
    </div>
  );
};

export default HomeRegion;
