import React from 'react';
import DisttCards from '../DisttCards/DisttCards';
import WeatherDatails from '../Weather/WeatherDatails';
import katarmal from './katarmal.jpeg'
import kasarDevi from './kasarDevi.jpeg';




export default function Almora() {
  return (
    <section id='almora' className='sub-page'>
      <WeatherDatails city='almora' />
      <div className='disttcards-container'>
        <DisttCards placeImg={katarmal} link='/almora/katarmal_sun_temple' heading='Katarmal Sun Temple' desc="This temple was constructed by king katarmalla of Katyuri dynasty in the 9 th century CE and from there it has got the name Katarmal and is a stunning example of Katyuri's rich history." />
        <DisttCards placeImg={kasarDevi} link='/almora/kasar_devi_temple' heading='Kasar Devi Temple' desc="This temple was constructed by king katarmalla of Katyuri dynasty in the 9 th century CE and from there it has got the name Katarmal and is a stunning example of Katyuri's rich history." />
      </div>
    </section>
  )
}
