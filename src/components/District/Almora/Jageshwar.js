import React from 'react'
import WeatherDatails from '../Weather/WeatherDatails'
import jageshwar from './Jageshwar.jpg'

export default function Jageshwar() {
  return (
    <div className='sub-page'>
        <WeatherDatails place='Jageshwar, uttarakhand'/>
        <div className='distt-subpage'>
            <h2>Jageshwar Dham</h2>
            <h3>Introduction</h3>
            <div className='distt-subpage-desc'>
                <aside>
                    <img src={jageshwar} alt=''/>
                    <h5>Jageshwar Dham</h5>
                </aside>
                Jageshwar Dham is known as one of Jyotirlinga, Astham Jyotirlingas - Nagesham Darukavane. In many traditional scriptures, it is revered as one of twelve original Jyotirlingams. It is also known as Valley of Gods & dates back from 7th to 14th centuries in it's different forms of reconstruction. The original temple is believed to be constructed by Adi Shankaracharya. It was customary for pilgrims on way to Kailash Mansarovar route to stop and worship Lord Shiva here and seek his blessings.<br/>
                This area was also centre of Lakulisha Shaivism, a revivalist sect worshipping Lord Shiva. Saint Lakulisha, name literally meaning, club-bearing Lord, was a wandering ascetic who is considered to have united different sects and revived worship of Lord Pashupati. This faith later flourished under Bharashiva and Vakataka dynasties of southern and central India. Piligrims who came after Saint Lakulisha considered Lakulisha as the last of twenty-eight incarnations of Lord Shiva, as mentioned in the Puranas.
            </div>
        </div>
    </div>
  )
}
