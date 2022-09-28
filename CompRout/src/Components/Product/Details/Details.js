import React from 'react'
import { useParams } from 'react-router-dom'
import ProductJSON from "../Product.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Details() {
    let {name,comp} =useParams()
    // console.log("Prod name: ",name,"company: ",comp);

    let sub_product = ProductJSON.product.find((data)=>data.prod_name === name)
  // console.log("sub Product: ", sub_product)

  let single_product = sub_product.sub_prod.find((data)=>data.company === comp)
  // console.log("Required product: ",single_product)

  return (
    <>
 <Card style={{ width: '18rem', margin: "auto"  }}>
  
      <Card.Body>
        <Card.Title>{single_product.price}</Card.Title>
        <Card.Img variant="top" src={single_product.s_img} />
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </>
  )
}
