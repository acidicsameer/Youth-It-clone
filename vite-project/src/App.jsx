import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services  from './Pages/Services'
import Blog from './Pages/Blog';
 import { Navbar } from './components/Navbar';
import ContactPage from './Pages/ContactPage';
import Gallery from './Pages/Gallery'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                   <Route path="/contact" element={<ContactPage />} />
                     <Route path="/gallery" element={<Gallery/>} />
                   <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
