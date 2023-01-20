import React from "react";
import logo from "../../assets/icons/Logo.svg";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import {BiCalendar} from "react-icons/bi"
import {TbReceipt2} from "react-icons/tb"

import {
	// Container,
	Navbar,
	Nav,
	Button,
	// NavDropdown,
	InputGroup,
	Form,
	Dropdown,
	// Row,
	// Col,
} from "react-bootstrap";
import css from "./header.module.css";
import Signup from "../Button/Signup";
import Signin from "../Button/Signin";

export default function Header(props) {
	return (
		<Navbar style={props.style} expand="lg" className={props.className}>
			{/* <Container className=""> */}
			<Navbar.Brand href="#home" className={css.navbarBrand}>
				<img src={logo} alt="" height={64} />
			</Navbar.Brand>

			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				className="ms-auto me-4"
			/>
			<Navbar.Collapse id="basic-navbar-nav" className="">
				<Form className="d-flex">
					<InputGroup className={css.inputGroup}>
						<Form.Control
							size="lg"
							placeholder="Search"
							aria-label="Search"
							aria-describedby="basic-addon1"
							className="ms-4 border-0 border-end bg-tertiary"
						/>
						<Button variant="outline-primary border-0 border-start bg-tertiary">
							<HiMagnifyingGlass fontSize={24} strokeWidth={2} />
						</Button>
					</InputGroup>
				</Form>
				{localStorage.getItem("isSignin") ? (
				<Nav className="ms-auto px-4 d-flex gap-2">
					<Dropdown align="end">
						<Dropdown.Toggle>
							Ini filter
						</Dropdown.Toggle>
						<Dropdown.Menu className={css.triangle}>
							<Dropdown.Item className={css.textBold}><CgProfile size={32} className={css.cg} />
							Profile
							</Dropdown.Item>
							<Dropdown.Item className={css.textBold}><BiCalendar size={32} className={css.cg} />
							My Booking
							</Dropdown.Item>
							<Dropdown.Item className={css.textBold}><TbReceipt2 size={32} className={css.cg} />
							History
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
				) : (
				<Nav className="ms-auto px-4 d-flex gap-2">
					<Signin />
					<Signup />
				</Nav>
				)}
			</Navbar.Collapse>
			{/* </Container> */}
		</Navbar>
	);
}
