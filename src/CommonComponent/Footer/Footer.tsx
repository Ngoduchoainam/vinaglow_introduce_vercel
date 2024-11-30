import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Nav, Form, FormControl } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../MockupData/Image/logo.png'
import HomeMainSlide from '../MockupData/Image/homeMainSlide.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.scss'
import FooterImageLogo from '../../MockupData/Image/Artboard.png'

const Footer = props => {
    const [filter, setFilter] = useState("");

    const SearchPost = async () => {
        await props.SearchPost(false, filter, true);
    }
    return (
        <div className="container-fluid footerContainer">
            <Row>
                <Col md={7} className="head-footer-container">
                    <Row>
                        <Col md={3} className="text-center"></Col>
                        <Col md={3}>
                            <div className="contact-infor">
                                <span>Thông tin liên hệ</span>
                            </div>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col md={3} className="text-center"></Col>
                        <Col md={2} className="infor-contact-container">
                            <div className="contact-infor-index-first">
                                Về chúng tôi
                            </div>
                            <div className="contact-infor-index">
                                Hệ sinh thái
                            </div>
                            <div className="contact-infor-index">
                                Tuyển dụng
                            </div>
                            <div className="contact-infor-index">
                                Tin tức
                            </div>
                            <div className="contact-infor-index">
                                Liên hệ
                            </div>
                        </Col>
                        <Col md={1} />
                        <Col md={6} className="right-left-information">
                            <div>
                                <i className="fa-solid fa-phone"></i>
                                <span className="information">0000 000 000</span>
                            </div>
                            <div className="contact-infor-index2 index-2">
                                <i className="fa-solid fa-location-dot"></i>
                                <span className="information">Phường Khương Trung, Quận Thanh Xuân,
                                    Thành Phố Hà Nội</span>
                            </div>
                            <div className="contact-infor-index2">
                                <i className="fa-regular fa-clock"></i>
                                <span className="information">Làm việc tất cả các ngày trong tuần: Từ 8h - 12h<br />
                                    <span className="information2">từ 13h30 - 17h30</span><br />
                                    <span className="note">(*)Lưu ý: nếu đến sau 17h30 vui lòng liên hệ trước để tư vấn</span> </span>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col md={5} className="right-infor-footer">
                    <Row>
                        <span className="join-vinaglow">Tham gia VINA GLOW</span>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <div className="search-container">
                                <input
                                    className="inputEmailSearch"
                                    placeholder="Nhập Email của bạn"
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            // Handle the Enter key press
                                            SearchPost();
                                        }
                                    }}
                                    onChange={(e) => setFilter(e.target.value)}
                                >
                                </input>
                            </div>

                            <img src={FooterImageLogo} alt="Vina Glow Logo" className="footerLogo" />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="bottom-footer">
                <Col md={7}>
                    <Row>
                        <Col md={3} className="text-center"></Col>
                        <Col md={7} className="bottom-footer-content">
                            <div>
                                Điều khoản sử dụng
                            </div>

                            <div>
                                Quyền riêng tư
                            </div>

                            <div>
                                Bảo lưu mọi quyền
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    );
};

export default Footer;
