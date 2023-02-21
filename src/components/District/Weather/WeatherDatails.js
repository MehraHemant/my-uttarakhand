import React, { useEffect, useState } from 'react'

export default function WeatherDatails(props) {
    const [details, setDetails] = useState([])
    const [cityKey, setCityKey] = useState(null)
    const [name, setName] = useState('')

    const fetchCity = async () => {
        let url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=q8NIvGdHghXT5YOOm5mAF4uTlZEGsKce&q=${props.place}`
        const data = await fetch(url);
        const parseData = await data.json();
        setCityKey(parseData[0].Key);
        setName(`${parseData[0].LocalizedName}, ${parseData[0].AdministrativeArea.LocalizedName}, ${parseData[0].Country.LocalizedName}`)
    }
    const fetchData = async () => {
        let url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=q8NIvGdHghXT5YOOm5mAF4uTlZEGsKce`
        const data = await fetch(url);
        const parseData = await data.json();
        setDetails(parseData.DailyForecasts);
        console.log(parseData.DailyForecasts);
    }

    useEffect(() => {
        fetchCity()
    }, [])

    useEffect(() => {
        if (cityKey != null) {
            fetchData()
        }
        else {
        }
    }, [cityKey])

    return (

        <div>
            {details.map((element) => {
                return <div key={element.EpochDate}>
                    <div id='weather-details'>
                        <div className='center'>{name}</div>
                        <div className='center'>Temperature</div>
                        <div className='center'>IconPhrase</div>
                        <div className='center'>Today's Lowest: <br/>{parseFloat((element.Temperature.Minimum.Value -32)/1.8).toFixed(2)}&deg;C</div>
                        <div className='center'>Today's Highest: <br/>{parseFloat((element.Temperature.Maximum.Value -32)/1.8).toFixed(2)}&deg;C</div>
                        <div className='center'>Day: <br/>{element.Day.IconPhrase}</div>
                        <div className='center'>Night: <br/>{element.Night.IconPhrase}</div>
                    </div>
                </div>
            })}
        </div>
    )
}
