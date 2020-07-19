import React from 'react';
import products from '../../data/products'
export default  props => {

  function getProductsListItem(){
    return products.map(prod => {
      return <li key={prod.id}>
          {prod.id}-{prod.nome} - R${prod.preco} 
      </li>
    })
  }

  return (
    <div>
        <h2>Loop of products</h2>
        <ul>
          {getProductsListItem()}
        </ul>
    </div>
  )
}