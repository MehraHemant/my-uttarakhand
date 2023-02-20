import './App.css';
import Navigation from './components/Navigation/navigation';
import TopNav from './components/Navigation/TopNav';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Nainital from './components/District/Nainital/nainital';
import Almora from './components/District/Almora/almora';


function App() {
  const handleMenu = () => {
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
  }
  return (
    <Router>
      <section className='grid-2'>
        <Routes>
          <Route exact path='/' element={<HomePage key='Homepage'/>}></Route>
          <Route exact path='/nainital' element={<Nainital key='Nainital'/>}></Route>
          <Route exact path='/almora' element={<Almora key='Almora'/>}></Route>
        </Routes>
        <Navigation handleMenu={handleMenu} />
        <TopNav handleMenu={handleMenu} />
      </section>
    </Router>
  );
}

export default App;
