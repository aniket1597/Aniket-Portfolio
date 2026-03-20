import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:aniketagrawal733@gmail.com" data-cursor="disable">
                aniketagrawal733@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>MSc in Cloud Computing</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/aniket-agrawal/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://community.sap.com/t5/technology-blog-posts-by-sap/configuration-of-cloud-transport-management-service-ctms-on-sap-btp-for-sap/ba-p/14117857"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              SAP Community <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aniket Agrawal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
