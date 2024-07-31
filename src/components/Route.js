import './Route.css';
import { Container } from 'react-bootstrap';
import image from "../assets/lokasi.png"
import { FaMap, FaUsers, FaIdCard } from 'react-icons/fa'; 

const Route = () => {
  return (
    <div id="rute" className="route-section">
        <Container className="container-sm container-md container-lg">
            <div className="route-container">
                <div className='route-img'>
                    <img src={image} alt="peta rute" />
                </div>
                <div className="button-container">
                    <div className="maps-button">
                        <a href="https://www.google.com/maps/dir//Harapan+Mukti,+Tanjung+Raya,+Mesuji+Regency,+Lampung/@-4.5811362,105.4811633,8.88z/data=!4m18!1m8!3m7!1s0x2e3ebf927def3be5:0xbfd9f420cde1b1d1!2sHarapan+Mukti,+Tanjung+Raya,+Mesuji+Regency,+Lampung!3b1!8m2!3d-3.9193883!4d105.3775245!16s%2Fg%2F12hhhw8tf!4m8!1m0!1m5!1m1!1s0x2e3ebf927def3be5:0xbfd9f420cde1b1d1!2m2!1d105.3775245!2d-3.9193883!3e9?entry=ttu" target="_blank" rel="noopener noreferrer">
                            <p>lihat selengkapnya <i className="fa fa-angle-right"></i></p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="detail-section">
                <div className='detail-container'>
                    <h1 className='left-detail'> <FaUsers /> 593 Kartu Keluarga</h1>
                    <h1 className='right-detail'> <FaIdCard /> Berjumlah 1779* Jiwa</h1>
                </div>
                <h1 className='bottom-detail'> <FaMap /> Luas Wilayah 1.875 Hektar</h1>
            </div>               
        </Container>
    </div>
  );
};

export default Route;