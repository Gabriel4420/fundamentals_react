import React from 'react';
import IF from './If';
export default props =>{
  return (
          <div>
            <h2>O numero é {props.number}</h2>
            <IF test={props.number % 2 === 0}>   
            <span>Par</span>
            </IF> 
            <IF test={props.number % 2 !== 0}> 
            <span>Impar</span>
            </IF>
          </div>
  )
}