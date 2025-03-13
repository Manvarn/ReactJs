

import { useLocation, useParams } from "react-router-dom";

export const ProductsDetail = () => {
  const location = useLocation();
  const { GetProducts } = location.state || {};
  const { productID } = useParams(); 

 
  if (!GetProducts) {
    return <div>No product found.</div>;
  }

  return (
    <div>
      <h1>Product Details for ID: {productID}</h1>
      <h2>{GetProducts.title}</h2>
      <img src={GetProducts.image} alt={GetProducts.title} width="200" />
      <p>Price: ${GetProducts.price}</p>
      <p>{GetProducts.description}</p>
    </div>
  );
};
