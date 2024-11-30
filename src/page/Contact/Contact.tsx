import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Nav, Form, FormControl } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../CommonComponent/Header.tsx";
import AboutUs2 from '../../MockupData/Image/aboutUs2.png';
import HomeIcon2 from '../../MockupData/Image/homeIcon2.png';
import HomeIcon3 from '../../MockupData/Image/homeIcon3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import rectangle_6 from '../../MockupData/Image/rectangle_6.png';
import Ecosystem1 from '../../MockupData/Image/ecosystem_6.png'
import Ecosystem2 from '../../MockupData/Image/ecosystem_4.png'
import Ecosystem3 from '../../MockupData/Image/ecosystem_5.png'
import Rec1 from '../../MockupData/Image/rec1.png'
import Rec2 from '../../MockupData/Image/rec2.png'
import Rec3 from '../../MockupData/Image/rec3.png'
import Rec11 from '../../MockupData/Image/rec11.png'
import Rec12 from '../../MockupData/Image/rec12.png'
import Rec13 from '../../MockupData/Image/rec13.png'
import Rec14 from '../../MockupData/Image/rec14.png'
import Rec15 from '../../MockupData/Image/rec15.png'
import Rec16 from '../../MockupData/Image/rec16.png'
import News4 from '../../MockupData/Image/Rectangle_30.png'
import HomeImage8 from '../../MockupData/Image/Rectangle_36.png'
import HomeImage9 from '../../MockupData/Image/danh_luc.png'
import HomeImage10 from '../../MockupData/Image/danh_luc2.png'
import HomeImage11 from '../../MockupData/Image/10.png'
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import './Contact.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ArrowTimeDown from '../../MockupData/Image/ecosystem_time_arrow_down.png'
import EcosystemTime1 from '../../MockupData/Image/ecosystem_time-2.png'
import EcosystemTime2 from '../../MockupData/Image/ecosystem_time_3.png'
import EcosystemTime3 from '../../MockupData/Image/ecosystem_time_4.png'
import EcosystemTime4 from '../../MockupData/Image/ecosystem_time6.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Post {
    id: number;
    title: string;
}

const posts: Post[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Bài viết ${i + 1}`,
}));

const Contact = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Lấy bài viết hiển thị
    const currentPosts = posts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div>
            {/* SEO Optimization */}
            <Helmet>
                <title>Vina Glow - Home</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <Header />

            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col className="text-center mainContent-contact">
                        <div className="bottomMainSlide-ecosystem">
                            <span className="about-us">Liên hệ</span><br />
                            <span className="aboutUsRoute">Trang chủ <i className="fa-solid fa-chevron-right"></i>Liên hệ</span>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container-fluid contac-container-0">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        Hãy để đội ngũ tư vấn VINA GLOW hỗ trợ bạn dù bất kỳ nơi đâu
                    </Col>
                </Row>
            </div>

            <div className="container contac-container-1">
                <Row className="justify-content-center">
                    <Col md={5} className="left-contact-container">
                        <div>
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
                                <i className="fa-solid fa-at"></i>
                                <span className="information">vinaglow@vngl.com</span>
                            </div>
                        </div>

                        <div className="custom-line-container-rec">
                            <div className="custom-line-rec"></div>
                        </div>

                        <div className="contact-content-container">
                            <div className="title">
                                Liên hệ với chúng tôi
                            </div>

                            <div className="contact-input-container">
                                <input className="contact-input" placeholder="Họ tên" />
                            </div>

                            <div className="contact-input-container">
                                <input className="contact-input" placeholder="Email" />
                            </div>

                            <div className="contact-input-container">
                                <input className="contact-input-area" placeholder="Nội dung" />
                            </div>

                            <div className="contact-input-container button-contact">
                                <Button variant="primary" size="lg" className="send-contact-button">Gửi liên hệ</Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={7} className="right-contact-container">
                        <LoadScript googleMapsApiKey="AIzaSyCwQ0LRUNWgAtHGtQMRsqelLZQGtOMWktI">
                            <GoogleMap
                                mapContainerStyle={{ width: "100%", height: "500px" }}
                                center={{ lat: 21.003187, lng: 105.819854 }}
                                zoom={12}
                            >
                                <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
                            </GoogleMap>
                        </LoadScript>
                    </Col>


                </Row>
            </div>
            <Footer />
        </div >
    );
};

export default Contact;
