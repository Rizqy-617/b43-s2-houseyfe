import React from 'react';
import { Modal } from 'react-bootstrap'
import style from './index.module.css'
import { Link } from 'react-router-dom';

export default function Paymodal(props) {
  return (
    <Modal {...props} size='lg' centered>
      <Modal.Body className={style.textcenter}>
        <p>Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam.</p>
        <p>Untuk melihat pesanan Klik <Link to='/pending'>Disini</Link> Terimakasih</p>
      </Modal.Body>
    </Modal>
  )
}