import React from "react";
import "./Course.css";
import laptop from "../images/laptop.jpg";
import user2 from "../images/user2.png";
import book2 from "../images/book2.png";
import star from "../images/star.png";
import indiimage from "../images/indiimage.jpg";
export default function Course(props) {
  return (
    <div className="coursecontainer">
      <img src={laptop} alt="" className="courseimage"/>
      <div className="coursetopicrating">
        <div className="coursetopic">
            {props.topic}
        </div>
        <div className="courserating">
          <img src={star} alt="" />
          <p>{props.rating}</p>
        </div>
      </div>
      <div className="coursename">
        <h1>{props.name}</h1>
      </div>
      <div className="courseclassesstudents">
        <div className="courseclasses">
          <img src={book2} alt="" />
          <p>{props.classes} Classes</p>
        </div>
        <div className="coursestudents">
          <img src={user2} alt="" />
          <p>{props.students} Students</p>
        </div>
      </div>
      <div className="coursemoneyuser">
        <p className="coursemoney">${props.money}</p>
        <div className="courseuser">
          <img src={indiimage} alt="" />
          <p>{props.user}</p>
        </div>
      </div>
    </div>
  );
}
