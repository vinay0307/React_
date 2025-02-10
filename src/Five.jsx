import React, {useState} from 'react'

export default function Five() {
const [toggle, setToggle]= useState( false);
const handleToggle=()=>{
    setToggle(!toggle)
}


  return (
    <div>
      <label>
        <input type= "checkbox" onChange={ handleToggle}/>
      </label>
      <p>{toggle ? "On" : "off" }</p>
    </div>
  )
}
