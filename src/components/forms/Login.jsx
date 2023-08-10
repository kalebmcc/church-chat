import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';
// import { useNavigate } from '../../../node_modules/react-router-dom';
// import { useNavigate, useContext, useState} from 'react'

export const Login = () => {
    //====================================
    // SETUP REDIRECT
    //====================================
    // let history = useNavigate();

    //====================================
    // SET STATE/OR PULL CONTEXT
    //====================================
    const {loginStatus, setLoginStatus} = useContext(DataContext);
    const {logUser,setLogUser } = useContext(DataContext);

    async function handleSubmit(event){
        event.preventDefault();

        try {
            let addUser = {...logUser}
            
            const addUserURL = `${process.env.API_URL}` + '/token/login';
            console.log(addUser)
            let res = await axios.post(addUserURL, addUser)
            if(res){
                setLoginStatus(true);
                console.log(res)
                localStorage.setItem('token', res.data.auth_token);
                localStorage.setItem('loginStatus', loginStatus);
                // M.toast({html:'Signed In!'})
                getUser()
                
                
            }
        } catch (error) {
            // M.toast({html: 'Unexpected Error! Try Again!'})
            console.log(error)
        }
    }


    async function getUser(){
        try {
            const getUsers = `${process.env.API_URL}` + '/users/me';
            let users = await axios.get(getUsers,{headers: {
						Authorization: `token ${localStorage.getItem('token')}`,
					}})
                console.log(users)
                localStorage.setItem('user', users.data.username);
                // history.push('/')
        } catch (error) {
            console.log(error)
        }

                
    }

    function handleChange(event){
        event.preventDefault();

        setLogUser({ ...logUser, [event.target.name]: event.target.value })
    } 

  return (
    <div className='Login'>
      <div className='logo'>
        <img src="https://cotwstl.org/wp-content/uploads/2020/03/church-of-the-word-logo.png"/>
      </div>
        <Form onSubmit={handleSubmit}>
      <Form.Group name="email" className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group name="password" className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" placeholder="Password" />
      </Form.Group>
      <Button className="form-button" variant="primary" type="submit">
        LOGIN
      </Button>
      <Link to="/register">
        <Button className="form-button" variant="outline-primary">REGISTER</Button>
      </Link>
    </Form>
    </div>
  )
}
