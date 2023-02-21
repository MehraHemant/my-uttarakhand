import React from 'react';
import DisttCards from '../DisttCards/DisttCards';
import WeatherDatails from '../Weather/WeatherDatails';
import katarmal from './katarmal.jpeg'
import kasarDevi from './kasarDevi.jpeg';
import Jageshwar from './Jageshwar.jpg';
import Binsar from './Binsar.jpg';
import PatalDevi from './PatalDevi.jpg';
import Ranikhet from './Ranikhet.jpg';






export default function Almora() {
  return (
    <section id='almora' className='sub-page'>
      <WeatherDatails place='almora' />
      <div className='disttcards-container'>
        <DisttCards placeImg={katarmal} link='/almora/katarmal_sun_temple' heading='Katarmal Sun Temple' desc="This temple was constructed by king katarmalla of Katyuri dynasty in the 9 th century CE and from there it has got the name Katarmal and is a stunning example of Katyuri's rich history." />
        <DisttCards placeImg={kasarDevi} link='/almora/kasar_devi_temple' heading='Kasar Devi Temple' desc="This temple was constructed by king katarmalla of Katyuri dynasty in the 9 th century CE and from there it has got the name Katarmal and is a stunning example of Katyuri's rich history." />
        <DisttCards placeImg={Jageshwar} link='/almora/jageshwar_temple' heading='Jageshwar Temple' desc="The Jageshwar Dham is located in Almorah District of Uttarakhand State in India and is accessible by road from Haldwani, at a distance of around 170 Km. Haldwani is well connected by Train and Road to New Delhi and Dehradun, the Capital of Uttarakhand State." />
        <DisttCards placeImg={Binsar} link='/almora/binsar' heading='Binsar Wildlife Sanctuary' desc="Binsar lies on top of a mountain in the lower Himalayas, about 30 km north of Almora town in Uttarakhand. The sanctuary spreads over 45.59 km2. Its altitude varies from 900 to 2500 metres with an average height of 2412 metres. The temperature of this area is about 20 °C. A series of ridges and gorges make up the sanctuary." />
        <DisttCards placeImg={PatalDevi} link='/almora/patal_devi' heading='Patal Devi Temple' desc="There are nine temples dedicated to Maa Durga’s nine forms. One of them is the Patal Devi temple in Almora. This temple is located in the village of Shail, about five to six kilometers from Almora. This 250-year-old temple used to be surrounded by four natural water sources. There is also a large pool beneath the temple known as Gauri Kund. It is dry today." />
        <DisttCards placeImg={Ranikhet} link='/almora/ranikhet' heading='Golf Course, Ranikhet' desc="The Beautiful cantonment town of Ranikhet is located in Almora District of Almora, in the state of Uttarakhand at an elevation of 1,892 meters above sea level. Ranikhet, literally meaning queens' Land is a place related to the legends of Himalayas and gets its name from a local legend Rani Padmini. Ranikhet Golf Course is one of the highest golf courses in Asia." />
      </div>
    </section>
  )
}
