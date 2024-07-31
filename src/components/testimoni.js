import './testimoni.css';
import { Container, Breadcrumb } from 'react-bootstrap';
import image from "./../assets/rifqi.png"
import image2 from "./../assets/ifa.png"

const Testimoni = ({dest}) => {
  return (
    <div id="deskripsi" className="testi-section">
        <Container className="container-sm container-md container-lg">
            <div className="testi-container">
                <div className="testi-container-body">
                    <div className="testi-img">
                        <img src={image} alt="Harapan Mukti" />
                    </div>
                    <div className="testi-text">
                        <h1>Rifqi Aulia Ramadhan </h1>
                        <h3>Koordinator Desa KKN-T IPB 2024</h3>
                        <h4>Menjadi bagian dari KKN-T di Desa Harapan Mukti adalah pengalaman yang tak terlupakan. Kami belajar langsung dari masyarakat tentang kearifan lokal dan tantangan yang mereka hadapi dalam kehidupan sehari-hari.</h4>
                    </div>
                </div>
                <div className="testi-container-body">
                    <div className="testi-img">
                        <img src={image2} alt="Harapan Mukti" />
                    </div>
                    <div className="testi-text">
                        <h1>Ifa Nurul Allya </h1>
                        <h3>Perwakilan Peserta KKN-T IPB 2024</h3>
                        <h4>Menjadi bagian dari KKN-T di Desa Harapan Mukti adalah pengalaman yang tak terlupakan. Kami belajar langsung dari masyarakat tentang kearifan lokal dan tantangan yang mereka hadapi dalam kehidupan sehari-hari.</h4>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Testimoni;