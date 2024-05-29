import React from "react";
import "./Footer1.css";
import microsoft from "../images/microsoft.png"
import magicleap from "../images/magicleap.png"
import usertesting from "../images/usertesting.png"
import codecov from "../images/codecov.png"
export default function Footer1() {
  return (
    <div className="footercontainer">
      <div className="footerduolingo">
        <h1>Duolingo</h1>
      </div>
      <div>
        <img src={magicleap} alt="image" />
        <h1>magic leap</h1>
      </div>
      <div>
        <img src={microsoft} alt="image" />
        <h1>Microsoft</h1>
      </div>
      <div className="footercodecov">
        <img src={codecov} alt="image" />
        <h1>Codecov</h1>
      </div>
      <div className="footerusertesting">
        <img src={usertesting} alt="image" />
        <h1>Testing</h1>
      </div>
    </div>
  );
}
