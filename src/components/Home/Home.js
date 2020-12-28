import React from 'react'
import "./Home.css";

// components 
import Footer from './components/Footer';
import Header from './components/Header'
import Motto from './components/Motto';
import Paths from './components/Paths';
import Projects from './components/Projects';


const Home = () => {
  return ( 
    <div>
      <Header />
      <Motto />
      <Paths />
      <Projects />
      <Footer />
    </div>
   );
}
 
export default Home;