import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaEnvelope, FaCopyright, FaWhatsapp, FaMapMarkedAlt, FaFacebook, FaGlobe } from 'react-icons/fa';
import './Footer.css';
import image from "../assets/logo.png";

const Footer = () => {
    return (
        <footer>
            <Container className="container-sm container-md container-lg ">
                <div className="footer-container">
                    <img src={image} alt="Semeseta-Mesuji" />
                    <div className="location">
                        <div className="location-title">
                            <h6> <FaMapMarkedAlt /> Lokasi Desa</h6>
                        </div>
                        <div className="location-place">
                            <h8>Harapan Mukti, Tanjung Raya, </h8>
                            <br></br>
                            <h8>Kabupaten Mesuji, Kota Lampung 34697</h8>
                        </div>
                    </div>    
                    <div className="social-media">
                        <div className="social-media-title">
                            <h6>Hubungi Kami</h6>
                        </div>
                        <div className="contact">
                            <a href="https://www.instagram.com/harapanmukti/"><FaInstagram size={35}/></a>
                            <a href="https://web.facebook.com/harapan.mukti.5"><FaFacebook size={35}/></a>
                            <a href="https://api.whatsapp.com/send?phone=+6282269011259"><FaWhatsapp size={35}/></a>
                            <a href="https://harapanmukti.desa.id/"><FaGlobe size={35}/></a>
                        </div>
                    </div>    
                </div>
                <div className="copyright">
                    <p>Copyright <FaCopyright /> 2024 All Rights Reserved</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
