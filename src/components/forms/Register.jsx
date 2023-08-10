import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import { useNavigate } from '../../../node_modules/react-router-dom';

const Register = () => {


  //====================================
  // SETUP REDIRECT
  //====================================
  // let history = useNavigate();


  //   const [newUser, setNewUser] = useState({
	// 	'email': '',
	// 	'password': '',
	// });


  return (
    <div className='Register'>
    <div className='logo'>
      <img src="https://cotwstl.org/wp-content/uploads/2020/03/church-of-the-word-logo.png"/>
    </div>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Last Name</Form.Label>
      <Form.Control required type="text" placeholder="Enter Last Name" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control required type="date" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control required type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Re-type Password</Form.Label>
      <Form.Control required type="password" placeholder="Re-type Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="I would like to recieve emails from Church Chat to stay up-to-date on announcemnts, events, and chat notifications." />
    </Form.Group>
      <Button className="form-button" variant="primary" type="submit">
        REGISTER
      </Button>
  </Form>
  </div>
  )
}

export default Register