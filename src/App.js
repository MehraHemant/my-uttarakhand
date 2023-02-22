import './App.css';
import Navigation from './components/Navigation/navigation';
import TopNav from './components/Navigation/TopNav';
import HomePage from './components/HomePage/HomePage';
import Nainital from './components/District/Nainital/nainital';
import Almora from './components/District/Almora/almora';
import KatarmalSunTemple from './components/District/Almora/katarmalSunTemple';
import KasarDevi from './components/District/Almora/kasarDevi';
import Jageshwar from './components/District/Almora/Jageshwar';
import Ranikhet from './components/District/Almora/Ranikhet';
import Binsar from './components/District/Almora/Binsar';
import PatalDevi from './components/District/Almora/PatalDevi';

import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {
  const handleMenu = (e) => {
    const navigation = document.getElementById('navigation');
    const navBg = document.querySelector('.nav-bg')
    if (navigation.style.width === '250px') {
      navigation.style.width = '0px';
      navBg.style.width = '0px';
    }

    else {
      navigation.style.width = '250px';
      navBg.style.width = '100vw'
        ;
    }
    e.stopPropagation();
  }
  return (
    <Router>
      <section className='main'>
        <Routes>
          <Route exact path='/' element={<HomePage key='Homepage'/>}></Route>
          <Route exact path='/nainital' element={<Nainital key='Nainital'/>}></Route>
          <Route exact path='/almora' element={<Almora key='Almora'/>}></Route>
          <Route exact path='/almora/katarmal_sun_temple' element={<KatarmalSunTemple />}></Route>
          <Route exact path='/almora/kasar_devi_temple' element={<KasarDevi />}></Route>
          <Route exact path='/almora/jageshwar_temple' element={<Jageshwar />}></Route>
          <Route exact path='/almora/ranikhet' element={<Ranikhet />}></Route>
          <Route exact path='/almora/binsar' element={<Binsar />}></Route>
          <Route exact path='/almora/patal_devi' element={<PatalDevi />}></Route>
        </Routes>
        <Navigation handleMenu={handleMenu} />
        <TopNav handleMenu={handleMenu} />
      </section>
    </Router>
  );
}

export default App;
