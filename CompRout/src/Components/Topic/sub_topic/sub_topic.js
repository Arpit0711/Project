import React from 'react'
import { useParams } from 'react-router-dom'
import TopicJSON from '../Topic.json'  
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './sub_topic.css'

export default function SubTopic() {
  let {name} = useParams()
  // console.log("collected  ",name)
  let sub_topics = TopicJSON.Topics.find((data)=> data.topic_name === name)
  // console.log("sub_topic ",sub_topics)
  return (
    <>
      <h3>Topic name: {sub_topics.topic_name}</h3>
      <Row xs={1} md={2} className="g-4">
      {sub_topics.sub_topic.map(s=>(
        <Col key={s.sub_topic_id}>
          <Card className="subTopic_card">
            <Card.Img variant="top" src={s.sub_image_1} />
            <Card.Body>
              <Card.Title>{s.sub_name}</Card.Title>
              <Link to={`/topicDetails/${name}/${s.sub_name}`}>
             <Button variant="success">Details</Button>
             </Link>
         </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   </>
  ) 
}
