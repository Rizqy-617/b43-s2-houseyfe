import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from './index.module.css';

export default function Signin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true);

  return (
    <>
      <Button size="lg" variant="tertiary" onClick={handleShow}>
				Sign In
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Title className={styles.center}>Sign In</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Username</Form.Label>
              <Form.Control type='text' placeholder='Your Username' autoFocus/>
            </Form.Group>
            <Form.Group className='mb-4'>
              <Form.Label className={styles.labelbold}>Password</Form.Label>
              <Form.Control type='password' placeholder='Your Password' autoFocus/>
            </Form.Group>
            <Button className={styles.fullbtn} type='button'>Sign In</Button>
            <p className={styles.textcenter}>Don't have an account? Click <strong>Here</strong></p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}