import React, { useEffect, useState } from "react";
import "./home.css";
import video from "../../Assets/video2.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [val, setVal] = useState(1000);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video muted autoPlay loop type="video/mp4" src={video}></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our Packages</span>
          <h1 data-aos="fade-up" className="homeTitle">Search Your Holidays</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter Name Here..." />
              <GrLocation />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">${val}</h3>
            </div>

            <div className="input flex">
              <input
                type="range"
                max="5000"
                min="1000"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                }}
              />
            </div>

            <div className="searchOptions flex">
              <HiFilter />
              <span>MORE FILTERS</span>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FiInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
