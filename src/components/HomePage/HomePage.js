import React from 'react'
import Cards from '../Cards/Cards'
import Carousel from './Carousel/Carousel'
import munsyari from '../Cards/Munsiyari.jpg'
import kedarkantha from '../Cards/kedarkantha.jpg'
import tungnath from '../Cards/tungnath.jpg'
import madmaheshwar from '../Cards/madmaheshwar.jpg'
import kausani from '../Cards/kausani.jpg'
import Nainital from '../Cards/Nainital.jpg'


export default function HomePage() {
  return (
    <section id='homepage'>
      <Carousel />
      <div className='homepage-details'>
        <p>Uttarakhand, also known as the "Land of Gods", is a state in northern India that is known for its natural beauty, religious significance, and adventurous activities.</p>
        <div id='short-contents'>
          <h2>Places to Visit</h2>
          <div className='card-container'>
            <Cards visit={munsyari} name='Munsiyari' cardDesc='Munsiyari is a quaint hamlet that remains snowbound for most of the year.' />
            <Cards visit={kedarkantha} name='KedarKantha' cardDesc='One of the most significant is the climb to the summit.' />
            <Cards visit={tungnath} name='Tungnath' cardDesc='Tungnath peacefully adorned on the Chandranath Parvat is the highest Shiva temple in the world and the highest Panch Kedar temple of Uttarakhand. Arms of Shiva is worshipped here.' />
            <Cards visit={madmaheshwar} name='Madmaheshwar' cardDesc='It is one of the Panch Kedar pilgrimage circuits, The middle (madhya) or belly part or navel (nabhi) of Shiva is worshipped here.' />
            <Cards visit={kausani} name='Kausani' cardDesc="Most famous for panoramic views of Himalayan peaks, Often called 'Switzerland of India'" />
            <Cards visit={Nainital} name='Nainital' cardDesc="One of the most popular hill-stations in India, Surrounded by seven hills and snow-capped peaks." />
          </div>
        </div>
      </div>

    </section>
  )
}
