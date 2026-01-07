import React from "react";

const timeline = [
  {
    step: "1",
    month: "December 2025",
    text: "Kick-off Project, leadership sessions begin, CG2-CG3-CG4 personal productivity training starts.",
  },
  {
    step: "2",
    month: "January 2026",
    text: "Peak training month: 88 hours in-person, 19 hours virtual. E-learning journey completion for CG1–CG4. In-person deep-dive workshops.",
  },
  {
    step: "3",
    month: "February 2026",
    text: "Continued in-person sessions (80 hours) and virtual training (8 hours). microsite launch (Dec 16), CG3–CG4 workshops intensify across multiple dates.",
  },
  {
    step: "4",
    month: "March 2026",
    text: "Final in-person sessions (32 hours) completing the initial rollout phase. Program evaluation and impact assessment begins.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container padding">
        <div className="row align-items-start">
          
          {/* LEFT CONTENT */}
          <div className="col-md-6">
            <span className="timeline-tag">TIMELINE</span>

            <h2 className="heading_h1 mb-3">
              Program Rollout Schedule
            </h2>

            <p className="timeline-subtitle">
              AIKSHAM launches December 8th, 2025 with phased deployment
              across all employee levels through March 2026.
            </p>

            <div className="timeline-wrapper">
              {timeline.map((item, index) => (
                <div className="timeline-item" key={index}>
                  
                  {/* NUMBER */}
                  <div className="timeline-number">
                    {item.step}
                  </div>

                  {/* LINE */}
                  {index !== timeline.length - 1 && (
                    <div className="timeline-line"></div>
                  )}

                  {/* CONTENT */}
                  <div className="timeline-content">
                    <h5 className="headingh_h2">{item.month}</h5>
                    <p className="paragraph">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6">
            <img
              src="/public/assets/appointment-agenda-reminder-personal-organizer-calendar-concept.jpg"
              alt="Timeline"
              className="img-fluid rounded timeline-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
