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
import News1 from '../../MockupData/Image/Rectangle_68.png'
import News2 from '../../MockupData/Image/Rectangle_71.png'
import News3 from '../../MockupData/Image/Rectangle_28.png'
import News4 from '../../MockupData/Image/Rectangle_30.png'
import HomeImage8 from '../../MockupData/Image/Rectangle_36.png'
import HomeImage9 from '../../MockupData/Image/danh_luc.png'
import HomeImage10 from '../../MockupData/Image/danh_luc2.png'
import HomeImage11 from '../../MockupData/Image/10.png'
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import './NewsDetail.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ArrowTimeDown from '../../MockupData/Image/ecosystem_time_arrow_down.png'
import EcosystemTime1 from '../../MockupData/Image/ecosystem_time-2.png'
import EcosystemTime2 from '../../MockupData/Image/ecosystem_time_3.png'
import EcosystemTime3 from '../../MockupData/Image/ecosystem_time_4.png'
import EcosystemTime4 from '../../MockupData/Image/ecosystem_time6.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Post {
    id: number;
    title: string;
}

const posts: Post[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Bài viết ${i + 1}`,
}));

const NewsDetail = () => {
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
                    <Col className="text-center mainContent-news">
                        <div className="bottomMainSlide-news-detail">
                            <span className="about-us">Tin tức</span><br />
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container news-detail-container-1">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="navigate-news-detail">
                            Trang chủ <i className="fa-solid fa-chevron-right"></i> Tin tức <i className="fa-solid fa-chevron-right"></i> Chi tiết tin tức
                        </div>
                        <div className="news-detail-title">
                            Thông tin Neque porro quisquam est qui dolorem ipsum quia dolor sit
                        </div>

                        <div>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br />
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop<br /><br />
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                            What is Lorem Ipsum?
                        </div><br /><br />

                        <div className="news-detail-title">
                            Thông tin Neque porro quisquam est qui dolorem ipsum quia dolor sit
                        </div>
                        <img src={News1} className="news-detail-image" />
                        <br />
                        <br />
                        <div>
                            What is Lorem Ipsum?
                        </div>
                        <div>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br />
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop<br /><br />
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                            What is Lorem Ipsum?
                        </div>

                        <br /><br />

                        <div className="news-detail-title">
                            Thông tin Neque porro quisquam est qui dolorem ipsum quia dolor sit
                        </div>
                        <img src={News1} className="news-detail-image" />
                        <br />
                        <br />
                        <div>
                            What is Lorem Ipsum?
                        </div>
                        <div>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br />
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop<br /><br />
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                            What is Lorem Ipsum?
                        </div>

                        <div className="bottom-detail-content">
                            <div>
                                <i className="fa-regular fa-clock"></i>{" "}
                                Ngày 16/11/2024
                            </div>

                            <div className="share">
                                <i className="fa-solid fa-share"></i>{" "}
                                Share
                            </div>
                        </div>
                    </Col>

                    <Col md={3} className="right-newsDetail-container">
                        <div className="list-menu-container">
                            <div className="list-menu-title">
                                Danh mục
                            </div>
                            <div>
                                <ul className="list-menu">
                                    <li>
                                        Danh sách tin tức
                                    </li>
                                    <li>
                                        Giới thiệu
                                    </li>
                                    <li>
                                        Hệ sinh thái
                                    </li>
                                    <li>
                                        Tuyển dụng
                                    </li>
                                    <li>Liên hệ
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="list-menu-container list-menu-container2">
                            <div className="list-menu-title">
                                Tin tức nổi bật
                            </div>
                            <div className="news-special-1">
                                <img src={News2} />
                                <div className="news-special-title">
                                    Lorem Ipsum is
                                </div>
                                <div className="news-special-content">
                                    Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                                </div>
                            </div>

                            <div className="news-special-1">
                                <img src={News2} />
                                <div className="news-special-title">
                                    Lorem Ipsum is
                                </div>
                                <div className="news-special-content">
                                    Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                                </div>
                            </div>

                            <div className="news-special-1">
                                <img src={News2} />
                                <div className="news-special-title">
                                    Lorem Ipsum is
                                </div>
                                <div className="news-special-content">
                                    Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                                </div>
                            </div>
                        </div>

                        <div className="list-menu-container list-menu-container2">
                            <div className="list-menu-title">
                                Tin liên quan
                            </div>
                            <div className="news-special-1">
                                <img src={News2} />
                                <div className="news-special-title">
                                    Lorem Ipsum is
                                </div>
                                <div className="news-special-content">
                                    Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                                </div>
                            </div>

                            <div className="news-special-1">
                                <img src={News2} />
                                <div className="news-special-title">
                                    Lorem Ipsum is
                                </div>
                                <div className="news-special-content">
                                    Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                                </div>
                            </div>

                            <div className="news-special-1">
                                <img src={News2} />
                                <div className="news-special-title">
                                    Lorem Ipsum is
                                </div>
                                <div className="news-special-content">
                                    Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
            <Footer />
        </div >
    );
};

export default NewsDetail;
