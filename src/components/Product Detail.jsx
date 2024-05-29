import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-page">
      <img src={product.Image} alt={product.Name} />
      <div className="info">
        <h3>{product.Name}</h3>
        <p>Rating: {product.Brand}</p>
        <p>Price: ${product.Price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
