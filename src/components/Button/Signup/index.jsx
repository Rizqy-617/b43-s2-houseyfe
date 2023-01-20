import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from './index.module.css';

export default function Signup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true);

  const listData = [
    {value: 'Tenant'},
    {value: 'Owner'}
  ];

  const genderData = [
    {value: 'Laki-laki'},
    {value: 'Perempuan'}
  ];

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

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("isSignup", JSON.stringify(input));
    alert('Register Succesful');
    handleClose();
  };

  return (
    <>
      <Button size="lg" variant="tertiary" onClick={handleShow}>
				Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Title className={styles.center}>Sign Up</Modal.Title>
        <Modal.Body className={styles.height}>
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
                {listData.map((listas, idk) =>
                <option key={idk} value={listas.value}>{listas.value}</option>
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Gender</Form.Label>
              <Form.Select name='gender' value={input.gender} onChange={(e) => setInput({
                ...input,[e.target.name]: e.target.value,
              })} autoFocus>
                {genderData.map((option, idk) =>
                  <option key={idk} value={option.value}>{option.value}</option>
                )}
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
            <Button className={styles.fullbtn} type='button' onClick={handleRegister}>Sign Up</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}