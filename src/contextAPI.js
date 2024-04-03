 /* eslint-disable */ 

import React, { createContext, useState } from 'react';
import { dataProducts } from './appData';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(dataProducts);
  const [detailProduct, setDetailProduct] = useState(dataProducts);
  const [cart,setCart] = useState([]);
  const [cartSubTotal,setcartSubTotal]=useState(0);

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  }

  const makeTotal = () => {
    let subtotal = 0;
    cart.forEach((item) => {
        subtotal =subtotal+item.total;
    });
    setcartSubTotal(subtotal);
    }

  const addToCart = (id) => {
    let temp = [...products];
    const index = temp.indexOf(getItem(id));
    const product = temp[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    setProducts(temp);
    setCart([...cart, product]);
    makeTotal();
  };

  

  const increment = (id) => {
    let temp=[...cart];
    const selectedProduct = temp.find(item=>item.id===id);
    const index=temp.indexOf(selectedProduct);
    const product=temp[index];
    product.count=product.count+1;
    product.total=product.count*product.price;
    setCart([...temp])
    makeTotal();
  }

  const decrement = (id) => {
    let temp=[...cart];
    const selectedProduct = temp.find(item=>item.id===id);
    const index=temp.indexOf(selectedProduct);
    const product=temp[index];
    product.count=product.count-1;
    product.total=product.count*product.price;
    setCart([...temp])
    makeTotal();
  }

  const removeItem = (id) => {
    let tempproduct = [...products];
    let temp = [...cart];
    temp = temp.filter(item => item.id !== id);
    const index = tempproduct.indexOf(getItem(id));
    let removeproduct = tempproduct[index];
    removeproduct.inCart = false;
    removeproduct.total = 0;
    removeproduct.count = 0;

    setProducts([...tempproduct]);
    setCart([...temp]);
    makeTotal();
  };


  

  return (
    <ProductContext.Provider value={{ products, detailProduct , cart, getItem, addToCart, increment, decrement, makeTotal, cartSubTotal ,removeItem}}>
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
