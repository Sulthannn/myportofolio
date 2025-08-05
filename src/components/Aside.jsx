import React, { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaLocationDot, FaEnvelope, FaGithub, FaSquareGitlab, FaAngleDown } from "react-icons/fa6";
import { initializeSidebar } from "../script";

const Aside = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("Initializing sidebar");
    initializeSidebar();
  }, []);

  const handleSidebarToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"/images/sulthan.JPG"}
            alt="Sulthan Izza Falqahi"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Sulthan Izza Falqahi">
            Sulthan Izza Falqahi
          </h1>

          <p className="title">Web Developer</p>
        </div>

        <button className="info_more-btn" onClick={handleSidebarToggle} data-sidebar-btn>
          <FaAngleDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FaLocationDot />
            </div>

            <div className="contact-info">
              <p className="contact-title">Address</p>
              <address>Bandung, Jawa Barat</address>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:sulthanizza11@gmail.com" className="contact-link">
                sulthanizza11@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaGithub />
            </div>

            <div className="contact-info">
              <p className="contact-title">Github</p>
              <a href="https://github.com/Sulthannn" target="_blank">
                <address>github.com/Sulthannn</address>
              </a>
            </div>
          </li>
          {/* <li className="contact-item">
            <div className="icon-box">
              <FaSquareGitlab />
            </div>

            <div className="contact-info">
              <p className="contact-title">Gitlab</p>
              <a href="https://gitlab.com/izzasulthan" target="_blank">
                <address>gitlab.com/izzasulthan</address>
              </a>
            </div>
          </li> */}
          <li className="contact-item">
            <div className="icon-box">
              <FaWhatsapp />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+628987859439" className="contact-link">
                +62-898-7859-439
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaInstagram />
            </div>

            <div className="contact-info">
              <p className="contact-title">Instagram</p>
              <a href="https://www.instagram.com/sulthanizza_/" target="_blank">
                <address>@sulthanizza_</address>
              </a>
            </div>
          </li>

          <div className="cv-button-container">
            <a
              href="https://drive.google.com/drive/folders/1aaGyrUE0-8FAi3h3NtS6gKcaJtBOOK0_?usp=sharing"
              target="_blank"
              className="cv-button"
            >
              CV
            </a>
          </div>
        </ul>

        <div className="separator"></div>
      </div>
    </aside>
  );
};

export default Aside;