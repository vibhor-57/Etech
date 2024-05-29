import React from "react"
import playbtn from "../images/playbtn.avif"
import indiimage from "../images/indiimage.jpg";
import setofpeople from "../images/setofpeople.png";

import './Home.css';
export default function Home(){
    return(
        <div className="homecontainer">
            <div className="hometext">
                <h1>
                    Develop your skills in a new and unique way
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim corrupti quam, dicta praesentium, quis maiores asperiores soluta voluptatem, est quia sunt quidem aut? Ab.
                </p>
                <div className="homebuttonconatiner">
                    <button className="homebutton">
                        <p>Enroll Now</p>
                    </button>
                    <div className="homelinkcontainer">
                        <img src={playbtn} alt="youtube image" className="homeplaybtn"/>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Whats Etech?</a>
                    </div>
                </div>
            </div>
            <div className="homert">
                    <div className="homertbgimage">

                    </div>

                    <div className="homertimg1">
                        <div>
                            <img src={indiimage} alt="image" />
                        </div>
                        <div className="homertimg1div">
                            <h4>50+</h4>
                            <p>Online Courses</p>
                        </div>
                    </div>

                    <div className="homertimg2">
                        <h4>10k+</h4>
                        <p>Online Students</p>
                        <img src={setofpeople} alt="image" />
                    </div>

                    <div className="homertimg3">
                        <div>
                            <img src={indiimage} alt="image" />
                        </div>
                        <div className="homertimg3div">
                            <h4>Lorem ipsum dolor.</h4>
                            <p>Lorem, ipsum dolor.</p>
                            <button>Lorem, ipsum.</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}