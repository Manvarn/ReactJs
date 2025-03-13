import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="product-heading">Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </Link>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
