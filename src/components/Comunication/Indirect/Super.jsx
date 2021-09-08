import React, {useState} from 'react';
import Sub from './Sub';


export default (props) =>{




    const [state,setState] = useState(0);
    const [label,setLabel] = useState("Iniciar ");

    function quandoClicar(valorGerado, Texto){
      setState(valorGerado);
      setLabel(Texto)
      /* console.log('ação');
      console.log('id:',valorGerado);
      console.log(Texto); */
    }
    return (
        <div>
            <h4>{label}: {state}</h4>
            <Sub onClicar={quandoClicar} />
        </div>
    )
}