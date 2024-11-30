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
import News1 from '../../MockupData/Image/Rectangle_110.png'
import News2 from '../../MockupData/Image/Rectangle_23.png'
import News3 from '../../MockupData/Image/Rectangle_28.png'
import News4 from '../../MockupData/Image/Rectangle_30.png'
import HomeImage8 from '../../MockupData/Image/Rectangle_36.png'
import HomeImage9 from '../../MockupData/Image/danh_luc.png'
import HomeImage10 from '../../MockupData/Image/danh_luc2.png'
import HomeImage11 from '../../MockupData/Image/10.png'
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import './News.scss'
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

const News = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = isMobile ? 4 : 9;

    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Lấy bài viết hiển thị
    const currentPosts = posts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return; // Kiểm tra không cho phép page nhỏ hơn 1 hoặc lớn hơn tổng số trang
        setCurrentPage(page);
    };

    const pageNumbers = () => {
        const maxPage = totalPages;
        let startPage = Math.max(currentPage - 1, 1);
        let endPage = Math.min(startPage + 2, maxPage);

        if (endPage - startPage < 2) {
            startPage = Math.max(endPage - 2, 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
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
                        <div className="bottomMainSlide-ecosystem">
                            <span className="about-us">Tin tức</span><br />
                            <span className="aboutUsRoute">Trang chủ <i className="fa-solid fa-chevron-right"></i> Tin tức</span>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container news-container-1">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <span className="title news-head-title">Công ty phát triển doanh nghiệp trong khu vực</span><br />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={5} className="text-center">
                        <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</span>
                    </Col>
                </Row>
            </div>

            <div className="container news-container-1">
                <Row className="justify-content-center news-button-group-container">
                    <Col md={6} className="text-center news-button-group">
                        <Button variant="primary" size="lg" className="news-button">Tin tức</Button>
                        <Button variant="primary" size="lg" className="news-button">Tuyển dụng</Button>
                        <Button variant="primary" size="lg" className="news-button">Sản phẩm</Button>
                    </Col>
                </Row>
            </div>

            <div className="container news-container-1">
                <Row onClick={() => navigate('/tin-tuc-chi-tiet/')}>
                    <Col md={7} className="news-head-left">
                        <img src={News1} className="news-image-2" />
                    </Col>
                    <Col md={5} className="news-head-right">
                        <div className="news-banner-container">
                            <div className="title-news-banner">
                                Cải thiện sinh lý là một mục tiêu quan trọng
                            </div>
                            <div>
                                Để duy trì sức khỏe tổng thể và hạnh phúc. Dưới đây là một số lời khuyên để cải thiện sinh lý một cách tự nhiên và an toàn...
                            </div>
                            <div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container my-4 news-container-2">
                {/* Danh sách bài viết */}
                <div className="row">
                    {currentPosts.map((post, index) => {
                        console.log(index, 133)
                        if (index % 3 == 0)
                            return (
                                <div className="col-12 col-sm-6 col-md-4 mb-3 news-detail-container" key={post.id} onClick={() => navigate('/tin-tuc-chi-tiet/')}>
                                    <h5 className="card-title"><img src={News2} className="news-image-detail" /></h5>
                                    <div className="news-detail-des">
                                        <div className="news-title">
                                            <span>Lorem lpsum {index}</span>
                                            <div>
                                            </div>
                                        </div>
                                        <div className="news-detail-des-2">
                                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                                        </div>
                                    </div>
                                </div>
                            )

                        if (index % 3 == 1)
                            return (
                                <div className="col-12 col-sm-6 col-md-4 mb-3 news-detail-container" key={post.id} onClick={() => navigate('/tin-tuc-chi-tiet/')}>
                                    <h5 className="card-title"><img src={News3} className="news-image-detail" /></h5>
                                    <div className="news-detail-des">
                                        <div className="news-title">
                                            <span>Lorem lpsum {index}</span>
                                            <div>
                                            </div>
                                        </div>
                                        <div className="news-detail-des-2">
                                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                                        </div>
                                    </div>
                                </div>
                            )

                        if (index % 3 == 2)
                            return (
                                <div className="col-12 col-sm-6 col-md-4 mb-3 news-detail-container" key={post.id} onClick={() => navigate('/tin-tuc-chi-tiet/')}>
                                    <h5 className="card-title"><img src={News4} className="news-image-detail" /></h5>
                                    <div className="news-detail-des">
                                        <div className="news-title">
                                            <span>Lorem lpsum {index}</span>
                                            <div>
                                            </div>
                                        </div>
                                        <div className="news-detail-des-2">
                                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                                        </div>
                                    </div>
                                </div>
                            )
                    })}
                </div>

                {/* Phân trang */}
                <nav>
                    <ul className="pagination justify-content-center pagination-container">
                        <li className="page-item">
                            <button
                                className="page-link pagination-button"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                        </li>
                        {pageNumbers().map((page) => (
                            <li
                                key={page}
                                className={`page-item ${currentPage === page ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}
                        <li className="page-item">
                            <button
                                className="page-link pagination-button"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <Footer />
        </div >
    );
};

export default News;
