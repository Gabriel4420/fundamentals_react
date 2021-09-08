import React from 'react';
import './card.css'
export default props =>
<div className="Card" style={{borderColor:props.color || '#c2cd'}}>
    <div className="Content" >
      {props.children}
    </div>
    <div className="Footer" style={{backgroundColor:props.color || '#020202'}}>
      {props.title}
    </div>

</div>