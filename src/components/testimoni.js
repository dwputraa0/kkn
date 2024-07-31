import './testimoni.css';
import { Container } from 'react-bootstrap';
import image from "./../assets/rifqi.png"
import image2 from "./../assets/ifa.png"

const Testimoni = () => {
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
                        <h4>Desa Harapan Mukti sangat mirip dengan kampung halaman saya, dengan rasa kekeluargaan, gotong royong, dan kebersamaan yang kuat. Warga desa selalu saling membantu dalam berbagai kegiatan, mulai dari membangun pipa saluran air hingga kerja bakti membangun rumah.</h4>
                    </div>
                </div>
                <div className="testi-container-body">
                    <div className="testi-img">
                        <img src={image2} alt="Harapan Mukti" />
                    </div>
                    <div className="testi-text">
                        <h1>Ifa Nurul Allya </h1>
                        <h3>Perwakilan Peserta KKN-T IPB 2024</h3>
                        <h4>Kalo kata Mbah Marsinem, tetangga kami, rumahnya adalah gubuk penuh derita. Padahal rumahnya punya banyak kenangan dan cerita. Mengutip kata² mbah, Harapan Mukti dan Mesuji bukan gubuk penuh derita, tapi tanah yang melukiskan beragam kisah dan bahagia tak terduga (eaak) :D</h4>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Testimoni;