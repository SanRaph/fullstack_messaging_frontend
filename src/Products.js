import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';

import './Products.css';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // For loading indicator
  const [error, setError] = useState(null);     // For error handling

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-page">
      <h5>Products</h5>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} width="100" />
            <small>{product.title}</small>
            <p>&#8358;{product.price}</p>
            <Button>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;