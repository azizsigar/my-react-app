import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SingleProduct() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getRandomProduct();
  }, []);

  const getRandomProduct = () => {
    axios.get('https://azizsigar.github.io/api/api.json')
      .then((res) => {
        const randomIndex = Math.floor(Math.random() * res.data.length);
        const randomProduct = res.data[randomIndex];
        setProduct(randomProduct);
      })
      .catch((error) => {
        console.error('API error', error);
      });
  };

  return (
    <div>
      <h1>Ürün Detayı</h1>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Fiyat: {product.price} TL</p>
        </div>
      ) : (
        <p>loading</p>
      )}
      <div>
        <button onClick={getRandomProduct}>Rasgele Ürün Getir</button>
      </div>
    </div>
  );
}

export default SingleProduct;
