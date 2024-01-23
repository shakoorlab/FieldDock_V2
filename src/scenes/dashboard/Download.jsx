import React from "react";
import "../../css/download.css";

function Download() {
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
                <button type="button">Download</button>
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
