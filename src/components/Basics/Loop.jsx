import React from 'react';
import products from '../../data/products'
export default  props => {

  function getProductsListItem(){
    return products.map(prod => {
      return <li key={prod.id} style={{color:props.color}}>
          {prod.id}-{prod.nome} - R${prod.preco} 
      </li>
    })
  }

  return (
    <div>
        <h2 style={{color:props.color}}>Loop of products</h2>
        <ul style={{color:props.color}}>
          {getProductsListItem()}
        </ul>
    </div>
  )
}