import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetail = () => {
  const { id } = useParams(); //(The useParams hook is used to get information that is present in the URL.)
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h1 className="product-title">{product.title}</h1>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-rating">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </>
      ) : (
        <p>Product details not available.</p>
      )}
    </div>
  );
};

export default ShowDetail;
