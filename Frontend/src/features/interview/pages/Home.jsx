import React from "react";
import "../styles/home.scss";
const Home = () => {
  return (
    <main className="home">
      <div className="interview-input-group">
        <div className="left">
          <textarea
            name="jobDescription"
            id="jobDescription"
            placeholder="Enter Job Description here..."
          ></textarea>
          
          <div className="right">
            <div className="input-group">
              <label htmlFor="resume">Upload resume</label>
              <input className="file-label" hidden type="file" name="resume" id="resume" accept=".pdf" />
            </div>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="selfDescription">Self Description</label>
          <textarea
            name="selfDescription"
            id="selfDescription"
            placeholder="Describe yourself in a dew sentences..."
          ></textarea>
          <button className="generate-btn">Generate interview Report</button>
        </div>
        
      </div>
    </main>
  );
};

export default Home;
