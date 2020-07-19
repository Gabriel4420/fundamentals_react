import './App.css'
import React from 'react';
import './index.css';
import First from './components/Basics/First';
import WP from './components/Basics/WithParameters'; 
import WC from './components/Basics/WithChilds'; 
import Card from './components/Layout/Card';
import Loop from './components/Basics/Loop';
import Conditional from './components/Basics/Conditional';
import Conditional2 from './components/Basics/ConditionalWithIF';
export default (props) =>

<div className="App">
  
  <Card title="#05 Condicional v2" color="#FA6900">
      <Conditional2 number={10} color="#FA6900" />
  </Card>
  <Card title="#04 Condicional v1" color="#b01212">
      <Conditional number={11} color="#b01212"/>
  </Card>
  <Card title="#04 Loop" color="#155c1c">
      <Loop color="#155c1c"/>
  </Card>
  <Card title="#03 Componentes com parametros" color="#e0b509">
    <WP  title="Titulo" subtitle="Subtitulo" color="#e0b509"/>
    
  </Card>
  <Card title="#02 Componentes com filhos" color="#ff00e6">
      <WC color="#ff00e6">
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </WC>
  </Card>
  <Card title="#01 Primeiro Componente" color="#3c00ff">
      <First/>
  </Card>
  </div>