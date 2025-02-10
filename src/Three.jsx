import React, {useState} from 'react'

export default function Three() {

const[input, setInput]=useState(" ");

const userInput=(event)=>{
  setInput(event.target.value);
}



  return (
    <div>
     <input type="text" value={input} onChange={userInput}/>
     <p>User input: {input}</p>
    </div>
  )
}
