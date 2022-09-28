import React from 'react'
import TopicJSON from '../Topic.json'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'
import './Different_topic.css'

export default function Different_topic() {
  return (
    <div>
        <h3>Different Topics</h3>
         <Row xs={1} md={2} className="g-1">
         {TopicJSON.Topics.map((top)=>(
        <Col>
         <Link to={`/sub_topic/${top.topic_name}`}>
          <Card className="Diffrent_topic-card">
            <Card.Body>
              <Card.Title>{top.topic_name}</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </div>
  )
}
