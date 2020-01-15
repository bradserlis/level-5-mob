import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [characters, setCharacter] = useState([]);

  const retrieveCharacter = (name) => {
    axios.get(`https://xivapi.com/character/search?name=${name.target.value}&server=cactuar`)
    .then((res)=>{
      console.log(res.data)
      setCharacter(...characters, res.data.Results[0]);
    })
  }

  return (
      <div>
        <h1> 
          Home Page
        </h1>
        <button
        onClick={retrieveCharacter}
        value='Athrun+Lhant'
        type='button'>
        Retrieve Athrun
        </button>
        {characters.Avatar ? 
          <div>
            <h3>
              {characters.Name}
            </h3>
            <h4>
              {characters.Server}
            </h4>
            <img src={`${characters.Avatar}`} />
           </div> : null
        }
      </div>
    )
}

export default Home;
