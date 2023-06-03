import React from 'react'
import { useState, useEffect, useContext } from 'react';
import Context from '@context/Context';
import HomeRegionButton from "@components/Home/HomeRegionButton";

// Define the HomeRegion component as a functional component
const HomeRegion = () => {
  const data = useContext(Context);

  // State variables to track the selected regions and select all option
  const [selectedRegions, setSelectedRegions] = useState(data.regions);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    data.regions = selectedRegions;
  }, [selectedRegions]);

  // Event handler for the select all checkbox change
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);

    if (isChecked) {
      // If select all is checked, set all regions as selected
      const allRegions = [
        "Kanto",
        "Johto",
        "Hoenn",
        "Sinnoh",
        "Unovao",
        "Kalos",
        "Alola",
        "Paldea",
        "Galar",
      ];
      setSelectedRegions(allRegions);
    } else {
      // If select all is unchecked, clear the selected regions
      setSelectedRegions([]);
    }
  };

  // Render the component
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
          <input
            style={{ marginLeft: "3px" }}
            type="checkbox"
            value="Select All"
            onChange={handleCheckboxChange}
            checked={selectAll}
          />
        </div>
      </div>
      {/* Render the HomeRegionButton components for each region */}
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
          region="Hoenn"
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
          region="Paldea"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <HomeRegionButton
          region="Galar"
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
      </div>
    </div>
  );
};

export default HomeRegion; // Export the HomeRegion component as the default export
