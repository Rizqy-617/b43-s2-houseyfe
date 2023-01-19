import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from './index.module.css';

export default function Signup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true);

  return (
    <>
      <Button size="lg" variant="tertiary" onClick={handleShow}>
				Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Title className={styles.center}>Sign Up</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Full Name</Form.Label>
              <Form.Control type='text' placeholder='Your Full Name' autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Username</Form.Label>
              <Form.Control type='text' placeholder='Your Username' autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Email</Form.Label>
              <Form.Control type='email' placeholder='Your Email' autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Password</Form.Label>
              <Form.Control type='password' placeholder='Your Password' autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>List As</Form.Label>
              <Form.Select autoFocus>
                <option>Tenant</option>
                <option>Owner</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Gender</Form.Label>
              <Form.Select autoFocus>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Phone</Form.Label>
              <Form.Control type='text' placeholder='username' autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Address</Form.Label>
              <Form.Control as='textarea' style={{height: '100px'}} autoFocus/>
            </Form.Group>
            <Button className={styles.fullbtn} type='button'>Sign Up</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}