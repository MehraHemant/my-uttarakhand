import React, { useEffect, useState } from 'react'
import WeatherDatails from './WeatherDatails';

export default function Key(props) {
    const [cityKey, setCityKey] = useState('');

    useEffect(() => {
        let url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=q8NIvGdHghXT5YOOm5mAF4uTlZEGsKce&q=${props.cityName}`
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCityKey((data[0].Key));
            console.log((data[0].Key))
        })
        .catch(err => console.log(err))
    })
    
  return (
    <>
    <WeatherDatails />
    </>
  )
}

// Key.defaultProps = {
//  key: {key}
// }

