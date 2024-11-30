import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.scss'
import Header from "../../CommonComponent/Header.tsx";
import HomeIcon from '../../MockupData/Image/homeIcon1.png';
import HomeIcon2 from '../../MockupData/Image/homeIcon2.png';
import HomeIcon3 from '../../MockupData/Image/homeIcon3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import rectangle_6 from '../../MockupData/Image/rectangle_6.png';
import HomeImage1 from '../../MockupData/Image/homeImage1.png'
import HomeImage2 from '../../MockupData/Image/homeImage2.png'
import HomeImage3 from '../../MockupData/Image/homeImage3.png'
import HomeImage4 from '../../MockupData/Image/rectangle_112.png'
import HomeImage5 from '../../MockupData/Image/rectangle_111.png'
import HomeImage6 from '../../MockupData/Image/Rectangle_34.png'
import HomeImage7 from '../../MockupData/Image/Rectangle_35.png'
import HomeImage8 from '../../MockupData/Image/Rectangle_36.png'
import HomeImage9 from '../../MockupData/Image/danh_luc.png'
import HomeImage10 from '../../MockupData/Image/danh_luc2.png'
import HomeImage11 from '../../MockupData/Image/10.png'
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import '../../App.css'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Helmet>
                <title>Vina Glow - Home</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <Header />

            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col className="text-center mainContent">
                        <h1 className="display-4">Phát triển doanh nghiệp <br></br>cùng VINA GLOW</h1>
                        <br />
                        <p className="lead">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        <br />
                        <Button variant="primary" size="lg" className="readMoreButton">XEM THÊM</Button>
                        <div className="bottomMainSlide">
                            <div className="homeMainSlideText frame1">
                                <img src={HomeIcon} alt="Vina Glow Logo" />
                                <span>200+</span>
                            </div>

                            <div className="homeMainSlideText frame2">
                                <img src={HomeIcon2} alt="Vina Glow Logo" />
                                <span>30+</span>
                            </div>

                            <div className="homeMainSlideText frame3">
                                <img src={HomeIcon3} alt="Vina Glow Logo" />
                                <span>150+</span>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className={`container homeContainer2 ${isVisible ? "visible" : ""}`}
                ref={containerRef}>
                <Row className="justify-content-center">
                    <Col md={7} className="home-container-medium">
                        <div className="homeContainer2Title">
                            <h3>Về chúng tôi</h3>
                            <h1 className="vinaglowTitle">VINA GLOW</h1>
                        </div>

                        <div className="homeContainer2Content">
                            <div className="homeContainer2Content-child">
                                <span className="aboutUsTitle">Với khách hàng:</span><br />
                                <span>
                                    <i className="fa-regular fa-circle-check"></i> {" "}
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                                </span>
                            </div>

                            <div className="homeContainer2Content-child">
                                <span className="aboutUsTitle">Với nhân viên:</span><br />
                                <span>
                                    <i className="fa-regular fa-circle-check"></i>{" "}
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                                </span>
                            </div>

                            <div className="homeContainer2Content-child">
                                <span className="aboutUsTitle">Với xã hội:</span><br />
                                <span>
                                    <i className="fa-regular fa-circle-check"></i>{" "}
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                                </span>
                            </div>

                            <div className="homeContainer2Content-child">
                                <span className="aboutUsTitle">Với môi trường:</span><br />
                                <span>
                                    <i className="fa-regular fa-circle-check"></i>{" "}
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col md={5} className="text-center home-medium-image-container-1">
                        <img src={rectangle_6} className="homeImage1" />
                    </Col>
                </Row>
            </div>

            <div className="container-fluid homeContainer2">
                <Row>
                    <img src={HomeImage12} alt="Vina Glow Logo" className="bgImage" />
                </Row>
                <Row className="justify-content-center">
                    <Col md={5} className="homeMediumFrame0">
                        <div className="image-wrapper">
                            <img src={HomeImage1} className="home-medium1-image" />
                            <div className="text-overlay text-overlay-1">
                                <h5 className="aboutUsTitle activity-field">Lĩnh vực hoạt động</h5>
                                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, </span>
                            </div>
                        </div>
                    </Col>

                    <Col md={2} className="homeMediumFrame1">
                        <div className="image-wrapper">
                            <img src={HomeImage2} className="homeImage3" />
                            <div className="text-overlay">
                                <h5 className="aboutUsTitle activity-field">Lĩnh vực hoạt động</h5>
                                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, </span>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} className="homeMediumFrame2">
                        <div className="image-wrapper">
                            <img src={HomeImage3} className="home-medium1-image2" />
                            <div className="text-overlay text-overlay-3">
                                <h5 className="aboutUsTitle activity-field">Lĩnh vực hoạt động</h5>
                                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container homeContainer2">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <h5 className="aboutUsTitle">Chuyên gia hàng đầu trong lĩnh vực</h5>
                        <span className="descriptionMaster">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, <br />
                            There is no one who loves pain itself, who seeks after it and wants to have it, </span>
                    </Col>
                </Row>

                <Row className="justify-content-center master-Image-Container">
                    <Col md={4} className="text-center">
                        <div className="image-container1">
                            <div>
                                <span>CEO</span>
                                <span>CHU THỊ HOA</span>
                            </div>
                            <img src={HomeImage4} className="masterImage1" />
                        </div>
                    </Col>

                    <Col md={4} className="text-start">
                        <div className="image-container2">
                            <div>
                                <span>CHUYÊN GIA</span>
                                <span>JAMES BROGAN</span>
                            </div>
                            <img src={HomeImage5} className="masterImage2" />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <h5 className="aboutUsTitle">Sản phẩm</h5>
                        <span className="productDes">Neque porro quisquam est qui dolorem ipsum quia dolor</span>
                    </Col>
                </Row>

                <br />

                <Row className="justify-content-center">
                    <Col md={3} className="productHome">
                        <img src={HomeImage6} alt="Vina Glow Logo" className="product-image" />
                        <div className="productName">
                            Cải thiện sinh lý Macax
                        </div>
                    </Col>

                    <Col md={3} className="productHome">
                        <img src={HomeImage7} alt="Vina Glow Logo" className="product-image" />
                        <div className="productName">
                            Hỗ trợ giảm béo Ami Slim
                        </div>
                    </Col>

                    <Col md={3} className="productHome">
                        <img src={HomeImage8} alt="Vina Glow Logo" className="product-image" />
                        <div className="productName">
                            Xịt tan mỡ NaNo Slim
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container-fluid homeContainer2">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <span className="title"> Tin tức</span><br />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={9} className="text-center">
                        <a className="seemore">See more</a><br />
                    </Col>
                </Row>

                <br />

                <Row className="justify-content-center">
                    <Col md={3} className="information-left">
                        <div className="information-container-1" onClick={() => navigate('/tin-tuc-chi-tiet/')}>
                            <img src={HomeImage9} className="information-image-1" />
                            <div className="information-des">
                                <div className="news-title">
                                    <span>eque porro quisquam</span>
                                </div>
                                <span>Neque porro quisquam est qui dolorem ipsum quia dol Neque porro quisquam est qui</span>
                            </div>
                        </div>

                        <br />
                        <div className="information-container-1" onClick={() => navigate('/tin-tuc-chi-tiet/')}>
                            <img src={HomeImage10} className="information-image-1" />
                            <div className="information-des">
                                <div className="news-title">
                                    <span>eque porro quisquam</span>
                                </div>
                                <span>Neque porro quisquam est qui dolorem ipsum quia dol Neque porro quisquam est qui</span>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="information-right">
                        <img src={HomeImage11} className="information-image-2" />
                        <div className="bottomInformation-right">
                            <div className="news-title">
                                <span>eque porro quisquam</span>
                            </div>
                            <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, <br />
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</span>
                        </div>

                    </Col>
                </Row>
            </div>

            <Footer />
        </div >
    );
};

export default HomePage;
