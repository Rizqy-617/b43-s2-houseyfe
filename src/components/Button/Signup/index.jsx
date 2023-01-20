import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

export default function Signup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true);

  const [input, setInput] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    list: "",
    gender: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/")
  };

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
              <Form.Control type='text' placeholder='Your Full Name' name='fullname' value={input.fullname} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Username</Form.Label>
              <Form.Control type='text' placeholder='Your Username' name='username' value={input.username} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Email</Form.Label>
              <Form.Control type='email' placeholder='Your Email' name='email' value={input.email} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Password</Form.Label>
              <Form.Control type='password' placeholder='Your Password' name='password' value={input.password} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>List As</Form.Label>
              <Form.Select name='list' value={input.list} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus>
                <option>Tenant</option>
                <option>Owner</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Gender</Form.Label>
              <Form.Select name='gender' value={input.gender} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Phone</Form.Label>
              <Form.Control type='text' placeholder='Your Phone Number' name='phone' value={input.phone} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Address</Form.Label>
              <Form.Control as='textarea' style={{height: '100px'}} name='address' value={input.address} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus/>
            </Form.Group>
            <Button className={styles.fullbtn} type='button' onClick={handleSubmit}>Sign Up</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}