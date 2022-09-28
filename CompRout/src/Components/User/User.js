import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function User() {
  const [product, setProduct] = useState([]);
  //useEffect=> componentdidMount + componentDidUpdate
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("Axios res in user: ", res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Axios err in user: ", err);
      });
  }, [setProduct]);
  console.log("product: ", product);
  return (
    <>
      <h1>User</h1>
      {product.map((prod) => (
        <React.Fragment>
          <p>
            Name: {prod.name} userName: {prod.username}
          </p>
          <p>City: {prod.address.city}</p>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
}
