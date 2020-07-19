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
import Father from './components/Comunication/Rightly/Father';
import Super from './components/Comunication/Indirect/Super';
import Input from './components/Form/input';
import Counter from './components/Counter/Counter';

export default (props) =>

<div className="App">
  <h1>Fundamentos React</h1>
  <div className="Cards">
    
  <Card title="#09 Contador " color="#293E6A">
      <Counter passo={10} valor={100} color="#293E6A"/>
  </Card>
  <Card title="#08 Input " color="#ab1">
      <Input color="#ab1"/>
  </Card>
  <Card title="#07 Comunicação Indireta " color="#524f4f">
      <Super color="#524f4f"></Super>
  </Card>
  <Card title="#06 Comunicação Direta " color="#03999c">
      <Father surname="Freitas" color="#03999c"></Father>
  </Card>
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
  </div>