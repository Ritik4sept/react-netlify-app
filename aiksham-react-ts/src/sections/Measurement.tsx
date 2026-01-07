import React from "react";

const Measurement: React.FC = () => {
  return (
    <section id="measurement" className="measurement-section">
      <div className="container padding">

        {/* Title */}
        <h2 className="measurement-title text-center heading_h3 ">
          Measurement & Adoption Tracking
        </h2>

        {/* Top Metrics */}
        <div className="row text-center mt-5">
          <div className="col-md-3 mb-4">
            <h1 className="metric-value">1–2</h1>
            <h6 className="metric-title">Hours Saved Daily</h6>
            <p className="metric-text">
              Target productivity gain per employee through AI tool adoption
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h1 className="metric-value">100%</h1>
            <h6 className="metric-title">CG2–CG4 Coverage</h6>
            <p className="metric-text">
              Complete virtual session participation across target employee levels
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h1 className="metric-value">1,360</h1>
            <h6 className="metric-title">Workshop Participants</h6>
            <p className="metric-text">
              Employees receiving in-person deep-dive training
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h1 className="metric-value">5</h1>
            <h6 className="metric-title">Use Cases Per Function</h6>
            <p className="metric-text">
              AI opportunities identified through workshops
            </p>
          </div>
        </div>

        {/* Evaluation Framework */}
        {/* <h3 className="evaluation-title mt-5">Evaluation Framework</h3> */}

        {/* <div className="row mt-4">
          <div className="col-md-4">
            <h6 className="eval-heading">Impact Metrics</h6>
            <ul className="eval-list">
              <li>Hours saved per employee</li>
              <li>AI adoption rate</li>
              <li>Department engagement</li>
              <li>Use cases generated</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="eval-heading">Dashboards</h6>
            <ul className="eval-list">
              <li>Weekly AIKSHAM dashboard</li>
              <li>Department leaderboard</li>
              <li>Adoption heatmaps</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="eval-heading">Assessment</h6>
            <ul className="eval-list">
              <li>Pre/post evaluation</li>
              <li>Time-saved validation</li>
              <li>Leadership use case review</li>
            </ul>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Measurement;
