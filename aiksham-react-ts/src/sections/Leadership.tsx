import React from "react";

const Leadership: React.FC = () => {
  return (
    <section
      id="leadership"
      style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
    >
      <div className="container padding">

        
        <span className="governance-tag mb-3 d-inline-block">
          TEAM STRUCTURE
        </span>

        
        <h2 className="heading_h1 mb-5">
          Leadership &amp; Governance
        </h2>

        <div className="row">
          
          <div className="col-md-6">

            <h3 className="headingh_h2 mb-3">Jindal Steel Team</h3>

            <p>
              <strong>Steering Committee:</strong> Indradyumna Datta, Gyan Gupta,
              Rachita Sahgal
            </p>

            <p>
              <strong>Program Lead:</strong> Radha coordinating
              stakeholder meetings and communications
            </p>

            <hr className="my-4" />

            <h3 className="headingh_h2 mb-3">Governance Structure</h3>

            <ul className="governance-list">
              <li>
                Steering Committee oversees strategy and progress reviews
              </li>
              <li>
                Program Management Team handles daily execution
              </li>
              <li>
                CAIO/L&amp;D validates content and secures infrastructure
              </li>
            </ul>

          </div>

          
          <div className="col-md-6">

            <h3 className="headingh_h2 mb-3">EY Partnership</h3>

            <p>
              <strong>Quality Assurance:</strong> Anurag Malik, Partner
              (25+ years)
            </p>

            <p>
              <strong>Engagement Partner:</strong> Ashish Jain, Learning
              Specialist (17+ years)
            </p>

            <p>
              <strong>Program Management:</strong> Sushma Verma, Gunmeet S Baga,
              plus dedicated team members and AI experts
            </p>

            <hr className="my-4" />

            <h3 className="headingh_h2 mb-3">Reporting Cadence</h3>

            <p>
              Weekly steering committee meetings initially, transitioning to
              fortnightly. Daily program management coordination moving to
              weekly post-stabilization.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
