import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
// import WelcomePage from './components/WelcomePage';
import TopNav from './components/TopNav';
import HomePage from './components/HomePage/HomePage';

function App() {
  const handleMenu=()=>{
    const navigation = document.getElementById('navigation');
    const navBg = document.querySelector('.nav-bg')
    if(navigation.style.width == '250px'){
      navigation.style.width = '0px';
      navBg.style.width ='0px';
    }
    else{
      navigation.style.width = '250px';
      navBg.style.width ='100vw'
;    }
  }
  return (
    <section className='grid-2'>
      <Navigation handleMenu={handleMenu}/>
      <TopNav handleMenu={handleMenu}/>
      <HomePage />
    </section>
  );
}

export default App;
