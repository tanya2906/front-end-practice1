import React from 'react';
import './App.css';
import CallToAction from './components/CallToAction';
import Content from './components/Content';
import Features from './components/Features';
import Form from './components/Form';
import LandingPage from './components/LandingPage';
import Testimonial from './components/Testimonial';
import ShowCase from './components/ShowCase';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* landing page */}
      <LandingPage/>
      {/* content */}
      <Content/>
      {/*  features */}
      <Features/>
      {/* form */}
      <Form/>
      {/* testimonail */}
      <Testimonial/>
      {/* call to action */}
      <CallToAction/>
      {/* showcase */}
      <ShowCase/>
      {/* Team */}
      <Team/>
      {/* contact */}
      <Contact/>
      {  /*footer*/ }
      <Footer/>
    </div>
  );
}

export default App;
