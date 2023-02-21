import React, { useEffect, useState } from 'react';


export default function Weather(props) {
    const [details, setDetails] = useState([])
    const [cityKey, setCityKey] = useState(null)
    // const [name, setName] = useState('')

    const fetchCity = async () => {
        let url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=q8NIvGdHghXT5YOOm5mAF4uTlZEGsKce&q=${props.place}`
        const data = await fetch(url);
        const parseData = await data.json();
        setCityKey(parseData[0].Key);
        console.log(parseData[0].Key);
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
            <ul className='weather'>
            {details.map((element) => {
            return <div key={element.EpochDate}>
                <li>Temp: {parseFloat((element.Temperature.Minimum.Value -32)/1.8).toFixed(2)}&deg;C, {parseFloat((element.Temperature.Maximum.Value -32)/1.8).toFixed(2)}&deg;C</li>
            </div>
            })}
            </ul>
        </div>
    )
}
