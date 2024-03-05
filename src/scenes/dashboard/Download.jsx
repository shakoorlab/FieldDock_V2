import React, { useState, useRef, useEffect } from "react";
import "../../css/download.css";
import { CSVLink } from "react-csv";

function Download() {
  const [csvData, setCsvData] = useState([]);
  const [readyForDownload, setReadyForDownload] = useState(false);
  const csvLinkRef = useRef(); // Create a ref for the CSVLink

  // Convert your data object to the format expected by react-csv (array of arrays or array of objects)
  const fetchDataAndPrepareCSV = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json(); // This data is assumed to be in the correct format for react-csv
      setCsvData(data);
      setReadyForDownload(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Effect to trigger the download once the data is ready
  useEffect(() => {
    if (readyForDownload && csvLinkRef.current) {
      csvLinkRef.current.link.click();
      setReadyForDownload(false); // Optionally reset the state if needed
    }
  }, [readyForDownload]);

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
                    fetchDataAndPrepareCSV(
                      "http://3.15.191.116:8000/api/plotindices/"
                    )
                  }
                >
                  Download
                </button>
                {readyForDownload && (
                  <CSVLink
                    data={csvData}
                    filename="plot-indices-data.csv"
                    className="hidden-csv-link"
                    ref={csvLinkRef}
                    target="_blank"
                    style={{ display: "none" }} // Hide the CSVLink component
                  >
                    Download
                  </CSVLink>
                )}
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
