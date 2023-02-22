import React from 'react'
import menu from './menu.png'
import {Link} from 'react-router-dom';

export default function Navigation(props) {

  return (
    <section className='nav-bg' onClick={props.handleMenu}>
      <div id='navigation'>
        <ul className='nav-container'>
          <li className='nav-items webpage'><img src={menu} onClick={props.handleMenu} /><h2><Link to = '/' onClick={props.handleMenu} >Uttarakhand</Link></h2></li>
          <li className='nav-items'><div>A</div><Link to='/almora' onClick={props.handleMenu}>Almora</Link></li>
          <li className='nav-items'><div>B</div><Link to='/bageshwar' onClick={props.handleMenu}>Bageshwar</Link></li>
          <li className='nav-items'><div>C</div><Link to='/chamoli' onClick={props.handleMenu}>Chamoli</Link></li>
          <li className='nav-items'><div>D</div><Link to='/dehradun' onClick={props.handleMenu}>Dehradun</Link></li>
          <li className='nav-items'><div>D</div><Link to='/devprayag'>Devprayag</Link></li>
          <li className='nav-items'><div>H</div><Link to='/haridwar' onClick={props.handleMenu}>Haridwar</Link></li>
          <li className='nav-items'><div>N</div><Link to='/nainital' onClick={props.handleMenu}>Nainital</Link></li>
          <li className='nav-items'><div>P</div><Link to='/pauri' onClick={props.handleMenu}>Pauri</Link></li>
          <li className='nav-items'><div>P</div><Link to='/pithoragarh' onClick={props.handleMenu}>Pithoragarh</Link></li>
          <li className='nav-items'><div>R</div><Link to='/rudraprayag' onClick={props.handleMenu}>Rudraprayag</Link></li>
          <li className='nav-items'><div>R</div><Link to='/rudrapur' onClick={props.handleMenu}>Rudrapur</Link></li>
          <li className='nav-items'><div>T</div><Link to='/tehri' onClick={props.handleMenu}>Tehri</Link></li>
          <li className='nav-items'><div>U</div><Link to='/udhamSinghNagar' onClick={props.handleMenu}>Udham Singh Nagar</Link></li>
        </ul>
      </div>
    </section>
  )
}
