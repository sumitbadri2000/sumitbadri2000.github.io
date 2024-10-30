import React from "react";
import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import img1 from "../../assets/project/img1.png";
import img2 from "../../assets/project/img2.png";
import img3 from "../../assets/project/img3.png";
import img4 from "../../assets/project/img4.png";
import img5 from "../../assets/project/img5.png";

const Project = () => {
  return (
    <div className="project" id="project">
      <div className="project-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="project-container">
        <div className="project-box">
          <img src={img1} alt="" />
          <div className="project-layer">
            <h4>LSSF Trust</h4>
            <p>
              The LSS Trust's website and app provide information about the
              Trust's activities. They help people in need and facilitate
              donations to those who require assistance.
            </p>
            <a href="https://lsstrust.org.in/" target="_blank">
              <FaArrowUpRightFromSquare className="project-click" />
            </a>
          </div>
        </div>
        <div className="project-box">
          <img src={img2} alt="" />
          <div className="project-layer">
            <h4>MBBS Dunia</h4>
            <p>
              Mbbs Dunia offers diverse, high-quality courses, focusing on
              excellence and accessibility to empower learners on their
              educational journey.
            </p>
            <a href="https://mbbsdunia.com/" target="_blank">
              <FaArrowUpRightFromSquare className="project-click" />
            </a>
          </div>
        </div>
        <div className="project-box">
          <img src={img3} alt="" />
          <div className="project-layer">
            <h4>Vibesdoc</h4>
            <p>
              The Vibesdoc platform is aimed at disease identification, offering
              tools for diagnosing and understanding various medical conditions.
              Visit Vibesdoc for more information.
            </p>
            <a href="https://app.vibesdoc.com/" target="_blank">
              <FaArrowUpRightFromSquare className="project-click" />
            </a>
          </div>
        </div>

        <div className="project-box">
          <img src={img4} alt="" />
          <div className="project-layer">
            <h4>Janta Admin Panel </h4>
            <p>
              This Janta Rides admin panel allows adding and managing
              distributors and cars. Admins can edit details, approve vehicles,
              oversee withdrawals, and monitor all statuses effectively.
            </p>
            <a
              href="https://distributers.janatarides.com/admin/login"
              target="_blank">
              <FaArrowUpRightFromSquare className="project-click" />
            </a>
          </div>
        </div>

        <div className="project-box">
          <img src={img5} alt="" />
          <div className="project-layer">
            <h4>Ikea Clone</h4>
            <p>
              IKEA is a global home furnishings retailer known for affordable,
              stylish furniture and accessories, emphasizing functionality and
              sustainability.
            </p>
            <a href="https://rococo-sawine-4218f1.netlify.app/" target="_blank">
              <FaArrowUpRightFromSquare className="project-click" />
            </a>
          </div>
        </div>

        {/* <div className="project-box">
          <img src={img4} alt="" />
          <div className="project-layer">
            <h4>Janta Admin Panel </h4>
            <p>
              This Janta Rides admin panel allows adding and managing
              distributors and cars. Admins can edit details, approve vehicles,
              oversee withdrawals, and monitor all statuses effectively.
            </p>
            <a
              href="https://distributers.janatarides.com/admin/login"
              target="_blank">
              <FaArrowUpRightFromSquare className="project-click" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
