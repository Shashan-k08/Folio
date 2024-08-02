import React, { useState } from "react";
import contact from "../img/contact.png";
import "./Contact.css";
//React Reveal
import { Fade } from "react-awesome-reveal";
// Email Js
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const title_name = "< Contact Me />";

  // Added Email.JS to send the form details to email
  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name : ${data.name}
	   Email : ${data.email}
	   Message : ${data.message}`
    );
    emailjs
      .sendForm(
        "service_we9wdlp",
        "template_g3x5i0n",
        event.target,
        "GfYedhgE965fW25F7"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for contacting me, Message Successfully sent.");
          setData({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          console.log(error.text);
          alert(
            "Sorry! There was some error while sending message right now, use other provided method to contact me."
          );
        }
      );

    event.target.reset();
  };

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <h1 className="title">{title_name}</h1>

          <div className="content">
            <Fade direction="left" className="left">
              
                <div className="box box_shadow">
                  <div className="img">
                    <img className="cont-img img-shadow" src={contact} alt="" />
                  </div>
                  <div className="details">
                    <h1>Get In Touch!</h1>
                    <p>
                      I am available for full time roles in Software Engineering
                      or Full-Stack Development. If you think you have any
                      project/work that matches my skill set, or if you just
                      want to say hi, you can contact me with the following
                      details.
                    </p>{" "}
                    <br />
                    <p>
                      <span>Phone</span>: +91 6394640369
                    </p>
                    <p>
                      <span>Email</span>: shashanktiwari3508@gmail.com
                    </p>
                    <p>
                      <span>Address</span>: Ghaziabad, Uttar Pradesh, India
                    </p>{" "}
                    <br />
                    <div className="card-btn">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn_shadow"
                        href="https://t.me/itoo05"
                      >
                        Chat <i class="fas fa-paper-plane"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn_shadow"
                        href="mailto:shashanktiwari3508@gmail.com"
                      >
                        Mail <i class="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              
            </Fade>

            <Fade direction="right" className="right box_shadow">
              
                <form onSubmit={formSubmit}>
                  <div className="input">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input">
                    <span>YOUR EMAIL </span>
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input">
                    <span>YOUR MESSAGE </span>
                    <textarea
                      cols="30"
                      rows="10"
                      name="message"
                      value={data.message}
                      onChange={InputEvent}
                    ></textarea>
                  </div>
                  <button className="btn_shadow">
                    SEND <i class="fas fa-arrow-right"></i>
                  </button>
                </form>
              
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
