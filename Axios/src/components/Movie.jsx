import axios from "axios";
import { useEffect, useState } from "react";

const Movie = () => {
  const [product, setProduct] = useState([]);

  const API = "https://fakestoreapi.com/products";

  // const getMovieData = async () => {
  //   try {
  //     const res = await axios.get(API);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getMovieData = () => {
  //   axios
  //     .get(API)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    // getMovieData();
    axios
      .get(API)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul>
      {product.map((curElem) => (
        <li key={curElem.id}>
          <h3>{curElem.title}</h3>
          <p>${curElem.price}</p>
        </li>
      ))}
    </ul>
  );
};
export default Movie;

// GET: Retrieves data from the server.
// POST: Sends data to the server to create new resources.
// PUT: Updates or replaces an existing resource.
// DELETE: Deletes an existing resource.
