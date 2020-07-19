import React from 'react';
import IF from './If';
export default props =>{
  return (
          <div>
            <h2 style={{color:props.color}} >O numero é {props.number}</h2>
            <IF test={props.number % 2 === 0}>   
            <span style={{color:props.color}}>Par</span>
            </IF> 
            <IF test={props.number % 2 !== 0}> 
            <span style={{color:props.color}}>Impar</span>
            </IF>
          </div>
  )
}