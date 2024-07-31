import React from 'react';
import Places from './CardPlaces'; 
import Hero from './hero';
import Description from './Description';
import CarouselActivity from './carouselActivity';
import CardComponent from './textActivity';
import Footer from './Footer';
import Testimoni from './testimoni';
import Route from './Route';
import "./main.css"
import { kegiatanData, umkmData, placesData, olahragaData } from "../service/database.js"

const Main = () => {
    return (
      <div>
            <Hero />
            <div style={{padding:"80px 50px 0px 50px"}}>
              <div id='profil' className='main-title-outer'>
                <div className="main-title-inner">
                    <h2>Profil Desa Harapan Mukti </h2>
                </div>
              </div>
            </div>
            <Description />
            <div id="tempat" className='main-title-outer'>
              <div className="main-title-inner">
                  <h2>Tempat & Fasilitas Umum</h2>
              </div>
            </div>
                <Places card={placesData} />
            <div id='aktivitas' className='main-title-outer'>
              <div className="main-title-inner">
                  <h2>Aktivitas & Keseharian Desa</h2>
              </div>
            </div>
            <div className="container-activity">
                <div className="left-grid">
                    <CardComponent word="Usaha Mikro Kecil Menengah" />
                </div>
                <div className="right-grid">
                    <CarouselActivity cards={umkmData} />
                </div>
            </div>
            <div className="container-activity" style={{flexDirection: "row-reverse"}}>
                <div className="left-grid">
                    <CardComponent word="Aktivitas Olahraga Bersama" />
                </div>
                <div className="right-grid">
                    <CarouselActivity cards={olahragaData} />
                </div>
            </div>
            <div className="container-activity">
                <div className="left-grid">
                    <CardComponent word="Kegiatan Desa" />
                </div>
                <div className="right-grid">
                    <CarouselActivity cards={kegiatanData} />
                </div>
            </div>
            <div id='testimoni' className='main-title-outer' style={{marginTop: "120px"}}>
              <div className="main-title-inner">
                  <h2>Testimoni</h2>
              </div>
            </div>
            <Testimoni />
            <div id='lokasi' className='main-title-outer'>
              <div className="main-title-inner">
                  <h2>Lokasi Desa</h2>
              </div>
            </div>
            <Route />
            <Footer />
        </div>
    );
};

export default Main;
