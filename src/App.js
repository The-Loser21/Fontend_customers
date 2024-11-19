import './App.css';
import { Header, Navbar } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { NewCars } from './components/NewCars/NewCars';
import { FeaturedCars } from './components/FeaturedCars/FeaturedCars';
import { Reviews } from './components/Reviews/Reviews';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <NewCars />
      <FeaturedCars />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
