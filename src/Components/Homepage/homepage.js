import { useState } from 'react';
import './homepage.css';
import axios from 'axios'

function Homepage() {

  const [data, setData] =useState({})
  const [location, setLocation] = useState('')

  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bc2e1dbae5ca3f341412e6c58edd8a1a`

  const searchLocation = (event)=>{
    if(event.key == "Enter"){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="homepage">
        <div className='container'>
          
          <div className='textContainer'>
            <p> Questa micro applicazione web permette di vedere il meteo di una posizione specifica scelta tramite l'imput dell'utente, tramite l'utilizzo di un API, va a mostrare il nome della cittá scelta e il tempo corrente </p>
          </div>
          <div className='search'>
              <input 
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyDown={searchLocation}
              placeholder='Enter Location'
              type='text'/>
          </div>
          <div className='appContainer'>
              <div className='apiText'>
                <div className='cityName'>{data.name}</div>
                <div className='tempDg'>{data.main ? <h1>{data.main.temp}</h1> : null}</div>
                <div className='description'> {data.weather ? <h1>{data.weather[0].main}</h1> : null}</div>
              </div>
              
          </div>
        </div>
    </div>
  );
}

export default Homepage;