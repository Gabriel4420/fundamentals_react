import React from 'react';

export default props => 
    <div style={{color:props.color}}>
          
          <h4>{props.children} - {props.surname}</h4>
    </div>