import React from 'react';



export default (props) =>{
      function acao(){
        props.onClicar(Math.random(), 'ID ')
      }
    return (
      <div>
        <button onClick={acao}>Alterar</button>
      </div>
    )


}