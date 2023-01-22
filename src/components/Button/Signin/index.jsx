import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from './index.module.css';

export default function Signin(props) {
  const [inputLogin, setInputLogin] = useState([])

  const handleLogin = (e) => {
    e.preventDefault();
    const loggingUser = {
        username: e.target.username.value,
        password: e.target.password.value,
    };
    setInputLogin(...inputLogin, loggingUser);
    const loggedUser = JSON.parse(localStorage.getItem("isSignup"))  || [];
    if (
      loggedUser.find((isSignup) => isSignup.username === loggingUser.username && isSignup.password === loggingUser.password)
    ) {
      localStorage.setItem("isSignin", JSON.stringify(loggingUser))
      alert("Login Success")
      props.onHide();
    } else if(
      loggedUser.find((isSignup) => isSignup.username !== loggingUser.username || isSignup.password !== loggingUser.password)
    ) {
      alert("wrong Username or Password")
    }
  }

  return (
      <Modal {...props} centered>
        <Modal.Title className={styles.center}>Sign In</Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelbold}>Username</Form.Label>
              <Form.Control type='text' placeholder='Your Username' name='username' />
            </Form.Group>
            <Form.Group className='mb-4'>
              <Form.Label className={styles.labelbold}>Password</Form.Label>
              <Form.Control type='password' placeholder='Your Password' name='password' />
            </Form.Group>
            <Button className={styles.fullbtn} type='submit'>Sign In</Button>
            <p className={styles.textcenter}>Don't have an account? Click <strong>Here</strong></p>
          </Form>
        </Modal.Body>
      </Modal>
  )
}