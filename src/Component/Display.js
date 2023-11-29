import React from 'react'
import DisplayEvent from './DisplayEvent'


export default function Display(props) {

   

  return (
    <div>
      {props.event.map((e,index) => (
        <DisplayEvent key={e.id} items={e} index={index} delete={props.delete} />
   
      ))}
    
     
    </div>
  )
}
