import './Description.css';
import { Container } from 'react-bootstrap';
import image from "./../assets/gapura.png"
const Description = () => {
  return (
    <div id="deskripsi" className="desc-section">
        <Container className="container-sm container-md container-lg">
            <div className="desc-container">
                <div className="desc-img">
                    <img src={image} alt="Harapan Mukti" />
                </div>
                <div className="desc-text">
                    <h2>&emsp; Pada awalnya desa Harapan Mukti merupakan wilayah yang dikelola oleh Departemen Transmigrasi, asal mula penduduk dari pindahan Transmigrasi Lokal Pada Tahun 1983 dari daerah asal lampung Utara, Lampung Selatan, Lampung Tengah dan trans sisipan Pribumi Mesuji. Secara administrasi Pemerintah Desa Harapan Mukti berdiri  pada tahun 1984 dan masih merupakan wilayah Mesuji Kabupaten Lampung Utara. Pada tahun 1991 Desa Harapan Mukti Masuk dalam Kecamatan Pembantu Yaitu Kacamatan Tanjung Raya. Dengan jumlah KK 593 KK, jumlah Jiwa 1779 jiwa, dan luas wilayah 1.875 ha.</h2>
                    {/* <p>{dest.address}</p> */}
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Description;