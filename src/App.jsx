import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx'
import Movie1 from './assets/posters/toystory.webp'
import Movie2 from './assets/posters/thedrama.webp'
import Movie3 from './assets/posters/obsession.webp'
import Movie4 from './assets/posters/28yrslater.webp'
import Movie5 from './assets/posters/theinvite.webp'
import Movie6 from './assets/posters/mastersoftheuniverse.webp'
import Movie7 from './assets/posters/endofoakstreet.webp'
import Movie8 from './assets/posters/sendhelp.webp'
function App() {

const movies = [
  {
    id: 1,
    title: "Toy Story 5",
    year: 2026,
    genre: "Animation, Family",
    image: Movie1,
    alt: "Toy Story 5",
    description: "Woody, Buzz, and the gang face a new challenge when a mysterious tablet-loving toy threatens to upend their world.",
  },
  {
    id: 2,
    title: "The Drama",
    year: 2026,
    genre: "Comedy, Drama, Romance",
    image: Movie2,
    alt: "The Drama",
    description: "A chaotic love triangle unfolds when two former best friends fall for the same person at a family wedding.",
  },
  {
    id: 3,
    title: "Obsession",
    year: 2026,
    genre: "Horror, Thriller",
    image: Movie3,
    alt: "Toy Story 5",
    description: "A woman's new neighbor becomes fixated on her, blurring the line between admiration and terror.",
  },
  {
    id: 4,
    title: "28 Years Later",
    year: 2025,
    genre: "Horror, Sci-Fi",
    image: Movie4,
    alt: "28 Years Later Movie",
    description: "Decades after the rage virus outbreak, a group of survivors ventures beyond their isolated safe haven and into a changed world.",
  },
  {
    id: 5,
    title: "The Invite",
    year: 2026,
    genre: "Comedy, Drama",
    image: Movie5,
    alt: "The Invite",
    description: "An awkward misfit RSVPs to the wrong party and ends up finding an unlikely group of friends along the way.",
  },
  {
    id: 6,
    title: "Masters of the Universe",
    year: 2026,
    genre: "Action, Adventure, Family",
    image: Movie6,
    alt: "Masters of the Universe",
    description: "Prince Adam discovers his destiny as He-Man, defender of Eternia, in a battle against the sorcerer Skeletor.",
  },
  {
    id: 7,
    title: "The End of Oak Street",
    year: 2026,
    genre: "Sci-Fi, Survival",
    image: Movie7,
    alt: "The End of Oak Street",
    description: "When a quiet suburban street is cut off from the rest of the world overnight, its residents must uncover the truth to survive.",
  },
  {
    id: 8,
    title: "Send Help",
    year: 2026,
    genre: "Horror, Thriller",
    image: Movie8,
    alt: "Send Help",
    description: "A group of friends stranded on a remote island realize they're not as alone as they thought.",
  },
];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home allMovies={movies}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
