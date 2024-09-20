import { useState } from 'react';
import './App.css';

const animesData = [
  {
    mal_id: 21,
    title: 'Jujutsu Kaisen',
    year: 2020,
    image: 'https://awsimages.detik.net.id/community/media/visual/2024/02/08/jujutsu-kaisen.jpeg?w=700&q=90',
    score: 8.71,
    synopsis: 'Memanjakan diri dalam kegiatan paranormal yang tidak masuk akal dengan Klub Gaib, Yuuji Itadori, seorang siswa sekolah menengah, menghabiskan hari-harinya di ruang klub atau rumah sakit, di mana dia mengunjungi kakeknya yang terbaring di tempat tidur. Namun, gaya hidup yang santai ini segera berubah ketika dia tanpa sadar menemukan sebuah benda terkutuk. Yuuji mendapati dirinya terdorong ke dunia Kutukan-makhluk yang terbentuk dari kebencian dan kenegatifan manusia-setelah menelan jari iblis Sukuna Ryoumen, Raja Kutukan. Dia kemudian bergabung dengan Sekolah Jujutsu Tokyo untuk melawan ancaman Kutukan dan mengasah kekuatannya sebagai penyihir Jujutsu.'
  },

  {
    mal_id: 20,
    title: 'Frieren: Beyond Journeys End',
    year: 2023,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Frieren_Beyond_Journey%27s_End.jpg/220px-Frieren_Beyond_Journey%27s_End.jpg',
    score: 8.71,
    synopsis:
      "'Selama pencarian mereka selama satu dekade untuk mengalahkan Raja Iblis, anggota kelompok pahlawan—Himmel sendiri, pendeta Heiter, prajurit kurcaci Eisen, dan penyihir elf Frieren—membangun ikatan melalui petualangan dan pertempuran, menciptakan kenangan berharga yang tak terlupakan. Namun, waktu yang dihabiskan Frieren bersama rekan-rekannya hanya sebagian kecil dari hidupnya yang telah berlangsung lebih dari seribu tahun. Setelah menyadari dampak pengalaman ini, dia memulai perjalanan baru untuk memahami manusia dan menciptakan hubungan pribadi yang nyata.",
  },

  {
    mal_id: 269,
    title: 'Horimiya',
    year: 2021,
    image: 'https://m.media-amazon.com/images/M/MV5BOGUzYmZkZjItNjI5Yi00NjllLThiMjUtYTY0MDI4M2Y0MmZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    score: 8.71,
    synopsis:
      "Di permukaan, Hori dan Miyamura tampak bertolak belakang. Hori populer dan pintar, sementara Miyamura terlihat penyendiri dan misterius. Namun, pertemuan kebetulan membuat mereka membuka sisi tersembunyi mereka satu sama lain. Keduanya dengan cepat menjadi teman, saling berbagi kehidupan yang tidak diketahui oleh teman-teman mereka.Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant.",
  },

  {
    mal_id: 31964,
    title: 'Josee, the Tiger and the Fish',
    year: 2020,
    image: 'https://m.media-amazon.com/images/M/MV5BMTE4OTkyYzYtMDljNy00MDQ3LWI1NGMtODI3YjAwOWNkY2I1XkEyXkFqcGc@._V1_.jpgg',
    score: 8.71,
    synopsis:
      'Tsuneo bertemu Josee, seorang gadis di kursi roda, secara tidak sengaja. Meskipun awalnya enggan, mereka mulai membangun hubungan yang unik, di mana Tsuneo membantu Josee mencapai impiannya untuk menjelajahi dunia luar.The appearance of "quirks", newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
    },
    {
      
    mal_id: 120,
    title: 'Suzume',
    year: 2022,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4u-curn-kiht_1evLIdrytYvKBGfcurX-NQ&s',
    score: 8.71,
    synopsis:
      'Suzume bertemu Souta, seorang pemuda yang mencari pintu misterius yang tersebar di seluruh Jepang. Ketika Suzume tanpa sadar melepaskan kekuatan jahat dengan membuka salah satu pintu tersebut, dia harus bekerja sama dengan Souta untuk mengunci pintu-pintu lainnya sebelum kehancuran terjadi.',
      },
    ];
export default function App() {
  const [query, setQuery] = useState('');
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img"></span>
          <h1>🥢WikiNime🥢</h1>
          <span role="img"></span>
        </div>
        <div className="search-container">
          <input className="search" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <p className="search-results">
            Found <strong>5</strong> results
          </p>
        </div>
      </nav>

      <main className="main">
        <div className="box">
          <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
            {isOpen1 ? '–' : '+'}
          </button>
          {isOpen1 && (
            <ul className="list list-anime">
              {animes?.map((anime) => (
                <li key={anime.mal_id} onClick={() => handleSelectedAnime(anime.mal_id)}>
                  <img src={anime.image} alt={`${anime.title} cover`} />
                  <h3>{anime.title}</h3>
                  <div>
                    <p>
                      <span>{anime.year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="box">
          <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
            {isOpen2 ? '–' : '+'}
          </button>
          {isOpen2 && (
            <div className="details">
              <header>
                <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
                <div className="details-overview">
                  <h2>{selectedAnime.title}</h2>
                  <p>
                    {selectedAnime.year} &bull; {selectedAnime.score}
                  </p>
                </div>
              </header>
              <section>
                <p>
                  <em>{selectedAnime.synopsis}</em>
                </p>
              </section>
            </div>
          )}
        </div>
      </main>
    </>
  );
}