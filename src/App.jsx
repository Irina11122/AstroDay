import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ShootingStars from './components/ShootingStars';
import Photography from './pages/Photography';
import Gallery from './pages/Gallery';
import PhotoDetails from './pages/PhotoDetails';
import Universe from './pages/Universe';
import Contact from './pages/Contact';
import Galaxies from './pages/Galaxies';
import Stars from './pages/Stars';
import Planets from './pages/Planets';
import DeepSpace from './pages/DeepSpace';
import ClubSerres from './pages/ClubSerres';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ShootingStars />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo" element={<Photography />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/photo/:id" element={<PhotoDetails />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/galaxies" element={<Galaxies />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/deepspace" element={<DeepSpace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/club-serres-unesco" element={<ClubSerres />} />
      </Routes>
    </BrowserRouter>
  );
}
