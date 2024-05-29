import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
import Footer1 from "./components/Footer1"
import Page2 from './components/page2';
import PopularCourses from './components/PopularCourses';
import Teacher from './components/Teacher';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer1/>
      <Page2/>
      <PopularCourses/>
      <Teacher/>
      <Testimonial/>
    </div>
  );
}

export default App;
