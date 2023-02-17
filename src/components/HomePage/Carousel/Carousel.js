import React, { useState, useEffect } from 'react'
import Auli from './img/Auli.jpg'
import Kedarnath from './img/Kedarnath.jpg'
import Nainital from './img/Nainital.jpg'
import VOF from './img/VOF.jpg'
import Weather from './weather'

export default function Carousel() {
  const [transform, setTransform] = useState(0)
  const [transition, setTransition] = useState(1)
  const [counter, setCounter] = useState(0)

  const carousel = document.querySelectorAll('.carousel-details')

  useEffect(() => {
    const timer = setInterval(() => {
      switch (counter) {
        case 0:
          setCounter(counter + 1);
          setTransform(98 * counter);
          setTransition(0);
          break;
        // Use only 5 images in carousel, and the last one and the first one is same 
        // If you want to use more images then add the case number to (totalimages-1)
        case carousel.length - 1:
          setCounter(0);
          setTransform(98 * counter);
          setTransition(1);
          break;
        default:
          setCounter(counter + 1);
          setTransform(98 * counter);
          setTransition(1);
          break;
      }
    }, 5000);
    return () => clearInterval(timer);
  })

  return (
    <section id='carousel'>
      <div className='carousel-container' style={{ transform: `translateX(-${transform}vw)`, transition: `${transition}s` }}>
        <div className='carousel-details'>
          <img src={Kedarnath} alt='img' className='carousel-img' />
          <div className='img-txt'>
            <h2>Kedarnath</h2>
            <ul><li>One of the most revered temple towns of India.</li>
              <li>Home to the sacred Kedarnath temple.</li>
              <li> A scenic destination located high up in the Himalayas.</li>
              <li>A trekker's paradise.</li>
              <li>Famous for Rudra cave, where PM Narendra Modi had meditated.</li></ul>
          </div>
          <Weather place='kedarnath' />
        </div>
        <div className='carousel-details'>
          <img src={Nainital} alt='img' className='carousel-img' />
          <div className='img-txt'>
            <h2>Nainital</h2>
            <ul>
              <li>One of the most popular hill-stations in India.</li>
              <li>Picturesque colonial town</li>
              <li>Centered around beautiful mountain lake.</li>
              <li>Surrounded by seven hills and snow-capped peaks.</li>
              <li>Home to Naina Devi temple.</li>
            </ul>
          </div>
          <Weather place='nainital' />
        </div>
        <div className='carousel-details'><img src={VOF} alt='img' className='carousel-img' />
          <div className='img-txt'>
            <h2>Valley of Flowers</h2>
            <ul>
              <li>A UNESCO World Heritage Site.</li>
              <li>Flowery meadows.</li>
              <li>Heaven for photographers.</li>
              <li>Home to rare and endangered animals.</li>
              <li>Panoramic views of the Himalayas</li>
            </ul>
          </div>
          <Weather place='valley of flower' />
        </div>

        <div className='carousel-details'><img src={Auli} alt='img' className='carousel-img' />
          <div className='img-txt'>
            <h2>Auli</h2>
            <ul>
              <li>India's premier skiing destination.</li>
              <li>Enjoy India’s longest cable ride over snowy slopes</li>
              <li>Offers spectacular views of Nanda Devi, the country's second-highest peak </li>
              <li>Year round holiday site with superb views of the Himalayas.</li>
            </ul>
          </div>
          <Weather place='joshimath' />
        </div>

        <div className='carousel-details'><img src={Kedarnath} alt='img' className='carousel-img' />
          <div className='img-txt'>
            <h2>Kedarnath</h2>
            <ul>
              <li>One of the most revered temple towns of India.</li>
              <li>Home to the sacred Kedarnath temple.</li>
              <li> A scenic destination located high up in the Himalayas.</li>
              <li>A trekker's paradise.</li>
              <li>Famous for Rudra cave, where PM Narendra Modi had meditated.</li>
            </ul>
          </div>
          <Weather place='kedarnath' />
        </div>
      </div>
    </section>
  )
}
