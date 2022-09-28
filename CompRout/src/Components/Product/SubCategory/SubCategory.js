import React from 'react'
import { useParams } from 'react-router-dom'; 
import ProductJSON from '../Product.json'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function SubCategory() {
  let {name} = useParams();
  // console.log("collected in subcat: ",name)
  let sub_product = ProductJSON.product.find((data)=>data.prod_name === name)
  // console.log("sub Product: ", sub_product)
  return (
    <>
    <h1>Product name: {sub_product.prod_name}</h1>
    <Container>
    <Row xs={1} md={2} className="g-4">
    {sub_product.sub_prod.map(p=>(
        <Col key={p.s_id}>
          <Card>
            <Card.Img variant="top" src={p.s_img} />
            <Card.Body>
              <Card.Title>{p.company}</Card.Title>
             <Link to={`/details/${name}/${p.company}`}>
             <Button variant="success">Details</Button>
             </Link>
            </Card.Body>
  
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </>
  )
}
