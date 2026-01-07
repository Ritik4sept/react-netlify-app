import React from "react";

const features = [
  {
    title: "Email & Communication",
    text: "AI-powered prompts for faster, clearer communication",
  },
  {
    title: "MIS & Dashboards",
    text: "Automated reporting and data visualization",
  },
  {
    title: "Report Drafting",
    text: "AI-assisted document creation and editing",
  },
  {
    title: "Presentation Generator",
    text: "Rapid slide deck creation with AI",
  },
  {
    title: "Excel Accelerator",
    text: "Advanced spreadsheet automation and analysis",
  },
  {
    title: "SAP/ERP Productivity",
    text: "AI integration with enterprise systems",
  },
  {
    title: "SOP Automation",
    text: "Streamlined standard operating procedures",
  },
  {
    title: "Research & Analysis",
    text: "RCA, document summaries, and insights",
  },
];

const Training: React.FC = () => {
  return (
    <section
      id="training"
      style={{ backgroundColor: "#e5e5e6", padding: "80px 0" }}
    >
      <div className="container padding">
        {/* Heading */}
        <small className="text-uppercase text-muted">
          Training Topics
        </small>

        <h2 className="heading_h1 mt-2 mb-3">
          Personal Productivity Enablement
        </h2>

        <p className="text-muted mb-5" style={{ maxWidth: 700 }}>
          Comprehensive AI training covering essential workplace productivity
          tools and automation capabilities.
        </p>

        {/* Cards */}
        <div className="row">
          {features.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="why-card h-100 p-4">
                <h5 className="headingh_h2 mb-2">
                  {item.title}
                </h5>
                <p className="mb-0 paragraph">
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

export default Training;
