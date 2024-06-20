import React from "react";
import "./home.css";
import video from "../../Assets/video.mp4";
import { GrLocation } from "react-icons/gr";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video muted autoPlay loop type="video/mp4" src={video}></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Package</span>
          <h1 className="homeTitle">Search Your Holidays</h1>
        </div>
        <div className="cardDiv grid">
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
                <h3 className="total">$5000</h3>
            </div>
    <div className="input flex">
        <input type="range" max="5000" min="1000" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
