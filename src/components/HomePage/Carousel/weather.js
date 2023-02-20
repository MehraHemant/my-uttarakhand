import React, { useEffect, useState } from 'react';


export default function Weather(props) {
    const [details, setDetails] = useState([])
    const [cityKey, setCityKey] = useState(null)
    const [name, setName] = useState('')


    const fetchCity = async () => {
        let url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=q8NIvGdHghXT5YOOm5mAF4uTlZEGsKce&q=${props.city}`
        const data = await fetch(url);
        const parseData = await data.json();
        setCityKey(parseData[0].Key);
        setName(`${parseData[0].LocalizedName}, ${parseData[0].AdministrativeArea.LocalizedName}, ${parseData[0].Country.LocalizedName}`)
    }
    const fetchData = async () => {
        let url = `http://dataservice.accuweather.comcurrentconditions/v1/${cityKey}?apikey=q8NIvGdHghXT5YOOm5mAF4uTlZEGsKce`
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
                {/* <li>Temp: {parseFloat((today.temp -32)/1.8).toFixed(2)}&deg;C</li> */}
                {/* <li>{today.icon}</li> */}
            </ul>
        </div>
    )
}
