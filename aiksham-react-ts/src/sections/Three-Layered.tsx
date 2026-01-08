import React from "react";
import { BsCameraVideo, BsPeople, BsLaptop } from "react-icons/bs";

const Three: React.FC = () => {
  return (
    <section
      id="delivery-model"
      style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
    >
      <div className="container padding">
        <div className="row align-items-start">
          
          {/* LEFT IMAGE */}
          <div className="col-lg-5 mb-4">
            <img
              src="/assets/three-women-working-together.jpg"
              alt="Delivery Model"
              className="img-fluid rounded"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7">
            <span className="delivery-badge mb-3 d-inline-block">
              DELIVERY MODEL
            </span>

            <h1 className="heading_h1 mb-4">
              Three-Layered Program <br /> Structure
            </h1>

            <div className="row">
              
              {/* CARD 1 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="delivery-card h-100">
                  <span className="icon-circle">
                    <BsCameraVideo size={20} />
                  </span>

                  <h5 className="headingh_h2">Virtual Sessions</h5>
                  <p className="paragraph">
                    100% coverage for CG2–CG4 levels. Short 30–45 minute
                    high-impact sessions focused on productivity.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="delivery-card h-100">
                  <span className="icon-circle">
                    <BsPeople size={20} />
                  </span>

                  <h5 className="headingh_h2">Deep-Dive Workshops</h5>
                  <p className="paragraph">
                    In-person sessions for ~1,360 employees with hands-on
                    workshops and pilot ideas.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="delivery-card h-100">
                  <span className="icon-circle">
                    <BsLaptop size={20} />
                  </span>

                  <h5 className="headingh_h2">LMS Training</h5>
                  <p className="paragraph">
                    Self-paced learning modules with recordings, tracked via
                    LMS dashboard.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Three;
