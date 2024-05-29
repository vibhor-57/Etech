import React from "react";
import "./Testimonial.css";
import Student from "./Student";
import indiimage2 from '../images/indiimage2.jpg'
import Slideshow from "./Slideshow";
export default function Testimonial() {
const testimonialdata = [
    {index:1,
      image: indiimage2,
      name: "Emily Chen",
      course: "Web Development",
      rating: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:2,
      image: indiimage2,
      name: "John Doe",
      course: "Data Science",
      rating: 5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:3,
      image: indiimage2,
      name: "Jane Smith",
      course: "Machine Learning",
      rating: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:4,
      image: indiimage2,
      name: "Michael Johnson",
      course: "UI/UX Design",
      rating: 5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:5,
      image: indiimage2,
      name: "Sarah Williams",
      course: "Full Stack Development",
      rating: 3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:6,
      image: indiimage2,
      name: "David Brown",
      course: "Cybersecurity",
      rating: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:7,
      image: indiimage2,
      name: "Olivia Martinez",
      course: "Digital Marketing",
      rating: 5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:8,
      image: indiimage2,
      name: "Daniel Garcia",
      course: "Mobile App Development",
      rating: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:9,
      image: indiimage2,
      name: "Sophia Taylor",
      course: "Project Management",
      rating: 5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:10,
      image: indiimage2,
      name: "Ethan Clark",
      course: "Artificial Intelligence",
      rating: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:11,
      image: indiimage2,
      name: "Ava Rodriguez",
      course: "Cloud Computing",
      rating: 5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    },
    {index:12,
      image: indiimage2,
      name: "Liam Lewis",
      course: "Blockchain Technology",
      rating: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta sed quis debitis, labore accusantium in illum accusamus sunt alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse non ipsa fugiat."
    }
]  
  return (
    <div className="testimonialcontainer">
      <h1>Student's Testimonials</h1>
      <p className="testimonialcontainerp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        soluta sed quis debitis, labore accusantium in illum accusamus sunt
        alias expedita reprehenderit. Officiis earum cupiditate adipisci, esse
        non ipsa fugiat.
      </p>
      <div className="testimonialelements">
        <Slideshow data={testimonialdata} />
      </div>
    </div>
  );
}
