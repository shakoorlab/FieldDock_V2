import React, { useState } from "react";
import FieldDockImager from "../../components/Imaging/FieldDockImager";
import AnalyzedImages from "../../components/Imaging/AnalyzedImages";

function Imaging() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <div className="page-title-box">
        <h3>Imaging</h3>
      </div>
      <div className="button-container">
        {/* Add onClick handlers to set the selected option */}
        <button
          className="choice-button"
          onClick={() => setSelectedOption("FieldDock")}
        >
          FieldDock Imager
        </button>
        <button
          className="choice-button"
          onClick={() => setSelectedOption("Analyzed")}
        >
          Analyzed Images
        </button>
      </div>
      {/* Conditionally render the appropriate component based on the selected option */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        {selectedOption === "FieldDock" && <FieldDockImager />}
        {selectedOption === "Analyzed" && <AnalyzedImages />}
      </div>
    </>
  );
}

export default Imaging;
