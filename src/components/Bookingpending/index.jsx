import React from 'react';
import style from './index.module.css';
import Logo from '../../assets/icons/Logo.svg'
import Steppers  from '../../assets/icons/Stepper.svg'
import Struk from '../../assets/icons/struk.png'
import { Image, Table} from 'react-bootstrap'

export default function BookingPending() {
  return (
    <div>
      <div className={style.maxHeight}>
        <div className={style.card}>
          <div className={style.itemtop}>
            <div className={style.itemcolumn1}>
              <img src ={Logo} alt='icon' />
              <h3>House Astina</h3>
              <p>Jl. elang IV Perum Permata Bintaro Residence, Pondok Aren, Tangerang Selatan</p>
              <div className={style.alert}>Warning Payment</div>
            </div>
            <div className={style.itemcolumn2}>
              <img src ={Steppers} alt='icon' width={20}/>
              <div className={style.item}>
                <h3>Check-in</h3>
                <p className='mb-3'>30 March 2020</p>
                <h3>Check-out</h3>
                <p>30 March 2021</p>
              </div>
              <div className={style.item}>
                <h3>Amenities</h3>
                <p className='mb-3'>Furnished</p>
                <h3>Type of Rent</h3>
                <p>Year</p>
              </div> 
            </div>
            <div className={style.itemcolumn3}>
              <h1>Booking</h1>
              <h5 className={style.textgray}>Saturday, 30 March 2020</h5>
              <Image src={Struk} className='mt-2 mb-2' rounded/>
              <p className={style.textgray}>Upload payment proof</p>
            </div>
          </div>
          <div className={style.itembottom}>
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th> </th>
                  <th> </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Rizqy Andriansyah</th>
                  <th>Male</th>
                  <th>085749771583</th>
                  <th>Long time rent</th>
                  <th>:</th>
                  <th>1 Year</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Total</th>
                  <th>:</th>
                  <th className='text-danger'>Rp. 3.000.000</th>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}