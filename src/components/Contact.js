import "./Contact.css";
import {BsGithub} from "react-icons/bs"
import {GrLinkedin} from "react-icons/gr"
import {MdAttachEmail} from "react-icons/md"

function Contact(){
    return (
        <div className="footer" id="footer">
        <h1 className="contact">Contact Me</h1>
        <div className="contact_me">
          <p>Name : Sumit Badri</p>
          <p>Email : sumitbadri2000@gmail.com</p>
        </div>
        <div className="line">
            <h1 className="contact">Connect with me</h1>
            <div className="flexlink">
            <a className="flink" href="https://github.com/sumitbadri2000" target="blank"><BsGithub className="f" /></a>
            <a className="flink" href="https://www.linkedin.com/in/sumit-badri/" target="blank"><GrLinkedin className="f"/></a>
            <a className="flink" href="https://sumitbadri2000@gmail.com" target="blank"><MdAttachEmail className="f"/></a>
          </div>
          </div>
      </div>
    )
}

export default Contact