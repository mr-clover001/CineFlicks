import React from "react";
import "./Mainpage.css";
import { BsGithub } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-medias">
        <span>
          <BsGithub />
        </span>
        <span>
          <BsLinkedin />
        </span>
        <span>
          <BsInstagram />
        </span>
      </div>
      <div className="context">
        <div className="firstLine">
          <span>Info.</span>
          <span>Support.</span>
          <span>Marketing</span>
        </div>
        <div className="secondLine">
          <span>Terms of Use.</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="copyright">
        <BiCopyright /> Anoop Kumar
      </div>
    </div>
  );
};

export default Footer;
