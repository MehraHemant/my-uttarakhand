import React from 'react'
import WeatherDatails from '../Weather/WeatherDatails'
import kasar from './kasarDevi.jpeg'

export default function KasarDevi() {
    return (
        <div className='sub-page almora'>
            <WeatherDatails place='Kasar, Uttarakhand' />
            <div className='distt-subpage'>
                <h2>Kasar Devi Temple</h2>
                <h3>Introduction</h3>
                <div className='distt-subpage-desc'>
                <aside>
                    <img src={kasar} alt='' />
                    <h5>Kasar Devi Temple at Kasar</h5>
                </aside>
                    Kasar Devi is a village near Almora, Uttarakhand. It is known for the Kasar Devi temple, a Devi temple, dedicated to Kasar Devi, after whom the place is also named. The temple structure dates to the 2nd century CE. Swami Vivekananda visited Kasar Devi in 1890s, and numerous western seeker, Sunyata Baba Alfred Sorensen and Lama Anagarika Govinda.<br />
                    It's believed that this temple is positioned on the earth's Van Allen Belt. The region surrounding the Kasar Devi Temple has an enormous geomagnetic field, thanks to gaps in bands of radiation. As a result, Kasar Devi is endowed with a cosmic energy similar to that of Stonehenge in UK and Machu Pichu in Peru.<br />
                    Also known as Hippie Hill or Crank's Ridge, Kasar Devi Temple complex has always been a melting pot of art, spiritualism and poetry. Singer Bob Dylan and actor Uma Thurman, have made this popular and today Kasar Devi continues to attract folks looking for answers to life's challenging questions.<br />
                    The temple hosts the annual "Kasar Devi Fair" on Kartik Poornima &#40;November, December&#41;.
                </div>
                <h3>History</h3>
                <div className='distt-subpage-desc'>
                    Kasar Devi first became known when in the 1890s, Swami Vivekananda visited and meditated here and has mentioned his experience in his diaries.  Walter Evans-Wentz, a pioneer in the study of Tibetan Buddhism, who later translated The Tibetan Book of the Dead, stayed here for some time.<br />
                    Then in the 1930s, Danish mystic Sunyata Baba &#40;Alfred Sorensen&#41; came here and lived here the over three decades, as did Ernst Hoffman, who became Tibetan Buddhist Lama Anagarika Govinda and Li Goutami. This led to a series of spiritual seekers from the west, visiting them. In 1961, Govinda was visited by Beat poets, Allen Ginsberg, Peter Orlovsky and Gary Snyder.[5][6] In later history, at the peak of the Hippie movement, the area also became a part of the Hippie trail. Crank's Ridge, colloquially known as Hippie Hill, which lies ahead of Kasar Devi became a popular destination. It became home to several bohemian artists, writers and western Tibetan Buddhists, and even visited by mystic-saint Anandamayi Ma. The ridge got its name amongst hippy circles, after American psychologist Timothy Leary streaked here in the 1960s. Leary wrote majority of his ‘psychedelic prayers’ here. Thus, through the 1960 and 1970s, the area was visited by personalities of the counter-culture, George Harrison and Cat Stevens, Western Buddhist Robert Thurman, and writer D. H. Lawrence, who spent two summers here.
                </div>
                <h3>Overview and mystery</h3>
                <div className='distt-subpage-desc'>Kasar Devi is situated on a hilltop, on the edge of a ridge off the Almora-Bageshwar highway on the Kaashay hills of Kumaon Himalayas. As it is situated above the ridge of Almora town, it is accessible through eight-km hike from Almora or 10 km by road.  One km away is the village of Kalimath popular with tourists. Also close by is the Binsar Wildlife Sanctuary, which lies 30 km away.</div>
                <div className='distt-subpage-desc note'>It is being developed as a tourist place in Uttarakhand and Uttarakhand government have many plans to develop this place. Presently the work of construction of ropeway from the district headquarter to Kasar Devi is in progress.</div>
            </div>
        </div>
    )
}
