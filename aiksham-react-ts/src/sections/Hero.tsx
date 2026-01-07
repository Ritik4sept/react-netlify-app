const Hero = () => {
  return (
    <section
      id="hero"
      style={{
      paddingTop: '35rem',
      paddingBottom: '2rem',
  }}
>
      <div className="container">
        <div className="col-md-8  ">
          <h1 >AIKSHAM: AI Enablement Program.</h1>
          <p className="mt-3">
            Be Smarter. Be Faster. Be AIKSHAM. Jindal Steel's enterprise-wide AI transformation program designed to empower every employee with cutting-edge AI capabilities and drive measurable productivity gains across the organization.

          </p>

          {/* <div className="row mt-4">
            <div className="col-md-4">
              <i className="bi bi-clock-fill me-2" /> Save time daily
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightning-fill me-2" /> Work smarter with AI
            </div>
            <div className="col-md-4">
              <i className="bi bi-search me-2" /> Spot AI opportunities
            </div>
          </div> */}

          <div className="mt-4">
            {/* <a href="#whatisaiksham" className="btn btn-info btn-lg me-2">
              Explore AIKSHAM
            </a>
            <a href="#learn" className="btn btn-outline-light btn-lg">
              View Sessions
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
