import React from 'react';
import MaskImg from '../assets/News_mask.jpg';
import TShirtImg from '../assets/tshirt.jpg';
import MugN from '../assets/news_cup.jpg';
import NoteB from '../assets/news_note.jpg';

import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);

// Those are the items to be selled expported to shop page.
// To create more items go to your dashboard
export const Mask = () => {
  const handleSubit = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `${process.env.REACT_APP_PRODUCT_PRICE_ID}`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
      }    
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <>
    <div className="card m-3" style={{ width: '260px' }}>
      <img className="card-img-top" src={MaskImg} alt="Card Mask" style={{ height: '220px' }}/>
      <div className="card-body">
        <h5 className="card-title">Mask</h5>
        <p className="card-text">Freecommerce News cotton madk featuring our logo.</p>
        <p>10.00€</p>
        <button className='btn btn-primary btn-block' role="link" onClick={handleSubit}>
          Buy Now
        </button>
      </div>
    </div>
    </>
  );
}

export const TShirt = () => {
  const handleSubit = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `${process.env.REACT_APP_PRODUCT_PRICE_ID2}`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
      }    
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <>
    <div className="card m-3" style={{ width: '260px' }}>
      <img className="card-img-top" src={TShirtImg} alt="Card T-Shirt" style={{ height: '220px' }}/>
      <div className="card-body">
        <h5 className="card-title">T-Shirt</h5>
        <p className="card-text">Freecommerce News cotton T-Shirt featuring our logo.</p>
        <p>20.00€</p>
        <button className='btn btn-primary btn-block' role="link" onClick={handleSubit}>
          Buy Now
        </button>
      </div>
    </div>
    </>
  );
}

export const Mug = () => {
  const handleSubit = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `${process.env.REACT_APP_PRODUCT_PRICE_ID3}`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
      }    
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <>
    <div className="card m-3" style={{ width: '260px' }}>
      <img className="card-img-top" src={MugN} alt="Card Mug" style={{ height: '220px' }}/>
      <div className="card-body">
        <h5 className="card-title">Mug</h5>
        <p className="card-text">Freecommerce News ceramic mug featuring our logo.</p>
        <p>15.00€</p>
        <button className='btn btn-primary btn-block' role="link" onClick={handleSubit}>
          Buy Now
        </button>
      </div>
    </div>
    </>
  );
}

export const NotBook = () => {
  const handleSubit = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `${process.env.REACT_APP_PRODUCT_PRICE_ID4}`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
      }    
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <>
    <div className="card m-3" style={{ width: '260px' }}>
      <img className="card-img-top" src={NoteB} alt="Card NoteBook" style={{ height: '220px' }}/>
      <div className="card-body">
        <h5 className="card-title">Note Book</h5>
        <p className="card-text">Freecommerce News 300 page note book featuring our logo.</p>
        <p>10.00€</p>
        <button className='btn btn-primary btn-block' role="link" onClick={handleSubit}>
          Buy Now
        </button>
      </div>
    </div>
    </>
  );
}

