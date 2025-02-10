import React from 'react'

export default function Four() {

    const items=['item1','item2', 'item3']
    const list= items.map((item, index)=>{
    return<li key={index}>{item}</li>;
})
    
  return (
    <div>
      <ul>
        {list}
      </ul>
      
    </div>
  )
}
