import React from 'react';
// props é somente leitura !!!!!!!!
// props.titulo = "other title"; não pode
export default props => 
    <>
      <h3 style={{color:props.color}}>{props.title}</h3>
      <p>{props.subtitle}</p>
      
    </>