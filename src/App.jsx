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
  
  <Card title="#05 Condicional v2">
      <Conditional2 number={10}/>
  </Card>
  <Card title="#04 Condicional v1">
      <Conditional number={11}/>
  </Card>
  <Card title="#04 Loop">
      <Loop/>
  </Card>
  <Card title="#03 Componentes com parametros">
    <WP  title="Titulo" subtitle="Subtitulo"/>
    <WP  title="Ooopa" subtitle="Epaaaaaaa"/>
  </Card>
  <Card title="#02 Componentes com filhos">
      <WC>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </WC>
  </Card>
  <Card title="#01 Primeiro Componente">
      <First/>
  </Card>
  </div>