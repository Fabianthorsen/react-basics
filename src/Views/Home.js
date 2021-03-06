/*
 * Home Page
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home() {
  const url = `https://601bc3d81a9c22001705f9c3.mockapi.io/products?page=1&limit=10`;

  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = <p>There was an error, please refresh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product, index) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className='font-bold text-2xl mb-3'>Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
