import React from 'react';
import Child from './Children';
export default props => 
    <div style={{color:props.color}}>
        <Child {...props}>João</Child>
        
        <Child surname={props.surname}>Maria</Child>
        
        <Child surname="Silva">Pedro</Child>
    </div>