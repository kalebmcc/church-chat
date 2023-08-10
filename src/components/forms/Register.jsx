import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from '../../../node_modules/react-router-dom';

const Register = () => {


  //====================================
  // SETUP REDIRECT
  //====================================
  // let history = useNavigate();


    const [newUser, setNewUser] = useState({
      'email': '',
      'password': '',
      'first': '',
      'last': '',
      'dob': '',
      'notification': false,
      'terms': false
    });

    async function handleSubmit(event){
      event.preventDefault();

      try {
          let addUser = {...newUser}
          console.log(addUser)
          const addUserURL = `${process.env.API_URL}` + `users/`
          console.log(addUserURL)
          let res = await axios.post(addUserURL, addUser)
          if(res){
              console.log('Successfully Registered!');
          }
        } catch (error) {
            console.log(error)
            console.log('Unexpected Error! Try Again!');
        }
  }

  function handleChange(event){
      event.preventDefault();

      console.log(event);

      setNewUser({ ...newUser, [event.target.name]: event.target.value })
  } 

  function handleCheck(event){
    event.preventDefault();

    console.log(event);

    setNewUser({ ...newUser, [event.target.name]: event.target.checked })
  } 


  return (
    <div className='Register'>
    <div className='logo'>
      <img src="https://cotwstl.org/wp-content/uploads/2020/03/church-of-the-word-logo.png"/>
    </div>
      <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control onChange={handleChange} name='email' type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>First Name</Form.Label>
      <Form.Control onChange={handleChange} name='first' type="text" placeholder="Enter First Name" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label >Last Name</Form.Label>
      <Form.Control onChange={handleChange} name='last' required type="text" placeholder="Enter Last Name" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label >Date of Birth</Form.Label>
      <Form.Control onChange={handleChange} name='dob' required type="date" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={handleChange} name='password' required type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check onChange={handleCheck}  name="notification" type="checkbox" label="I would like to recieve emails from Church Chat to stay up-to-date on announcemnts, events, and chat notifications." />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check onChange={handleCheck}  name="terms" type="checkbox" label="I understand that this is an application created and maintained by Church of the Word, and all interactions are visible to admins and elders." />
    </Form.Group>
      <Button className="form-button" variant="primary" type="submit">
        REGISTER
      </Button>
  </Form>
  </div>
  )
}

export default Register