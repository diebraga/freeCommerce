import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';

import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);

// Those are the items to be selled expported to shop page.
// To create more items go to your dashboard
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/`);
        setProducts(res.data);
    }
    catch (err) {
      alert('Error connection!')
    }
  }

    fetchProduct();
  }, []);

  const getProducts = () => {
    let list = [];
    let result = [];

  products.map(Product => {
    const handleSubit = async (event) => {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: `${Product.price_id}`, // Replace with the ID of your price
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: `${process.env.REACT_APP_API_URL}/success`,
        cancelUrl: `${process.env.REACT_APP_API_URL}/cancel`,
        billingAddressCollection: 'required',
        shippingAddressCollection: {
          allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
        }    
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
    };
  
    return list.push(
      <Fade duration={1200}>
        <div className="card m-3" style={{ width: '260px' }}>
          <img className="card-img-top" src={Product.image_source} alt="Product" style={{ height: '220px' }}/>
          <div className="card-body">
            <h5 className="card-title">{Product.title}</h5>
            <p className="card-text">{Product.descrption}</p>
            <button className='btn btn-primary btn-block' role="link" onClick={handleSubit}>
            {Product.price}€
            </button>
          </div>
        </div>
      </Fade>
    );
  });

  for (let i = 0; i < list.length; i += 2) {
    result.push(
      <div className=''>
        <div key={i} className='d-flex align-content-around flex-wrap'>
          <div>
            {list[i]}
          </div>
          <div>
            {list[i+1] ? list[i+1] : null}
          </div>
        </div>
      </div>
    );
  }

  return result;
};



  return (
    <>
    {getProducts()}
    </>
  );
}

export default Products;

