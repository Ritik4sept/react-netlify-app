
import { BsQuestionCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="hero-section">
      <div className="container">

        <h1 className="hero-title heading_h1">
          Shape the Future with Confidence
        </h1>

        <p className="hero-subtitle paragraph">
          AIKSHAM represents Jindal Steel's commitment to empowering every
          employee with AI capabilities. Join us in this transformative journey
          to build a smarter, faster, and more innovative organization.
        </p>

        

        {/* INFO CARD */}
         <div className="hero-info-card">
          {/* <BsQuestionCircle size={20} /> */}
          <p>
            <strong>Questions?</strong> Contact the AIKSHAM program team or visit
            our microsite for comprehensive resources, FAQs, and support
            materials.
          </p>
        </div> 

      </div>
    </section>
  );
};

export default Footer;

