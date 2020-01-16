import React from 'react';

const Mount = (mounts) => {
  console.log('sanity check - what is passed to component:', mounts);
  let listItems = mounts.map((mount)=>{
    return <li 
      key={mount.toString()}
    >
    {mount.Name}
    </li>
  })

  return (
    {listItems}
  )
}

export default Mount;
