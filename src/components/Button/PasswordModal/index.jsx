import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import style from './index.module.css'

export default function PasswordModal(props) {
  const handleUpdate = (e) => {
    e.preventDefault();
    const oldPassword = e.target.oldpassword.value;
    const loggedUser = JSON.parse(localStorage.getItem("isSignin"));
    const currentPassword = loggedUser.password;

    if (oldPassword !== currentPassword) {
      alert("Wrong old password");
    }

    const newPassword = e.target.newpassword.value;
    const confirmPassword = e.target.confirmpassword.value;

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password does not match");
    };

    loggedUser.password = newPassword;
    localStorage.setItem("isSignin", JSON.stringify(loggedUser));
    alert("Change Password Success");
    props.onHide();
  }
  return (
    <Modal {...props} centered>
      <Modal.Title className={style.center}>Change Password</Modal.Title>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='oldpassword' className='fw-bold'>Old Password</Form.Label>
            <Form.Control type='text' placeholder='Type your old password' name='oldpassword' id='oldpassword'/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='newpassword' className='fw-bold'>New Password</Form.Label>
            <Form.Control type='text' placeholder='Type your old password' name='newpassword' id='newpassword'/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='confirmpassword' className='fw-bold'>Confirm Password</Form.Label>
            <Form.Control type='text' placeholder='Type your old password' name='confirmpassword' id='confirmpassword'/>
          </Form.Group>
          <Button className={style.fullbtn} onClick={handleUpdate}>Save</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}