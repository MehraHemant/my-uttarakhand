import React from 'react'
import WeatherDatails from '../Weather/WeatherDatails'
import patalDevi from './PatalDevi.jpg'

export default function PatalDevi() {
  return (
    <div className='sub-page almora'>
      <WeatherDatails place='patalDevi, uttarakhand' />
      <div className='distt-subpage'>
        <h2>Patal Devi Temple</h2>
        <h3>Introduction</h3>
        <div className='distt-subpage-desc'>
          <aside>
            <img src={patalDevi} alt='/' />
            <h5>Patal Devi Temple</h5>
          </aside>
          <div className='br'>
            There are nine temples dedicated to Maa Durga’s nine forms. One of them is the Patal Devi temple in Almora. This temple is located in the village of Shail, about five to six kilometers from Almora. This 250-year-old temple used to be surrounded by four natural water sources. There is also a large pool beneath the temple known as Gauri Kund. There was a time when this pool was full of water. It is dry today.
          </div>
          <div className='br'>
          The Regional Archaeological Unit, Almora, and the Directorate of Culture, Uttarakhand erected a cultural plaque at the temple’s entrance that reads: “Patal Devi Temple Almora was built by a brave soldier Sumer officer during the reign of Chand dynasty king Deep Chand (1748-1777). This temple was later demolished. It was later rebuilt during the reign of the Gorkhas (1790-1815).
          </div>
        </div>
        <h3>Architecture</h3>
        <div className='distt-subpage-desc'>
          <div className='br'>
            This temple was constructed using locally mined stones. A circumambulatory path has been created in the land and configuration based on the Mirth Rekha-Shikhar, the sanctum sanctorum, and the pillars surrounding it. The temple's sanctum sanctorum contains a Shaktipeeth. On a rock plate protuding in the middle of the summit, a statue of Gaj, Singh, and Nandi sits on a small platform in front of the temple facing east.
          </div>
          <div className='br'>
          Apart from the locals, Maa Anandmayi Ashram is located near the temple and is well-known in the Bengali community. Students from Bengal used to come here to study once upon a time. The roof of the temple’s back section had begun to settle in one spot, threatening to demolish the vents built between the pillars in its verandah. To address this threat, the Archaeological Department has made an effort to save all of the pillars and windows by constructing iron frames.
            </div>
        </div>
      </div>
    </div>
  )
}
