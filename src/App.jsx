import './App.css'
import React from 'react';
import './index.css';
import First from './components/first';
import WP from './components/withParameters'; 
import WC from './components/withChilds'; 
import Card from './components/Layout/Card';
export default (props) =>

<div className="App">
  <Card title="Primeiro Componente">
      <First/>
  </Card>
  <Card title="Componentes com parametros">
    <WP  title="Titulo" subtitle="Subtitulo"/>
    <WP  title="Ooopa" subtitle="Epaaaaaaa"/>
  </Card>
  <Card title="Componentes com filhos">
      <WC>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </WC>
  </Card>
  <Card title="exercise x">
    Content
  </Card>

   {/*    
    */} {/* <First/>
    */}
  </div>