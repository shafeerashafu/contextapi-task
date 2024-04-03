 /* eslint-disable */ 

import React from 'react';
import { ProductConsumer } from '../contextAPI';
import Product from './Product'

const Productlist = () => {
  return (
    <div className='container'>
        <div>
            <h1>Choose the product that you need!</h1>
        </div>
        <div className='row'>
            <ProductConsumer>
                {(value)=>{
                    return value.products.map(product => {
                        return <Product key={product.id} product={product} />
                    })
                }}
            </ProductConsumer>

        </div>
    </div>
  )
}

export default Productlist