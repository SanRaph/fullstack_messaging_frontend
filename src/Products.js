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

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div >
        {products.length > 0 && products.map((product) => (
          
          <section class="product" key={product.id}>
	           <div class="product__photo">
		               <div class="photo-container">
			                <div class="photo-main">
			                 	<div class="controls">
				                	<i class="material-icons">share</i>
				                	<i class="material-icons">favorite_border</i>
			              	</div>
			               <img src={product.image} alt={product.title} />
			            </div>
			   <div class="photo-album">
				<ul>
					<li><img src={product.image} alt="green apple" /></li>
					<li><img src={product.image} alt="half apple" /></li>
					<li><img src={product.image} alt="green apple" /></li>
					<li><img src={product.image} alt="apple top" /></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>{product.title}</h1>
			<span>COD: 45999</span>
		</div>
		<div class="price">&#8358;
			 <span>{product.price}</span>
		</div>
		<div class="variant">
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src={product.image} alt="green apple" /></li>
				<li><img src={product.image} alt="yellow apple" /></li>
				<li><img src={product.image} alt="orange apple" /></li>
				<li><img src={product.image} alt="red apple" /></li>
			</ul>
		</div>
		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>{product.decription}</li>
			</ul>
		</div>
		<button class="buy--btn">ADD TO CART</button>
	</div>
</section>

        ))}
      </div>

  );
}

export default ProductPage;