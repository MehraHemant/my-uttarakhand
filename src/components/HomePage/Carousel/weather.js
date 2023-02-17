import React, { useEffect, useState } from 'react'

export default function Weather(props) {
    const [today, setToday] = useState([])
    const fetchData = async () => {
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.place}?key=XKQ37VALCGLS5SPH7QXZVS4LN`
        const data = await fetch(url)
        const parseData = await data.json();
        setToday(parseData.currentConditions)
        // const today = parseData.currentConditions;
        // console.log(today.temp);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <ul className='weather'>
                <li>Temp: {parseFloat((today.temp -32)/1.8).toFixed(2)}&deg;C</li>
                <li>{today.icon}</li>
            </ul>
        </div>
    )
}
