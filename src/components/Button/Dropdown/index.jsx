import React from 'react';
import style from './index.module.css';
import { CgProfile } from "react-icons/cg";
import {BiCalendar} from "react-icons/bi";
import {TbReceipt2} from "react-icons/tb";
import {RiLogoutBoxRLine} from "react-icons/ri";
import { Dropdown, Image } from 'react-bootstrap';
import PP from '../../../assets/icons/Il-Dottore.jpg'
import {Link, useNavigate} from 'react-router-dom'

export default function Droplist() {
  const navigate = useNavigate();
  const removeLoginData = () => {
    localStorage.removeItem("isSignin");
    alert("Goodbye")
    navigate("/")
  }
  return (
    <Dropdown align="end">
      <Dropdown.Toggle className={style.toggle}>
        <Image src={PP} className={style.pp} roundedCircle/>
      </Dropdown.Toggle>
      <Dropdown.Menu className={style.triangle}>
        <Dropdown.Item className={style.textBold}><CgProfile size={32} className={style.cg} />
        <Link to="/profile" className={style.noDecoration}>Profile</Link>
        </Dropdown.Item>
        <Dropdown.Item className={style.textBold}><BiCalendar size={32} className={style.cg} />
        My Booking
        </Dropdown.Item>
        <Dropdown.Item className={style.textBold}><TbReceipt2 size={32} className={style.cg} />
        History
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className={style.textBold} onClick={ removeLoginData } o><RiLogoutBoxRLine size={32} className={style.cg}/>
        Signout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
