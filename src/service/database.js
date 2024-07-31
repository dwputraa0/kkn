import tempat1 from '../assets/karet.png'
import tempat2 from '../assets/sawit.png'
import tempat3 from '../assets/balai-desa.png'
import tempat4 from '../assets/masjid.png'
import tempat5 from '../assets/gereja.png'
import tempat6 from '../assets/sirkuit-hm.png'
import tempat7 from '../assets/tpq.png'
import tempat8 from '../assets/mushola.png'
import tempat9 from '../assets/lapangan.png'
import umkm1 from '../assets/teh_tarik.png'
import umkm2 from '../assets/anyaman.png'
import umkm3 from '../assets/tahu.png' 
import umkm4 from '../assets/bambu.png' 
import umkm5 from '../assets/plastik.png' 
import olahraga1 from '../assets/futsal.png' 
import olahraga2 from '../assets/bola.png' 
import olahraga3 from '../assets/voli.png' 
import kegiatan1 from '../assets/pengajian.png'
import kegiatan2 from '../assets/musyawarah.png'
import kegiatan3 from '../assets/posyandu.png'
import kegiatan4 from '../assets/gotong-royong.png'
import kegiatan5 from '../assets/yasinan.png'

const placesData = [
  { image: tempat1, title: 'Kebun Karet' },
  { image: tempat2, title: 'Kebun Sawit' },
  { image: tempat3, title: 'Balai Desa' },
  { image: tempat4, title: 'Masjid' },
  { image: tempat5, title: 'Gereja' },
  { image: tempat6, title: 'Sirkuit HM' },
  { image: tempat7, title: "Taman Pendidikan Qur'an" },
  { image: tempat8, title: 'Mushola' },
  { image: tempat9, title: 'Lapangan' },
];

const olahragaData = [
  {
    image: olahraga2,
    title: 'Sepak Bola',
    text: 'Setiap sore, warga Desa Harapan Mukti berkumpul di lapangan depan balai desa untuk bermain sepak bola. Para pemain sepak bola dari desa sering mengikuti kompetisi antar kabupaten di luar desa.',
  },
  {
    image: olahraga1,
    title: 'Futsal',
    text: 'Olahraga ini dilaksanakan di lapangan futsal yang terletak di depan balai desa Harapan Mukti. Pada sore hari, lapangan ini sering digunakan oleh anak-anak sekolah dasar untuk bermain, sementara pada malam hari, warga desa berkumpul di sana untuk bermain futsal.',
  },
  {
    image: olahraga3,
    title: 'Boal Voli',
    text: 'Setiap sore, warga Desa Harapan Mukti berkumpul di lapangan setiap RT untuk bermain bola voli bersama-sama. Olahraga ini merupakan yang paling populer di desa, menciptakan suasana kegembiraan dan kebersamaan di antara warga.',
  },
]

const umkmData = [
  {
    image: umkm1,
    title: 'Teh Tarik',
    text: 'UMKM ini menawarkan minuman teh tarik yang sangat disukai oleh anak-anak. Salah satu kelebihan produk ini adalah penggunaan gula asli, yang memberikan rasa manis alami tanpa menimbulkan efek samping seperti batuk.',
  },
  {
    image: umkm2,
    title: 'Anyaman',
    text: 'UMKM ini menjual berbagai produk anyaman yang terbuat dari bambu maupun plastik. Beberapa produknya meliputi keranjang dan nampan, yang dibuat dengan ketrampilan tinggi.',
  },
  {
    image: umkm4,
    title: 'Kerajinan Bambu',
    text: 'Usaha yang dimiliki oleh Bapak Luqman Eko ini menawarkan jasa pembuatan peralatan rumah tangga dari bahan bambu. Produk-produk yang dihasilkan meliputi saung, bangku, meja, dan asbak.',
  },
  {
    image: umkm3,
    title: 'Pembuatan Tahu',
    text: 'UMKM pembuatan tahu ini menyediakan beberapa jenis tahu, salah satunya berada di RK 4. Pabrik tahu ini juga menyuplai tahu ke pasar terdekat.',
  },
  {
    image: umkm5,
    title: 'Penggilingan Plastik',
    text: 'UMKM ini menerima sampah plastik dan besi yang kemudian diolah melalui proses penggilingan dan dijual ke berbagai kota, salah satunya Kota Metro. UMKM ini sudah berhasil memiliki karyawan dari luar kota.',
  },
]
const kegiatanData = [
  {
    image: kegiatan4,
    title: 'Gotong Royong',
    text: 'Budaya gotong royong di Desa Harapan Mukti masih terjaga dengan kuat. Warga dengan penuh semangat bahu-membahu dalam berbagai kegiatan',
  },
  {
    image: kegiatan3,
    title: 'Posyandu',
    text: 'Setiap satu bulan sekali, Desa Harapan Mukti mengadakan posyandu balita, remaja, dan lansia. Kegiatan ini bertujuan untuk memantau dan mencatat tingkat kesehatan warga.',
  },
  {
    image: kegiatan1,
    title: 'Pengajian',
    text: 'Acara pengajian ini diadakan untuk berdoa bersama dan mendatangkan ustaz ternama guna menyebarkan dakwah di Desa Harapan Mukti. Kegiatan ini biasanya juga disertai dengan pemberian santunan kepada anak-anak yatim.',
  },
  {
    image: kegiatan5,
    title: 'Yasinan',
    text: 'Acara yasinan diadakan seminggu sekali pada hari Jumat. Kegiatan ini dimulai dengan doa bersama dan diakhiri dengan makan bersama. Lokasi acara bergiliran di setiap RT, di mana setiap warga menjadi tuan rumah secara estafet.',
  },
  {
    image: kegiatan2,
    title: 'Musyawarah Desa',
    text: 'Acara ini diadakan di balai desa dan mengundang berbagai tokoh masyarakat. Tujuannya adalah untuk membahas berbagai permasalahan yang ada di desa. Dalam pertemuan ini, setiap pendapat individu dihargai dan dipertimbangkan dengan seksama.',
  },
];

export { umkmData, olahragaData, kegiatanData, placesData };
