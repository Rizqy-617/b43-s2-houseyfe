import React, { useState } from 'react';
import style from './index.module.css'
import  { CgProfile } from 'react-icons/cg'
import {MdEmail, MdPersonPinCircle, MdLocalPhone, MdLocationOn} from 'react-icons/md'
import {BsGenderAmbiguous} from 'react-icons/bs'
import {HiLockClosed} from 'react-icons/hi'
import {Image, Button} from 'react-bootstrap'
import PP from '../../assets/icons/Il-Dottore.jpg'
import PasswordModal from '../Button/PasswordModal';

export default function ProfileLayout() {
  const [passwordModal, setPasswordModal] = useState(false)
  return (
    <>
      <div>
        <div className={style.maxHeight}>
          <div className={style.card}>
            <div className={style.container}>
              <div className={style.leftItem}>
                <div className={style.column}>
                  <h1>Personal Info</h1>
                  <div className={style.group}>
                    <CgProfile style={{marginTop: '10px', fontSize: '36px'}}/>
                    <div className={style.textgroup}>
                      <h4>Rizqy Andriansyah</h4>
                      <p>Full Name</p>
                    </div>
                  </div>
                  <div className={style.group}>
                    <MdEmail style={{marginTop: '10px', fontSize: '36px'}}/>
                    <div className={style.textgroup}>
                      <h4>rizqyandriansyah617@gmail.com</h4>
                      <p>Email</p>
                    </div>
                  </div>
                  <div className={style.group}>
                    <HiLockClosed style={{omarginTop: '10px', fontSize: '36px'}}/>
                    <div className={style.textgroup}>
                      <h4 onClick={() => setPasswordModal(true)}>Change Password</h4>
                      <p>Password</p>
                      <PasswordModal show={passwordModal} onHide={() => setPasswordModal(false)}/>
                    </div>
                  </div>
                  <div className={style.group}>
                    <MdPersonPinCircle style={{marginTop: '10px', fontSize: '36px'}}/>
                    <div className={style.textgroup}>
                      <h4>Tenant</h4>
                      <p>Status</p>
                    </div>
                  </div>
                  <div className={style.group}>
                    <BsGenderAmbiguous style={{marginTop: '10px', fontSize: '36px'}}/>
                    <div className={style.textgroup}>
                      <h4>Male</h4>
                      <p>Gender</p>
                    </div>
                  </div>
                  <div className={style.group}>
                    <MdLocalPhone style={{marginTop: '10px', fontSize: '36px'}}/>
                    <div className={style.textgroup}>
                      <h4>0857-4977-1583</h4>
                      <p>Mobile Phone</p>
                    </div>
                  </div>
                  <div className={style.group}>
                    <MdLocationOn style={{marginTop: '10px', fontSize: '36px'}}/>
                    <div className={style.textgroup}>
                      <h4>Perumahan Permata Bintaro Residence C-3</h4>
                      <p>Address</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.rightItem}>
                <Image src={PP} className={style.img}/>
                <Button className={style.customButton} size='lg'>Change Photo Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}