import React from "react";
import "./Student.css";
import star from "../images/star.png";  // Path to your filled star image
import emptystar from "../images/emptystar.png";   // Path to your empty star image

export default function Student(props) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img 
          key={i} 
          src={i <= props.rating ? star : emptystar} 
          alt={i <= props.rating ? "filled star" : "empty star"} 
          className={i <= props.rating ? "studentfilledstar" : "studentemptystar"} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="studentcontainer">
      <div className="studentupper">
        <div className="studentimage">
          <img src={props.image} alt="Student" />
        </div>
        <div className="studentuppertext">
          <h3 style={{ color: "purple" }}>{props.name}</h3>
          <p>{props.course}</p>
          <div className="studentrating">
            {renderStars()}
          </div>
        </div>
      </div>
      <div className="studentlower">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
