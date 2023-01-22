import React, { useState } from 'react'
import moment from 'moment'
import { Button, Modal, Form } from 'react-bootstrap'
import style from './index.module.css'


export default function Ordermodal(props) {
  const [checkIn, setCheckIn] = useState(moment())
  const [checkOut, setCheckOut] = useState(moment())
  return (
    <Modal {...props} centered>
      <Modal.Title className={style.center}>How long you will stay</Modal.Title>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='checkin' className='fw-bold'>Check In</Form.Label>
            <Form.Control type='date' id='checkin' placeholder='checkin' name='checkin' onChange={(e) => setCheckIn(moment(e.target.value))} value={checkIn.format("YYYY-MM-DD")} />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='checkout' className='fw-bold'>Check Out</Form.Label>
            <Form.Control type='date' id='checkout' placeholder='checkout' name='checkout' onChange={(e) => setCheckOut(moment(e.target.value))} value={checkOut.format("YYYY-MM-DD")} />
          </Form.Group>
          <Button className={style.fullbtn} >Order</Button>
        </Form>
      </Modal.Body> 
    </Modal>
  )
}