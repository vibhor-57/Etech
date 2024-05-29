// import React from "react";
// import './Navbarcss.css';
// // import logo from '../images/logo.png'

// // import { Link } from "react-router-dom";

// export default function Navbar(){
//     return(
//     <div>
//         <div className="navbar-container">
//         <header className="navbar-header">
//             <div className="navbar-left">
//                 {/* <img src={logo} alt="logo"/> */}
//                 <h1>Etech.</h1>
//             </div>
//             <div className="navbar-mid">
//                 <ul className="navbar-navbar">
//                     <li><a href="#" className="navbar-active">Courses</a></li>
//                     <li><a href="#">Teachers</a></li>
//                     <li><a href="#">Offers</a></li>
//                     <li><a href="#">Contact</a></li>
//                 </ul>
//             </div>

//             {/* <div className="navbar-search">
//                 <i className="navbar-fa-solid fa-magnifying-glass fa-lg"></i>
//                 <input className="navbar-input-field" type="text" placeholder="Search..."/>
//             </div> */}
//             <div className="home-right">
//                 <button className="home-btn" id="home-loginbtn">
//                   <a to="/login" className="home-login"><h6>Sign In</h6></a>
//                 </button>
//                 <button className="home-btn">
//                   <a to="/signin" className="home-signin"><h6>Free Trial</h6></a>
//                 </button>
//             </div>
//         </header>
//     </div>
    
//     </div>)
// }


import React, { useState } from "react";
import './Navbarcss.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [showCourses, setShowCourses] = useState(false);
    const [showTeachers, setShowTeachers] = useState(false);
    const [showOffers, setShowOffers] = useState(false);

    const toggleDropdown = (dropdown) => {
        switch (dropdown) {
            case 'courses':
                setShowCourses(!showCourses);
                setShowTeachers(false);
                setShowOffers(false);
                break;
            case 'teachers':
                setShowTeachers(!showTeachers);
                setShowCourses(false);
                setShowOffers(false);
                break;
            case 'offers':
                setShowOffers(!showOffers);
                setShowCourses(false);
                setShowTeachers(false);
                break;
            default:
                setShowCourses(false);
                setShowTeachers(false);
                setShowOffers(false);
        }
    };

    return (
        <div>
            <div className="navbar-container">
                <header className="navbar-header">
                    <div className="navbar-left">
                        <h1>Etech.</h1>
                    </div>
                    <div className="navbar-mid">
                        <ul className="navbar-navbar">
                            <li>
                                <a href="#" onClick={() => toggleDropdown('courses')}>Courses <span className="navbar-dropdown-arrow">▼</span></a>
                                {showCourses && (
                                    <ul className="navbar-dropdown-menu">
                                        <li><Link to="/course1">Course 1</Link></li>
                                        <li><Link to="/course2">Course 2</Link></li>
                                        <li><Link to="/course3">Course 3</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <a href="#" onClick={() => toggleDropdown('teachers')}>Teachers <span className="navbar-dropdown-arrow">▼</span></a>
                                {showTeachers && (
                                    <ul className="navbar-dropdown-menu">
                                        <li><Link to="/teacher1">Teacher 1</Link></li>
                                        <li><Link to="/teacher2">Teacher 2</Link></li>
                                        <li><Link to="/teacher3">Teacher 3</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <a href="#" onClick={() => toggleDropdown('offers')}>Offers <span className="navbar-dropdown-arrow">▼</span></a>
                                {showOffers && (
                                    <ul className="navbar-dropdown-menu">
                                        <li><Link to="/offer1">Offer 1</Link></li>
                                        <li><Link to="/offer2">Offer 2</Link></li>
                                        <li><Link to="/offer3">Offer 3</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <button className="navbar-btn" id="navbar-loginbtn">
                            <Link to="/login" className="navbar-login"><h6>Sign In</h6></Link>
                        </button>
                        <button className="navbar-btn" id="navbar-signinbtn">
                            <Link to="/signin" className="navbar-signin"><h6>Free Trial</h6></Link>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
}
