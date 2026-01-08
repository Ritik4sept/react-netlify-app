import React from "react";

const personas = [
  {
    title: "AI Leader",
    desc: `Senior Leaders, HODs (CG2 & CG1). Focus on AI strategy,
    governance, and scaling adoption. 15–20 hours including
    leadership workshops.`,
    img: "/assets/leader.avif",
  },
  {
    title: "AI Practitioner",
    desc: `Middle Management, Section Heads (CG3). Hands-on AI
    analytics and plant system integration. 20–30 hours
    with instructor-led sessions.`,
    img: "/assets/Practitioner.avif",
  },
  {
    title: "AI-Aware Supervisor",
    desc: `Entry level supervisors (CG4). AI literacy and exposure
    to AI-driven systems. 20–30 hours including productivity
    series.`,
    img: "/assets/Supervisor.avif",
  },
  {
    title: "AI-Enabled Engineer",
    desc: `Graduate Engineer Trainees & MTs. Full AI skill stack
    with capstone projects. 50–70 hours including sandbox
    and mentorship.`,
    img: "/assets/Engineer.png",
  },
];

const Personas: React.FC = () => {
  return (
    <section
      id="why"
      style={{
        backgroundColor: "#ffffff",
        padding: "90px 0",
      }}
    >
      <div className="container text-center padding">

        {/* LEFT ALIGNED HEADER */}
        <div className="text-start mb-5">
         <span className="persona-badge mb-3 d-inline-block">
            PERSONAS
         </span>

         <h1 className="heading_h1 mt-2">
           Four Distinct Learning Pathways
          </h1>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {personas.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="persona-card h-100">

                {/* Image */}
                <img
                  src={item.img || "https://via.placeholder.com/160"}
                  alt={item.title}
                  className="persona-img"
                />

                {/* Title */}
                <h5 className="headingh_h2 mt-4 mb-3">
                  {item.title}
                </h5>

                {/* Description */}
                <p className="text-muted persona-desc paragraph">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Personas;
