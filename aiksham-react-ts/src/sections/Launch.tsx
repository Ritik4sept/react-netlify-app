import React from "react";

const engagementSteps = [
  {
    icon: "bi-envelope",
    title: "Organization Launch",
    text: "December 10th: Company-wide announcement email introducing AIKSHAM program",
  },
  {
    icon: "bi-megaphone",
    title: "Launch Phase",
    text: "December 15th: Detailed program communications and registration opening",
  },
  {
    icon: "bi-calendar-event",
    title: "Session Invites",
    text: "Targeted communications for leadership (Dec 15), other groups (Dec 22), and functional sessions (Jan 5)",
  },
];

const Engagement: React.FC = () => {
  return (
    <section
      id="engagement"
      style={{
        backgroundColor: "#e5e5e6",
        padding: "60px 0",
      }}
    >
      <div className="container padding">

        <span className="engagement-tag mb-3 d-inline-block">
          COMMUNICATION
        </span>

        <h2 className="heading_h1 mb-3">
          Engagement &amp; Launch Strategy
        </h2>

        <p className="text-muted mb-5" style={{ maxWidth: 900 }}>
          Multi-phase communication campaign designed to build excitement and
          ensure maximum participation across all employee levels.
        </p>

        <div className="row">
          {engagementSteps.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              
              {/* CARD */}
              <div className="engagement-card h-100 text-center">

                <div className="engagement-icon mb-3">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h5 className="headingh_h2 mb-2">
                  {item.title}
                </h5>

                <p className="text-muted mb-0 paragraph">
                  {item.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Engagement;
