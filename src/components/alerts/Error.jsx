import React from 'react';
import {dataContext} from 'react';

const Error = () => {
    const [showToast, setToast] = dataContext(false)
  return (
    <div className='Error'>
        <Toast
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={2200}
      >
        <Toast.Header>
          <strong className="mr-auto">React Toast</strong>
          <small>50 mins ago</small>
        </Toast.Header>
        <Toast.Body>Lorem ipsum dolor sit adipiscing elit.</Toast.Body>
      </Toast>
    </div>
  )
}

export default Error