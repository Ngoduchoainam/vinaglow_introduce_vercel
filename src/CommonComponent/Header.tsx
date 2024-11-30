import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Nav, Form, FormControl, Navbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../MockupData/Image/logo.png'
import HomeMainSlide from '../MockupData/Image/homeMainSlide.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.scss'

const Header = props => {
    const [filter, setFilter] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    const SearchPost = async () => {
        await props.SearchPost(false, filter, true);
    }

    if (!isMobile) {
        return (
            <div className="header-top bg-light py-2">
                <div className="container-fluid">
                    <Row className="align-items-center">
                        <Col md={3} className="text-center logo">
                            <Link to="/" className="brand-logo">
                                <img src={Logo} alt="Vina Glow Logo" />
                            </Link>
                        </Col>
                        <Col md={6} className="text-md-right">
                            <Nav className="header-nav">
                                <Nav.Link as={Link} to="/" className="navLinkHome">Trang chủ</Nav.Link>
                                <Nav.Link as={Link} to="/ve-chung-toi" className="navLinkHome">Về chúng tôi</Nav.Link>
                                <Nav.Link as={Link} to="/he-sinh-thai" className="navLinkHome">Hệ sinh thái</Nav.Link>
                                <Nav.Link as={Link} to="/tin-tuc" className="navLinkHome">Tin tức</Nav.Link>
                                <Nav.Link as={Link} to="/tuyen-dung" className="navLinkHome">Tuyển dụng</Nav.Link>
                                <Nav.Link as={Link} to="/lien-he" className="navLinkHome">Liên hệ</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={3} className="text-md-right searchContainer-header">
                            <Nav className="header-nav">
                                <Form>
                                    <div className="search-container">
                                        <input
                                            className="inputSearch"
                                            placeholder="Tìm kiếm"
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    // Handle the Enter key press
                                                    SearchPost();
                                                }
                                            }}
                                            onChange={(e) => setFilter(e.target.value)}
                                        >
                                        </input>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </Form>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    } else
        return (
            <Navbar bg="light" expand="lg" className="header-top">
                <div className="container-fluid">
                    <Navbar.Brand>
                        <Link to="/" className="brand-logo">
                            <img src={Logo} alt="Logo" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
                            <Nav.Link as={Link} to="/ve-chung-toi">Về chúng tôi</Nav.Link>
                            <Nav.Link as={Link} to="/he-sinh-thai">Hệ sinh thái</Nav.Link>
                            <Nav.Link as={Link} to="/tin-tuc">Tin tức</Nav.Link>
                            <Nav.Link as={Link} to="/tuyen-dung">Tuyển dụng</Nav.Link>
                            <Nav.Link as={Link} to="/lien-he">Liên hệ</Nav.Link>
                        </Nav>
                        <Form className="search-container">
                            <input
                                className="inputSearch"
                                placeholder="Tìm kiếm"
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        event.preventDefault();
                                        SearchPost();
                                    }
                                }}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Form>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
};

export default Header;
