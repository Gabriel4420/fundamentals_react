import React from 'react';

export default props =>{
  return (
    <div>
      <h2 style={{color:props.color}}>O numero é {props.number}</h2>
      {props.number % 2 === 0 ?
        <span style={{color:props.color}}>Par</span>
        :
        <span style={{color:props.color}}>Impar</span>
      }
    </div>
  )
}