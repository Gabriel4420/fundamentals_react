import React from 'react';
import './card.css'
export default props =>
<div className="Card">
    <div className="Content">
      {props.children}
    </div>
    <div className="Footer">
      {props.title}
    </div>

</div>