import React from 'react'
import WeatherDatails from '../Weather/WeatherDatails'
import ranikhet from './Ranikhet.jpg'

export default function Ranikhet() {
  return (
    <div className='sub-page almora'>
        <WeatherDatails place='ranikhet, uttarakhand'/>
        <div className='distt-subpage'>
            <h2>Ranikhet</h2>
            <h3>Introduction</h3>
            <div className='distt-subpage-desc'>
                <aside>
                    <img src={ranikhet} alt='/'/>
                    <h5>Ranikhet</h5>
                </aside>
            </div>
        </div>
    </div>
  )
}
