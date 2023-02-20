import React from 'react'
import menu from './menu.png'
import {Link} from 'react-router-dom';

export default function Navigation(props) {

  return (
    <section>
      <div className='nav-bg' onClick={props.handleMenu}></div>
      <div id='navigation'>
        <ul className='nav-container'>
          <li className='nav-items webpage'><img src={menu} onClick={props.handleMenu} /><h2><Link to = '/'>Uttarakhand</Link></h2></li>
          <li className='nav-items'><div>A</div><Link to='/almora'>Almora</Link></li>
          <li className='nav-items'><div>B</div><Link to='/bageshwar'>Bageshwar</Link></li>
          <li className='nav-items'><div>C</div><Link to='/chamoli'>Chamoli</Link></li>
          <li className='nav-items'><div>D</div><Link to='/dehradun'>Dehradun</Link></li>
          <li className='nav-items'><div>D</div><Link to='/devprayag'>Devprayag</Link></li>
          <li className='nav-items'><div>H</div><Link to='/haridwar'>Haridwar</Link></li>
          <li className='nav-items'><div>N</div><Link to='/nainital'>Nainital</Link></li>
          <li className='nav-items'><div>P</div><Link to='/pauri'>Pauri</Link></li>
          <li className='nav-items'><div>P</div><Link to='/pithoragarh'>Pithoragarh</Link></li>
          <li className='nav-items'><div>R</div><Link to='/rudraprayag'>Rudraprayag</Link></li>
          <li className='nav-items'><div>R</div><Link to='/rudrapur'>Rudrapur</Link></li>
          <li className='nav-items'><div>T</div><Link to='/tehri'>Tehri</Link></li>
          <li className='nav-items'><div>U</div><Link to='/udhamSinghNagar'>Udham Singh Nagar</Link></li>
        </ul>
      </div>
    </section>
  )
}
