import React from 'react'
import menu from './menu.png'
import fb from './fb.png'
import tw from './tw.png'
import mail from './mail.png'
import ig from './ig.png'

export default function TopNav(props) {
  return (
    <header id='header'>
        <li className='nav-items items-left'>
        <img src={menu} onClick={props.handleMenu}/>
        <h2 className='ml-1'>Uttarakhand</h2>
        </li>
        <li className='items-right'>
        <img src={ig}/>
        <img src={fb}/>
        <img src={tw}/>
        <img src={mail}/>
        </li>
    </header>
  )
}
