import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './Reg.css'
import { useState } from 'react';
import Axios from 'axios'

export default function Reg() {

    const [inputState,setInputState] = useState({errorMsg:{FirstName:'',LastName:'',email:'',password:'',contact:''}})

    const validName = RegExp('^[A-Z]{1}[A-Za-z]{1,29}$')
    const validEmail= RegExp('^([a-z0-9])+@([a-z]+.)+[a-z]{2,4}$')
    const validPass = RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,15}$')
    const validContact = RegExp('^[6-9]{1}[0-9]{9}$')

    const handleChange=(event)=>{ 
        event.persist();
    //   console.log("Event: ",even
      //console.log("name: ",event.target.name,event.target.value)
      const {name,value} = event.target
      const error = {...inputState.errorMsg}
      // console.log("errror",error)7
      switch(name)
      {
        case 'FirstName': error.FirstName=validName.test(value)?"" :"* contains only character,should start with Capital letter,must be more than 2 characters"
          // error.FirstName=value.length<3?"Must be more than 3 characters":""
                         break;
        case  'LastName': error.LastName=validName.test(value)?"" :"* contains only character,should start with Capital letter,must be more than 2 characters"
                         break;
        case 'email': error.email=validEmail.test(value)?"" : "* contains small characters,contains @ sign character"
                         break;
        case "password":error.password=validPass.test(value)?"" : "* contains minimum 8 character,should contain special character,numbers,capital letters"
                           break;
        case "contact":error.contact=validContact.test(value)?"" : "* contains minimum 10 digits starts with 6-9"
                         break;
        default:break;
      }
      setInputState({...inputState,[name]:value,errorMsg:error})
      console.log("Error: ",inputState.errorMsg)
    }
    const handle_submit=(event)=>{
        event.preventDefault();
        console.log("submitted value: ",inputState)
        let user={
          first_name: inputState.FirstName,
          last_name: inputState.LastName,
          email:inputState.email,
          password:inputState.password,   
          phone:inputState.contact

        }
        Axios.post('https://prod-crud.herokuapp.com/register',user)
        .then((res)=>{
          alert("Data submitted successfully");
          console.log("Axios res:",res)
        })
        .catch((err)=>{
          console.log("Axios err: ",err)
        })
    }
  return (
    <>
    <Container style={{width:"30rem"}}>
     <Form style={{ margin:"auto"}} onSubmit={handle_submit}>
     <Form.Group className="mb-3" >
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="FirstName" name="FirstName" onChange={handleChange}/>
      {inputState.errorMsg.FirstName.length>0 ?<span className='errorMsg'>{inputState.errorMsg.FirstName}</span>:''}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="LastName" name="LastName" onChange={handleChange} />
      {inputState.errorMsg.LastName.length>0 ?<span className='errorMsg'>{inputState.errorMsg.LastName}</span>:''}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
        {inputState.errorMsg.email.length>0 ?<span className='errorMsg'>{inputState.errorMsg.email}</span>:''}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
        {inputState.errorMsg.password.length>0 ?<span className='errorMsg'>{inputState.errorMsg.password}</span>:''}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" placeholder="Contact" name="contact" onChange={handleChange}/>
        {inputState.errorMsg.contact.length>0 ?<span className='errorMsg'>{inputState.errorMsg.contact}</span>:''}
      </Form.Group>
    
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}
