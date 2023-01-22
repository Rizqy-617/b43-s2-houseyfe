import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from './index.module.css';

const Signup = (props) => {

  const handleRegister = (e) => {
    e.preventDefault();
    const registeringUser = {
      fullname: e.target.fullname.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      list: e.target.list.value,
      gender: e.target.gender.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
    const currentUser = JSON.parse(localStorage.getItem("isSignup")) || [];
    localStorage.setItem("isSignup", JSON.stringify([...currentUser, registeringUser]));
    alert('Register Succesful');
    props.onHide();
    props.openmodallogin();
  }

  const listData = [
    {value: 'Tenant'},
    {value: 'Owner'}
  ];

  const genderData = [
    {value: 'Laki-laki'},
    {value: 'Perempuan'}
  ];

  return (
      <Modal {...props} centered>
        <Modal.Title className={styles.center}>Sign Up</Modal.Title>
        <Modal.Body className={styles.height}>
          <Form onSubmit={handleRegister}>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Full Name</Form.Label>
              <Form.Control type='text' placeholder='Your Full Name' name='fullname'autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Username</Form.Label>
              <Form.Control type='text' placeholder='Your Username' name='username'autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Email</Form.Label>
              <Form.Control type='email' placeholder='Your Email' name='email' autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Password</Form.Label>
              <Form.Control type='password' placeholder='Your Password' name='password' autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>List As</Form.Label>
              <Form.Select name='list' autoFocus>
                <option>--Choose--</option>
                {listData.map((list, idk) =>
                <option key={idk} value={list.value}>{list.value}</option>
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Gender</Form.Label>
              <Form.Select name='gender' autoFocus>
                <option>--Choose--</option>
                {genderData.map((option, idk) =>
                  <option key={idk} value={option.value}>{option.value}</option>
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Phone</Form.Label>
              <Form.Control type='text' placeholder='Your Phone Number' name='phone'autoFocus/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Address</Form.Label>
              <Form.Control as='textarea' style={{height: '100px'}} name='address'autoFocus/>
            </Form.Group>
            <Button className={styles.fullbtn} type='submit'>Sign Up</Button>
          </Form>
        </Modal.Body>
      </Modal>
  )
}

export default Signup;