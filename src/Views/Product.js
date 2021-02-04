import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Product() {
  // Using mockapi from https://mockapi.io/
  const { id } = useParams();
  const url = `https://601bc3d81a9c22001705f9c3.mockapi.io/products/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  // Very basic error handling due to poor error handling in the mockapi.io
  if (product.error) {
    content = <p>There was an error, please refresh or try again later.</p>;
  }

  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className='text-2xl font-bold mb-3'>{product.data.name}</h1>
        <div>
          <img
            className='object-scale-down w-full items-center'
            src={product.data.image}
            alt={product.data.name}
          />
        </div>
        <div className='font-bold text-xl mb-3'>$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
