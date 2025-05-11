import React from "react";

const HeroSection = () => (
  <section 
    id="hero" 
    className="d-flex justify-content-center align-items-center text-white text-center"
    style={{
      height: "100vh",
      background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f') center/cover no-repeat"
    }}
  >
    <div data-aos="fade-up">
      <h1 className="display-4">Transforme sua Carreira com Mentoria</h1>
      <p className="lead">Essa é a seção principal da sua landing page.</p>
    </div>
  </section>
);

export default HeroSection;
