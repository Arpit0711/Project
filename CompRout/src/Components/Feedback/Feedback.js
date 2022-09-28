import React from 'react'
import {useParams} from 'react-router-dom'

export default function Feedback() {
  // let data=useParams();
  // console.log("Data: ",data)
  //  Data: {name: "Webskitters"}

  let {name}= useParams();
  console.log("collected: ",name); //"webskitters"
  return (
    <div>
    {/* <h1>{data.name}</h1> */}
      <h1>{name}</h1>
    </div>
  )
}
