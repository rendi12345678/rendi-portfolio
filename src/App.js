import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/reset.css';
import './styles/navbar.css';
import './styles/body.css';
import './styles/hero.css';
import Home from './Pages/Home';
import './App.css';
import Footer from './components/Footer';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
          <Route path='/' 
                 exact 
                 element={<Home/>}/>
          <Route path='/projects' 
                 exact 
                 element={<Projects/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
