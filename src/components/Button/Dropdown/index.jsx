import React from 'react';
import style from './index.module.css';
import { CgProfile } from "react-icons/cg";
import {BiCalendar} from "react-icons/bi";
import {TbReceipt2} from "react-icons/tb";
import {RiLogoutBoxRLine} from "react-icons/ri";
import { Dropdown } from 'react-bootstrap';

export default function Droplist() {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle>
        Ini filter
      </Dropdown.Toggle>
      <Dropdown.Menu className={style.triangle}>
        <Dropdown.Item className={style.textBold}><CgProfile size={32} className={style.cg} />
        Profile
        </Dropdown.Item>
        <Dropdown.Item className={style.textBold}><BiCalendar size={32} className={style.cg} />
        My Booking
        </Dropdown.Item>
        <Dropdown.Item className={style.textBold}><TbReceipt2 size={32} className={style.cg} />
        History
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className={style.textBold}><RiLogoutBoxRLine size={32} className={style.cg} />
        Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}