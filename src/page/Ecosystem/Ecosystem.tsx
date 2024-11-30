import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Nav, Form, FormControl } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
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
import AboutUs1 from '../../MockupData/Image/AboutUs1.png'
import AboutUs3 from '../../MockupData/Image/Rectangle_130.png'
import AboutUs5 from '../../MockupData/Image/aboutUs5.png'
import AboutUs6 from '../../MockupData/Image/aboutUs6.png'
import AboutUs7 from '../../MockupData/Image/Ellipse_1.png'
import AboutUs8 from '../../MockupData/Image/Ellipse_2.png'
import AboutUs9 from '../../MockupData/Image/Ellipse_3.png'
import AboutUs10 from '../../MockupData/Image/Rectangle_109.png'
import './Ecosystem.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ArrowTimeDown from '../../MockupData/Image/ecosystem_time_arrow_down.png'
import EcosystemTime1 from '../../MockupData/Image/ecosystem_time-2.png'
import EcosystemTime2 from '../../MockupData/Image/ecosystem_time_3.png'
import EcosystemTime3 from '../../MockupData/Image/ecosystem_time_4.png'
import EcosystemTime4 from '../../MockupData/Image/ecosystem_time6.png'

const Ecosystem = () => {
    const [activeImages, setActiveImages] = useState<string[]>([]);

    const handleImageClick = (imageName) => {
        setActiveImages((prevActiveImages) => {
            // Toggle the active state for the clicked image
            if (prevActiveImages.includes(imageName)) {
                return prevActiveImages.filter((img) => img !== imageName);
            } else {
                return [...prevActiveImages, imageName];
            }
        });
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
                    <Col className="text-center mainContent-ecosystem">
                        <div className="bottomMainSlide-ecosystem">
                            <span className="about-us">Hệ sinh thái</span><br />
                            <span className="aboutUsRoute">Trang chủ <i className="fa-solid fa-chevron-right"></i> Hệ sinh thái</span>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container ecosystem-container-1">
                <Row className="justify-content-center">
                    <Col md={6} className="ecosystem-intro-left-container">
                        <div>
                            <div className="ecosystem-intro-title">
                                Giới Thiệu Về Hệ Sinh Thái VNR Holding: Tiên Phong Trong Đầu Tư Và Phát Triển
                            </div>
                            <div className="ecosystem-intro-head-content">
                                VNR Holding tự hào là một hệ sinh thái đa dạng, với chiến lược đầu tư toàn diện vào các lĩnh vực tiềm năng nhằm mang đến giá trị bền vững và trải nghiệm đẳng cấp cho khách hàng.
                            </div>
                        </div>
                        <div onClick={() => handleImageClick("ecosystem1")} className="ecosystem-intro-image1-container">
                            <div className="ecosystem-intro-image-container">
                                <img src={Ecosystem1} className="ecosystem-intro-image" />
                            </div>

                            {activeImages.includes("ecosystem1") && (
                                <div className="footer-ecosystem-intro">
                                    <div className="title ecosystem-intro-title-detail">
                                        Thương Mại Điện Tử – Mở Ra Kỷ Nguyên Mua Sắm Mới
                                    </div>
                                    <div className="ecosystem-intro-detail">
                                        Với sự phát triển mạnh mẽ của nền kinh tế số, VNR Holding cũng không ngừng đẩy mạnh đầu tư vào lĩnh vực thương mại điện tử.
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>

                    <Col md={6} className="ecosystem-intro-right-container">
                        <div onClick={() => handleImageClick("ecosystem2")} className="ecosystem-intro-right-container-frame">
                            <div className="ecosystem-intro-image-container">
                                <img src={Ecosystem2} className="ecosystem-intro-image" />
                            </div>
                            {activeImages.includes("ecosystem2") && (
                                <div className="footer-ecosystem-intro">
                                    <div className="title ecosystem-intro-title-detail">
                                        Bất Động Sản – Kiến Tạo Không Gian Sống Đẳng Cấp
                                    </div>
                                    <div className="ecosystem-intro-detail">
                                        Trong lĩnh vực bất động sản, VNR Holding luôn đi đầu trong việc xây dựng những dự án mang tính biểu tượng, đáp ứng mọi nhu cầu
                                    </div>
                                </div>
                            )}
                        </div>
                        <div onClick={() => handleImageClick("ecosystem3")}>
                            <div className="ecosystem-intro-image-container">
                                <img src={Ecosystem3} className="ecosystem-intro-image" />
                            </div>

                            {activeImages.includes("ecosystem3") && (
                                <div className="footer-ecosystem-intro">
                                    <div className="title ecosystem-intro-title-detail">
                                        Công Nghệ Vinasoftware Đột Phá Với Ứng Dụng Trải Nghiệm
                                    </div>
                                    <div className="ecosystem-intro-detail">
                                        Công nghệ chính là chìa khóa cho sự phát triển bền vững trong thời đại mới. Với Vinasoftware – một trong những dự án phát triển công nghệ
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container ecosystem-container">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <div className="formation-history">
                            LỊCH SỬ HÌNH THÀNH
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center formation-history-des">
                    <Col md={6} className="text-center">
                        <div>
                            VINARA GROUP luôn trân trọng giá trị nền tảng cho sự phát triển, đó là các cơ hội được hợp tác với Quý khách hàng. Và không có bất kỳ khó khăn...
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container ecosystem-container-2">
                <Row className="justify-content-center">
                    <Col md={3} className="time-history-container">
                        <div>Khi tất cả bắt đầu</div>
                        <div className="time-history">2018 - 2019</div>
                        <img src={ArrowTimeDown} />
                    </Col>

                    <Col md={3} className="time-history-container">
                        <div>Mở rộng quy mô và đột phá</div>
                        <div className="time-history">2020 - 2021</div>
                        <img src={ArrowTimeDown} />
                    </Col>

                    <Col md={3} className="time-history-container">
                        <div>Phát triển tăng trưởng</div>
                        <div className="time-history">2022 - 2023</div>
                        <img src={ArrowTimeDown} />
                    </Col>

                    <Col md={3} className="time-history-container">
                        <div>Vinara cho tất cả</div>
                        <div className="time-history">2023 đến nay</div>
                        <img src={ArrowTimeDown} />
                    </Col>
                </Row>
            </div>

            <div className="container-fluid">
                <div className="custom-line-container">
                    <div className="custom-line"></div>
                </div>
            </div>

            <div className="container ecosystem-container-3">
                <Row className="justify-content-center">
                    <Col md={3} className="time-history-container-bottom">
                        <img src={EcosystemTime1} />
                        <ul>
                            <li>
                                Kết thúc năm 2018 - 2019 với 80 nhân sự ở tất cả các phòng ban
                            </li>
                            <li>
                                Bắt đầu phát triển các sản phẩm đầu tiên về thực phẩm chức năng
                            </li>
                        </ul>
                    </Col>

                    <Col md={3} className="time-history-container-bottom">
                        <img src={EcosystemTime2} />
                        <ul>
                            <li>
                                Kết thúc năm 2018 - 2019 với 80 nhân sự ở tất cả các phòng ban
                            </li>
                            <li>
                                Bắt đầu phát triển các sản phẩm đầu tiên về thực phẩm chức năng
                            </li>
                        </ul>
                    </Col>

                    <Col md={3} className="time-history-container-bottom">
                        <img src={EcosystemTime3} />
                        <ul>
                            <li>
                                Kết thúc năm 2018 - 2019 với 80 nhân sự ở tất cả các phòng ban
                            </li>
                            <li>
                                Bắt đầu phát triển các sản phẩm đầu tiên về thực phẩm chức năng
                            </li>
                        </ul>
                    </Col>

                    <Col md={3} className="time-history-container-bottom">
                        <img src={EcosystemTime4} />
                        <ul>
                            <li>
                                Kết thúc năm 2018 - 2019 với 80 nhân sự ở tất cả các phòng ban
                            </li>
                            <li>
                                Bắt đầu phát triển các sản phẩm đầu tiên về thực phẩm chức năng
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>


            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center ecosystem-general-title">
                        Tổng quan hệ sinh thái
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <div className="bottom-logo-ecosystem-container-1">
                        <div className="bottom-logo-container-ecosystem-small"></div>
                        <div className="arrow-logo">
                            <img src={ArrowTimeDown} />
                        </div>
                        <div className="bottom-logo-container-ecosystem"></div>
                        <div className="arrow-logo-2">
                            <img src={ArrowTimeDown} />
                        </div>
                        <div className="bottom-logo-container-ecosystem-small"></div>
                    </div >
                </Row>

                <Row className="justify-content-center">
                    <div className="bottom-logo-ecosystem-container-2">
                        <div className="bottom-logo-container-ecosystem-small-2"></div>
                        <div className="arrow-logo-3">
                            <img src={ArrowTimeDown} />
                        </div>
                        <div className="bottom-logo-container-ecosystem-small-3"></div>
                        <div className="arrow-logo-4">
                            <img src={ArrowTimeDown} />
                        </div>

                        <div className="arrow-logo-5">
                            <img src={ArrowTimeDown} />
                        </div>
                        <div className="bottom-logo-container-ecosystem-small-4"></div>
                    </div >
                </Row>
            </div>
            <Footer />
        </div >
    );
};

export default Ecosystem;
