import React, { useState } from "react";
import Student from "./Student";
import "./Slideshow.css";
const Slideshow = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);

  const goToPreviousSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex < 3 ? data.length - 3 : prevIndex - 3
    );
  };

  const goToNextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === data.length - 3 ? 0 : prevIndex + 3
    );
  };
  const currentPage = Math.floor(startIndex / 3) + 1;
  const totalPages = Math.ceil(data.length / 3);
  return (
    <div className="slideshowcontainer">
      <div className="slidecontainer">
        {data.slice(startIndex, startIndex + 3).map((data) => (
          <div key={data.index}>
            <Student
              image={data.image}
              name={data.name}
              course={data.course}
              rating={data.rating}
              description={data.description}
            />
          </div>
        ))}
      </div>
        <div className="slideshowcontrols">
          <button onClick={goToPreviousSlide}>&lt; </button>
          <span>{currentPage}/{totalPages}</span>
          <button onClick={goToNextSlide}> &gt;</button>
        </div>
    </div>
  );
};

export default Slideshow;
