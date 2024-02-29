import React from "react";
import "../../css/download.css";

function Download() {
  // Adjust how you call convertToCSV in fetchDataAndDownloadCSV
  const fetchDataAndDownloadCSV = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const csvString = convertToCSV(data); // Pass the single object directly
      triggerDownload(csvString, "data.csv");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Adjusted convertToCSV function for a single object
  const convertToCSV = (dataObject) => {
    // Check if the dataObject is not empty
    if (!Object.keys(dataObject).length) {
      return "";
    }

    // Extract column headers
    const headers = Object.keys(dataObject).join(",") + "\n";

    // Generate CSV row for the single object
    const row = Object.values(dataObject)
      .map((value) => {
        // Convert null or undefined to empty string
        if (value === null || value === undefined) {
          return "";
        }
        // If the value is an object (and not a Date), convert to a string
        // You might need to handle complex objects differently
        if (typeof value === "object" && !(value instanceof Date)) {
          return JSON.stringify(value).replace(/"/g, "'");
        }
        // Escape double quotes in the value
        const escapedValue = value.toString().replace(/"/g, '""');
        // Enclose the value in double quotes if it contains a comma, line break, or double quote
        return /[\n",]/.test(escapedValue) ? `"${escapedValue}"` : escapedValue;
      })
      .join(",");

    return headers + row;
  };

  // Function to trigger CSV download
  const triggerDownload = (csvString, filename) => {
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Full-width box above the grid */}
      <div className="page-title-box">
        <h3>Download Data</h3>
      </div>

      <div className="two-column-grid">
        {/* First row of boxes */}
        <div className="grid-row">
          <div className="box">
            <div className="title-box">Environmental Data</div>
            <div className="content-container">
              <div className="download-input-group">
                <input type="text" id="start-date" placeholder="Start Date" />
                <input type="text" id="end-date" placeholder="End Date" />
                <button type="button">Download</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="title-box">Trait Scorecard</div>
            <div className="content-container">
              <div className="download-input-group">
                <input type="text" id="start-date" placeholder="Start Date" />
                <input type="text" id="end-date" placeholder="End Date" />
                <button
                  onClick={() =>
                    fetchDataAndDownloadCSV(
                      "http://18.190.158.132:8000/api/plotindices/"
                    )
                  }
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second row of boxes */}
        <div className="grid-row">
          <div className="box">
            <div className="title-box">FieldDock Images </div>
            <div className="content-container">
              <div className="download-input-group">
                <input type="text" id="start-date" placeholder="Start Date" />
                <input type="text" id="end-date" placeholder="End Date" />
                <button type="button">Download</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="title-box">Mosaicked Drone Images</div>
            <div className="content-container">
              <div className="download-input-group">
                <input type="text" id="start-date" placeholder="Start Date" />
                <input type="text" id="end-date" placeholder="End Date" />
                <button type="button">Download</button>
              </div>
            </div>
          </div>
        </div>

        {/* Third row of boxes */}
        <div className="grid-row">
          <div className="box">
            <div className="title-box">Drone Data</div>
            <div className="content-container">
              <div className="download-input-group">
                <input type="text" id="start-date" placeholder="Start Date" />
                <input type="text" id="end-date" placeholder="End Date" />
                <button type="button">Download</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="title-box">Wireless Sensor Data</div>
            <div className="content-container">
              <div className="download-input-group">
                <input type="text" id="start-date" placeholder="Start Date" />
                <input type="text" id="end-date" placeholder="End Date" />
                <button type="button">Download</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="title-box">PheNode Data</div>
            <div className="content-container">
              <div className="download-input-group">
                <input type="text" id="start-date" placeholder="Start Date" />
                <input type="text" id="end-date" placeholder="End Date" />
                <button type="button">Download</button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width box within the grid */}
        <div className="download-full-width-box">
          {/* <div className="box"> */}
          <div className="title-box">All Data</div>
          <div className="content-container">
            <div className="download-input-group">
              <input type="text" id="start-date" placeholder="Start Date" />
              <input type="text" id="end-date" placeholder="End Date" />
              <button type="button">Download</button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Download;
