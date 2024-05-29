import React from "react";
import "./Page2.css";
import img1 from "../images/pg2img1.png";
import img2 from "../images/pg2img2.png";
import search from "../images/search.jpg";
import user from "../images/user.png";
import book from "../images/book.png";
import play from "../images/play.png";
import education from "../images/education.png";


export default function Page2() {
  return (
    <div className="page2container">
      <div className="pg2upper">
        <h1>Search Courses</h1>
        <div className="pg2searchcontainer">
          <div className="pg2search">
            <img src={search} alt="search icon" />
            <input type="text" placeholder="Search for over 50+ courses" />
          </div>
          <button>Search</button>
        </div>
      </div>

      <div className="pg2lower">
        <div className="pg2imgcontainer">
          <div className="generalflexrow">
            <div className="pg2img1">
              <img src={img1} alt="image" />
            </div>
            <div className="pg2img2">
              <img src={img2} alt="image" />
            </div>
          </div>
          <div className="generalflexrow">
            <div className="pg2img3">
              <img src={img2} alt="image" />
            </div>
            <div className="pg2img4">
              <img src={img1} alt="image" />
            </div>
          </div>
        </div>

        <div className="pg2textcontainer">
          <h2> 
            <span style={{ color: "rgb(198, 146, 254)" }}>Benifits</span> From Our Online
            Learning
          </h2>
          <div className="pg2benifitcontainer">
            <div className="pg2imgicons purple">
              <img src={education} alt="image" />
            </div>
            <div className="pg2benifittext">
              <h3>Online Degrees</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                velit, unde minus saepe nobis quos!
              </p>
            </div>
          </div>
          <div className="pg2benifitcontainer">
            <div className="pg2imgicons orange">
              <img src={book} alt="image" />
            </div>
            <div className="pg2benifittext">
              <h3>Short Courses</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                inventore, reiciendis corporis tempora blanditiis magni!
              </p>
            </div>
          </div>
          <div className="pg2benifitcontainer">
            <div className="pg2imgicons purple" id="pg2usericon">
              <img src={user} alt="image" />
            </div>
            <div className="pg2benifittext">
              <h3>Training From Experts</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum commodi veniam aspernatur nam. Neque, totam!
              </p>
            </div>
          </div>
          <div className="pg2benifitcontainer">
            <div className="pg2imgicons orange" id="pg2playbtnicon">
              <img src={play} alt="image" />
            </div>
            <div className="pg2benifittext">
              <h3>1.5k+ Video Courses</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus unde sed praesentium assumenda, consectetur
                accusamus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
