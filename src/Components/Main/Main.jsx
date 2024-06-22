import React from "react";
import "./main.css";
import img1 from "../../Assets/dubai.jpg";
import img2 from "../../Assets/eifel.jpg";
import img3 from "../../Assets/wall.jpg";
import img4 from "../../Assets/colosseum.jpg";
import img5 from "../../Assets/liberty.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
const Main = () => {
    const data = [
        {
          id: 1,
          imgSrc: img1,
          destTitle: 'Burj Khalifa',
          location: 'Dubai',
          grade: 'Relax',
          fees: '$700',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ducimus, aut tenetur dolorum aliquid eum natus ipsa harum porro inventore eius libero! Autem cupiditate commodi, nihil repudiandae facere architecto accusamus'
        },
        {
          id: 2,
          imgSrc: img2,
          destTitle: 'Eiffel Tower',
          location: 'Paris',
          grade: 'Explore',
          fees: '$500',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ducimus, aut tenetur dolorum aliquid eum natus ipsa harum porro inventore eius libero! Autem cupiditate commodi, nihil repudiandae facere architecto accusamus'
        },
        {
          id: 3,
          imgSrc: img3,
          destTitle: 'Great Wall',
          location: 'China',
          grade: 'Adventure',
          fees: '$600',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ducimus, aut tenetur dolorum aliquid eum natus ipsa harum porro inventore eius libero! Autem cupiditate commodi, nihil repudiandae facere architecto accusamus'
        },
        {
          id: 4,
          imgSrc: img4,
          destTitle: 'Colosseum',
          location: 'Rome',
          grade: 'History',
          fees: '$400',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ducimus, aut tenetur dolorum aliquid eum natus ipsa harum porro inventore eius libero! Autem cupiditate commodi, nihil repudiandae facere architecto accusamus'
        },
        {
          id: 5,
          imgSrc: img5,
          destTitle: 'Statue of Liberty',
          location: 'New York',
          grade: 'Explore',
          fees: '$350',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ducimus, aut tenetur dolorum aliquid eum natus ipsa harum porro inventore eius libero! Autem cupiditate commodi, nihil repudiandae facere architecto accusamus'
        }
      ];
      

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                     <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Details
                  <IoIosArrowForward className="icon"/>
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
