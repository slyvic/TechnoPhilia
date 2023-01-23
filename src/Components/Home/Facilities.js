import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';
import './Facilities.css'

const Facilities = () => {
  var data
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const location = useRef()
  const [url, setUrl] = useState()

  useEffect(async () => {

    navigator?.geolocation?.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    });

    data = await axios.get(`https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${lat}&lon=${lon}&zoom=10`, {
      headers: {
        'x-rapidapi-host': 'forward-reverse-geocoding.p.rapidapi.com',
        'x-rapidapi-key': '7449b52200msh1221ff45cc1eb7ap10d0c2jsn7f19c18f3385',
        'Access-Control-Allow-Origin': '*'
      }
    })

    setUrl(`https://maps.google.com/maps/embed/v1/place?q=${data.data.display_name || 'Kolkata'}&key=AIzaSyB933ANy5iPjo3MpN9zNYztWeVcqy2KIY8&zoom=15`)


  }, [lat, lon])

  const changeHandler = () => {
    setUrl(`https://maps.google.com/maps/embed/v1/search?q=${location?.current?.value || data.data.display_name}&key=AIzaSyB933ANy5iPjo3MpN9zNYztWeVcqy2KIY8&zoom=15`)
  }

  return <>
    <header className="header">

      <Link to='/' className="logo"><span>H</span>ealth<span>V</span>ault</Link>

      <form className="search-form">
        <input type="search" onChange={changeHandler} ref={location} placeholder="Search For Nearby Healthcare Facilities..." id="search-box" />
      </form>

    </header>
    <h1 className='text-centered'>Nearby HealthCare Facilities</h1>
    <div id='map'>
      <iframe title='map' src={url} loading='lazy'></iframe>
    </div>

  </>;
};

export default Facilities;
