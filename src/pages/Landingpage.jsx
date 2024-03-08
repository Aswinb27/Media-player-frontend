import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  // useNavigate() is a hook
  const navigate = useNavigate()

  const handleNavigate = () => {
    // navigate to homepage
    navigate('/home')

  }

  return (
    <div>
      <Row className='align-items-center'>

        <Col></Col>

        <Col lg={6}>
          <h1>Welcome to Video.com</h1>
          <p >Where user can use their favourite videos user can upload any youtube videos by copying and paste their url. Video.com will allow to add and remove their uploaded videos and also arrange them in different catagories by drag and drop. It is free. Try it now!!!!!</p>
          <button onClick={handleNavigate} className='btn' style={{ backgroundColor: "#fad203" }}>Click here to more</button>
        </Col>
        <Col lg={4}>
          <img className='img-fluid ms-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKqzIgw7pkFHl9KzAxKflEe0aEEDzH6fE2A&usqp=CAU" alt="" width={600} height={400} />
        </Col>

        <Col></Col>

      </Row>
    </div>
  )
}

export default Landingpage