
import './App.css';
import Navbar from './Navbar/Navbar';
import Photo from './HomeSecond/Photo';
import Work from './HomeThird/Work';
import Test from './HomeFour/Test';
import Map from './HomeFive/Map';
import First from './Work/First';
import Contact from './Button/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Design from './Designs/Design';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Photo />
            <Work />
            <Test />
            <Map />
            <Footer/>
          </>
        } />
        <Route path="/about" element={<First />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/designs" element={<Design />} />
      </Routes>
    </>
  );
}

export default App;
