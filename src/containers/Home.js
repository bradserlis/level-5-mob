import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {

  const [characters, setCharacter] = useState([]);
  const [mountList, setMountList] = useState([]);

  // const retrieveCharacter = (name) => {
  //   axios.get(`https://xivapi.com/character/search?name=${name.target.value}&server=cactuar`)
  //   .then((res)=>{
  //     console.log(res.data)
  //     setCharacter(...characters, res.data.Results[0]);
  //   })
  // }

  const retrieveCharacterDetails = (id) => {
    axios.get(`https://xivapi.com/character/${id.target.value}?data=MIMO`)
    .then((res)=>{
      console.log(res.data);
      setCharacter(...characters, res.data);
      let mappedMountList = res.data.Mounts.map((mount)=>{
        return (
          <li
          key={mount.Name.toString()}
          >
            {mount.Name}
          </li>
        ) 
      })
      setMountList(...mountList, mappedMountList);
    })
  }

  return (
      <div>
        <h1> 
          Home Page
        </h1>
        <button
        onClick={retrieveCharacterDetails}
        value='5934232'
        >
        Retrieve Athrun
        </button>
        <button
        onClick={retrieveCharacterDetails}
        value='20740039'
        >
        Retrieve Shinocoulo
        </button>
        {characters.Character ? 
          <div>
            <h3>
              {characters.Character.Name}
            </h3>
            <h4>
              {characters.Character.Server}
            </h4>
            <img 
            src={`${characters.Character.Portrait}`}
            alt=''
            style={{ width:250, height:300 }} 
            />
            <h2> Mount List </h2>
            <ul>
            { mountList }
            </ul>
          </div> : null
        }
      </div>
    )
}

        // <button
        // onClick={retrieveCharacter}
        // value='Athrun+Lhant'
        // type='button'>
        // Retrieve Athrun
        // </button>

export default Home;

            // <ul>
            //   {characters.Mounts.forEach((mount)=>{
            //     return(
            //       <Mount mounts={mount} />
            //     )
            //   })}
            // </ul>
