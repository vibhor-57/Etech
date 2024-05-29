import React from "react";
import "./Popularcourses.css";
import Course from "./Course";
export default function(){
    return(
        <div className="popularcoursescontainer">
            <h1 id="popularcoursecontainerh1">Our Popular Courses</h1>
            <p id="popularcoursecontainerp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus voluptatum architecto odio nam culpa asperiores dolorem iusto vero quibusdam quae repellendus, velit vitae obcaecati consequuntur distinctio rerum, reprehenderit at.</p>
            <div className="popularcourses">
                <Course rating="4.5" topic="data science" name="Web Design & Development" classes="25" students ="165" money="560.00" user="morgan" />
                <Course rating="4.5" topic="data science" name="Web Design & Development" classes="25" students ="165" money="560.00" user="morgan" />
                <Course rating="4.5" topic="data science" name="Web Design & Development" classes="25" students ="165" money="560.00" user="morgan" />
            </div>
        </div>
    )
}