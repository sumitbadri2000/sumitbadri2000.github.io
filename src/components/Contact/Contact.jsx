import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";

import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "25327922-c62c-4234-be16-15efc86ed14d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("Error Submitted Form");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <form onSubmit={onSubmit} className="contact-left">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            required
            placeholder="Enter Your Name"
            name="name"
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            name="email"
          />
          <label htmlFor=""> Write Your Message</label>
          <textarea
            required
            name="message"
            rows="3"
            placeholder="Enter Your Message"
          />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
        <div className="contact-right">
          <h1>Let's Talk</h1>
          <p>
            I’d love to hear from you! Whether you have questions, project
            ideas, or just want to connect, feel free to reach out anytime. You
            can contact me directly here or drop me an email. I’ll do my best to
            get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>sumitbadri2000@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
