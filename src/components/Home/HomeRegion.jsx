import React, { useState } from "react";
import HomeRegionButton from "./HomeRegionButton";

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
      <div className="home-lbl-region-container">
        <div>
          <label className="home-lbl-region">Region:</label>
        </div>
        <div className="home-checkbox-container">
          <label className="home-lbl-region">
            {selectAll ? "Unselect All" : "Select All"}
          </label>
          <input style={{ marginLeft: "3px" }}
            type="checkbox"
            value="Select All"
            onChange={handleCheckboxChange}
            checked={selectAll}
          />
        </div>
      </div>
      <div className="home-btn-region-container">
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
      <div className="home-btn-region-container">
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
      <div className="home-btn-region-container">
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
