import React from 'react'
import {Link} from 'react-router-dom';
import menu from './menu.png'
import fb from './fb.png'
import tw from './tw.png'
import mail from './mail.png'
import ig from './ig.png'

export default function TopNav(props) {
  return (
    <header id='header'>
        <li className='webpage items-left'>
        <img src={menu} onClick={props.handleMenu}/>
        <h2><Link to = '/'>Uttarakhand</Link></h2>
        </li>
        <li className='items-right'>
        <img src={ig} alt=''/>
        <img src={fb} alt=''/>
        <img src={tw} alt=''/>
        <img src={mail} alt=''/>
        </li>
    </header>
  )
}
