import React from 'react'
import { useParams } from 'react-router-dom'
import TopicJSON from '../Topic.json'
import Card from 'react-bootstrap/Card';


export default function TopicDetails() {
  let {name, sub_name} = useParams();
  // console.log("name: ",name, "sub_name: ",sub_name)  

  let sub_topics = TopicJSON.Topics.find((data)=> data.topic_name === name)
  // console.log("sub_topics: ",sub_topics)

  let single_topic = sub_topics.sub_topic.find((data)=> data.sub_name === sub_name)
  // console.log("required_topic: ",single_topic)

  return (
    <>
      <Card style={{ width: '18rem', margin: "auto"  }}>
      <Card.Body>
        <Card.Title>{single_topic.sub_name}</Card.Title>
        <Card.Img variant="top" src={single_topic.sub_image_2} />
        <Card.Text>
               {single_topic.sub_description}
              </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
