import React, { useEffect, useState } from "react";
import { Row, Col, Nav, Form, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../MockupData/Image/logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.scss'
import { MenuObject } from "../../Entities/MenuObject.ts";
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import { Utility } from "../../utility/Utility.ts";

const Header = props => {
    const [filter, setFilter] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [lstMenu, setLstMenu] = useState<Array<MenuObject>>([]);
    const [logoUrl, setLogoUrl] = useState("");

    const GetListMenu = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetListMenu(Utility.MenuTypeHeader), undefined, "GET");

            if (res) {
                let result = await res?.json();
                let lstMenu = result.data;

                setLstMenu(lstMenu);
            }
        } catch (error) {

        }
    }

    const GetConfig = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetConfig, undefined, "GET");

            if (res) {
                let result = await res?.json();
                let obj = result.data;

                setLogoUrl(Utility.ApiUrlPublic + obj.Logo)

            }
        } catch (error) {

        }
    }

    useEffect(() => {
        GetListMenu();
        GetConfig();

    }, []);


    const SearchPost = async () => {
        await props.SearchPost(false, filter, true);
    }

    if (!isMobile) {
        return (
            <div className="header-top bg-light py-2">
                <div className="container-fluid">
                    <Row className="align-items-center header-frame">
                        <Col md={3} className="text-center logo">
                            <Link to="/" className="brand-logo">
                                {logoUrl && <img src={logoUrl} alt="Vina Glow Logo" className="header-logo" />}
                            </Link>
                        </Col>
                        <Col md={6} className="text-md-right">
                            <Nav className="header-nav">
                                {lstMenu.map((item) => (
                                    <>
                                        <Nav.Link as={Link} to={`${item.MenuURL || "/"}`} className="navLinkHome">{item.Name}</Nav.Link>
                                    </>
                                )
                                )}
                            </Nav>
                        </Col>
                        <Col md={3} className="text-md-right searchContainer-header">
                            <Nav className="header-nav">
                                <Form>
                                    <div className="search-container search-head">
                                        <input
                                            className="inputSearch"
                                            placeholder="Tìm kiếm"
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    event.preventDefault();
                                                    SearchPost();
                                                }
                                            }}
                                            onChange={(e) => setFilter(e.target.value)}
                                        >
                                        </input>
                                        <i className="fa-solid fa-magnifying-glass" onClick={() => SearchPost()}></i>
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
