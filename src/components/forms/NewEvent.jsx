import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Header from '../header/Header';

const NewEvent= () => {

    const {newEvent,setNewEvent } = useState();

    async function handleSubmit(event){
        event.preventDefault();

        try {
            let addNewEvent = {...newEvent}
            
            const addNewEventURL = `${process.env.API_URL}` + '/token/login';
            console.log(addNewEvent)
            let res = await axios.post(addNewEventURL, addNewEvent)
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


    function handleChange(event){
        event.preventDefault();

        setNewEvent({ ...newEvent, [event.target.name]: event.target.value })
    } 

  return (
    <div className='NewEvent'>
        <Header/>
        <div className='copy'>
            <h2>Request to Add an Event</h2>
        </div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label >Title</Form.Label>
            <Form.Control onChange={handleChange} name='summary' required type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label >Location</Form.Label>
            <Form.Control onChange={handleChange} name='location' required type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label >Description</Form.Label>
            <Form.Control onChange={handleChange} name='description' required type="text" as="textarea" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label >Start Date</Form.Label>
            <Form.Control onChange={handleChange} name='Start Date' required type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label >Start Time</Form.Label>
            <Form.Control onChange={handleChange} name='Start Time' required type="time" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label >End Date</Form.Label>
            <Form.Control onChange={handleChange} name='End Date' required type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label >End Time</Form.Label>
            <Form.Control onChange={handleChange} name='End Time' required type="time" />
            </Form.Group>
      <Button className="form-button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default NewEvent
