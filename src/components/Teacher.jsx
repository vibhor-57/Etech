import React from "react";
import "./Teacher.css";
import img1 from "../images/pg2img1.png";
export default function Teacher() {
  return (
    <div className="teachercontainer">
      <div className="teacherleft">
        <h1>
          If you are A Certified Teacher Then{" "}
          <span style={{ color: "rgb(176, 107, 251)" }}>Become An Instructor</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor
          deleniti molestias praesentium consequatur tenetur, maxime aliquam,
          ipsa consectetur maiores enim omnis delectus nihil sunt est dicta
          eaque iste eos!
        </p>
        <h1>Enjoy Many Perks</h1>
        <ol className="teacherperks">
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ol>
        <button>Become an instructor</button>
      </div>
      <div className="teacherimagecontainer">
        <div className="teacherimage">
          <img src={img1} alt="Instructor" />
        </div>
      </div>
    </div>
  );
}
