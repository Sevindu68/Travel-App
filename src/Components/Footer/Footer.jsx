import React from "react";
import "./footer.css";
import video from "../../Assets/video.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email address" />
            <button className="btn flex">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <MdTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              numquam quasi ipsa iste, voluptas corporis ipsum sunt maxime unde
              laborum, qui recusandae voluptate eligendi. Tempora minus saepe
              harum ad omnis.
            </div>
            <div className="footerSocials flex">
              <BsTwitter className="icon" />
              <BsYoutube className="icon" />
              <BsInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

            </div>
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                RentCars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorlds
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>

            </div>
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonwsia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Ocenia
              </li>

            </div>
          </div>
<div className="footerDiv flex">
    <small>ALL RIGHT RESERVED</small>
</div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
