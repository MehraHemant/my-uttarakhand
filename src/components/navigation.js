import React from 'react'
import menu from './menu.png'

export default function Navigation(props) {
  // const handleMenu=()=>{
  //   const navigation = document.getElementById('navigation');
  //   navigation.style.width = '0px';

  // }
  return (
    <section>
      <div className='nav-bg' onClick={props.handleMenu}></div>
      <div id='navigation'>
        <ul className='nav-container'>
          <li className='nav-items'><img src={menu} onClick={props.handleMenu} /><h2>Uttarakhand</h2></li>
          <li className='nav-items'><div>A</div><a href='/'>Almora</a></li>
          <li className='nav-items'><div>B</div><a href='/'>Bageshwar</a></li>
          <li className='nav-items'><div>C</div><a href='/'>Chamoli</a></li>
          <li className='nav-items'><div>D</div><a href='/'>Dehradun</a></li>
          <li className='nav-items'><div>D</div><a href='/'>Devprayag</a></li>
          <li className='nav-items'><div>H</div><a href='/'>Haridwar</a></li>
          <li className='nav-items'><div>N</div><a href='/'>Nainital</a></li>
          <li className='nav-items'><div>P</div><a href='/'>Pauri</a></li>
          <li className='nav-items'><div>P</div><a href='/'>Pithoragarh</a></li>
          <li className='nav-items'><div>R</div><a href='/'>Rudraprayag</a></li>
          <li className='nav-items'><div>R</div><a href='/'>Rudrapur</a></li>
          <li className='nav-items'><div>T</div><a href='/'>Tehri</a></li>
          <li className='nav-items'><div>U</div><a href='/'>Udham Singh Nagar</a></li>
        </ul>
      </div>
    </section>
  )
}
