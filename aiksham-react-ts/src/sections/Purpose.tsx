import React from "react";

const Purpose: React.FC = () => {
  return (
    <section id="whatisaiksham" className="purpose-section">
      <div className="container padding" >

        <p className="text-uppercase mb-2 purpose-subtitle">
          Program Overview
        </p>

        <h1 className="heading_h1 mb-5">Purpose & Strategic Outcomes</h1>

        <div className="row align-items-center">

          {/* LEFT SIDE – CARDS */}
          <div className="col-md-6">

            {/* Card 1 */}
            <div className="card purpose-card mb-4">
              <div className="card-body">
                <h4 className="headingh_h2 mb-3">Key Objectives</h4>
                <ul className="purpose-list style={{lineHeight: '1.5',fontSize: '20px',fontWeight: '400',fontColor:'#727272'}}>">
                  <li>Improve workforce productivity by 1–2 hours daily</li>
                  <li>Build AI awareness and confidence across roles</li>
                  <li>Identify AI opportunities in functions</li>
                  <li>Promote innovation & continuous learning</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card purpose-card">
              <div className="card-body">
                <h4 className="headingh_h2 mb-3">Expected Impact</h4>
                <p className=" style={{lineHeight: '1.5',fontSize: '20px',fontWeight: '400',fontColor:'#727272'}}">
                  Drive measurable organizational impact through daily AI
                  adoption, faster communication, automation discovery, and a
                  strong AI use-case pipeline for leadership prioritization.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src="/assets/business-person-looking-finance-graphs.jpg"
              alt="AI Impact"
              className="img-fluid rounded purpose-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Purpose;
