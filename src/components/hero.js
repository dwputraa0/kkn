import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../assets/hero.png';
import './hero.css'

const Hero = () => {
  return (
    <section id="banner" className="banner-section">
      <Container className="container-sm container-md container-lg">
        <div className="contents">
          <div className="banner-title">
            <h1>Selamat Datang Di Desa</h1>
            <h1 style={{color: "rgb(159, 156, 235)"}}>Harapan Mukti</h1>
            <h2>Kabupaten Mesuji, Lampung</h2>
          </div>
        </div>
      </Container>
      <div className="banner-background-container">
        <img src={image} alt="Background" className="banner-background" />
      </div>
    </section>
  );
};

export default Hero;