import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Process Consultant | Datasphere Architect | SAP</h4>
                <h5>Customers: NA | Canada | EMEA</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Overseeing SAP Datasphere project delivery for key customers. Conducting
              enablement workshops to define data integration strategies, security
              models, and performance enhancements using SAP Datasphere and BDC.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operation Executive</h4>
                <h5>Infosys</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Assisted a major banking client in deploying and migrating critical
              application policies to Oracle Cloud. Led setup and configuration of
              infrastructure for ManageEngine ServiceDesk Plus, streamlining IT service.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Intern</h4>
                <h5>Cloudstrats</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Set up a secure and scalable on-premises cloud infrastructure for
              HDFC Credila. Configured Microsoft Azure services, VPN Site-to-Site
              connectivity, and Microsoft Exchange 2016 with Active Directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
