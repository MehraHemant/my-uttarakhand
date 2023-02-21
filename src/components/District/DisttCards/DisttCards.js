import React from 'react'
import {Link } from 'react-router-dom';

export default function DisttCards(props) {
  return (
    <section id='subcards'>
        <img src={props.placeImg} alt='' />
        <div className='subcard-heading'><Link to={props.link}>{props.heading}</Link></div>
        <div className='subcard-desc'>{props.desc}</div>
    </section>
  )
}
