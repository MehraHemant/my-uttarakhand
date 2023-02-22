import React from 'react'
import WeatherDatails from '../Weather/WeatherDatails'
import binsar from './Binsar.jpg'

export default function Binsar() {
    return (
        <div className='sub-page almora'>
            <WeatherDatails place='binsar, Uttarakhand' />
            <div className=' distt-subpage'>
                <h2>Binsar</h2>
                <h3>Background</h3>
                <div className='distt-subpage-desc'>
                    <aside>
                        <img src={binsar} alt='/' />
                        <h5>Binsar</h5>
                    </aside>
                    <div className='br'>
                        Binsar was the summer capital of the Chand Kings, who ruled over Kumaon from the 11th to the 18th centuries AD. The British also used it as a summer capital, and built several estates inside the forest. In 1988, Binsar was established as a sanctuary for the conservation and protection of the shrinking broad leaf oak (Quercus) forests of the Central Himalayan region. It has over 200 species of birds.
                    </div>
                    <div className='br'>
                    Bindeshwar Mahadev Temple, also known as Binsar Devta or simply Binsar, is an ancient Hindu rock temple dedicated to Lord Shiva, worshipped as Bindeshwar, a popular deity in this region. At an altitude of 2480 meters above mean sea level, it is situated in Bisaona village, which falls in the Chauthan region of Thalisain Block in the Pauri Garhwal District of the Indian state of Uttarakhand. This temple is set amidst dense forests of birch, deodar and rhododendron.
                    </div>
                </div>
                <h3>Geography</h3>
                <div className='distt-subpage-desc'>
                    <div className='br'>
                        Binsar lies on top of a mountain in the lower Himalayas, about 30 km north of Almora town in Uttarakhand. The sanctuary spreads over 45.59 km2. Its altitude varies from 900 to 2500 metres with an average height of 2412 metres. The temperature of this area is about 20 °C. A series of ridges and gorges make up the sanctuary.
                    </div>
                    <div className='br'>
                        From Zero Point, also known as Jhandi Dhaar, which is the highest point in the sanctuary, the Himalayan peaks of Kedarnath, Chaukhamba, Shivling, Trisul, Nanda Devi, Nanda Kot and Panchachuli are visible among many others.
                    </div>
                </div>
                <h3>Flora and fauna</h3>
                <div className='distt-subpage-desc'>
                    <div className='br'>
                        Binsar has a museum about the flora and fauna of the region. The sanctuary hosts 25 types of trees, 24 types of bushes and 7 varieties of grasses. The higher altitudes are covered with oak and rhododendron trees. In March and April, flowers, especially ruby red rhododendron, are in full bloom.
                    </div>
                    <div className='br'>
                        Mammals include leopard (Panthera pardus), Himalayan goral (Naemorhedus goral), chital (Axis axis), musk deer (Moschus spp.), Sumatran serow (Capricornis sumatraensis), jungle cat (Felis chaus), wild boar (Sus scrofa), pine marten (Martes martes), red fox (Vulpes vulpes), gray langur (Presbytis entellus), rhesus macaque (Macaca mulatta), red giant flying squirrel (Petaurista petaurista), and Indian muntjac (Muntiacus muntjak). In the past black bear (Ursus thibetanus) had been recorded.
                    </div>
                    <div className='br'>
                        Binsar hosts over 200 species of birds including tits, forktail, nuthatches, blackbirds, parakeets, laughingthrush, magpies, kalij pheasant (Lophura leucomelana), monal, koklass pheasant, eagles, woodpeckers, and Eurasian jays. Binsar is home to many reptiles and butterflies.
                    </div>
                </div>
            </div>
        </div>
    )
}
