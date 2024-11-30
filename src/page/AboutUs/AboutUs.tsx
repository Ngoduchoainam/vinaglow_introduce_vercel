import React, { useEffect, useRef, useState } from "react";
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
import AboutUs1 from '../../MockupData/Image/AboutUs1.png'
import AboutUs3 from '../../MockupData/Image/Rectangle_130.png'
import AboutUs5 from '../../MockupData/Image/aboutUs5.png'
import AboutUs6 from '../../MockupData/Image/aboutUs6.png'
import AboutUs7 from '../../MockupData/Image/Ellipse_1.png'
import AboutUs8 from '../../MockupData/Image/Ellipse_2.png'
import AboutUs9 from '../../MockupData/Image/Ellipse_3.png'
import AboutUs10 from '../../MockupData/Image/Rectangle_109.png'
import './AboutUs.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState<boolean[]>([]);
    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const updatedVisibility = entries.map((entry) => entry.isIntersecting);
                setIsVisible((prev) => {
                    const newVisibility = [...prev];
                    entries.forEach((entry, index) => {
                        const refIndex = containerRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (refIndex !== -1) {
                            newVisibility[refIndex] = entry.isIntersecting;
                        }
                    });
                    return newVisibility;
                });
            },
            { threshold: 0.2 }
        );

        if (containerRefs.current) {
            containerRefs.current.forEach((ref) => {
                if (ref) observer.observe(ref);
            });
        }

        return () => {
            if (containerRefs.current) {
                containerRefs.current.forEach((ref) => {
                    if (ref) observer.unobserve(ref);
                });
            }
        };
    }, []);

    const renderMediumContainer = (className: string, content: any, index: number) => (
        <div
            className={`${className} ${isVisible[index] ? "visible" : ""}`}
            ref={(el) => (containerRefs.current[index] = el)}
        >
            {content}
        </div>
    );

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
                    <Col className="text-center mainContentAboutUs">
                        <div className="bottomMainSlideAboutUs">
                            <span className="about-us">Về chúng tôi</span><br />
                            <span className="aboutUsRoute">Trang chủ <i className="fa-solid fa-chevron-right"></i> Về chúng tôi</span>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container aboutUs-container-1">
                <Row className="justify-content-center">
                    <Col md={12} className="brand-story-container">
                        {renderMediumContainer("brand-story", <>
                            <div className="brand-story-title">Câu chuyện thương hiệu</div><br />
                            <div>
                                Vitaglow không chỉ là một thương hiệu, mà là một hành trình đầy cảm xúc được thêu dệt từ những khoảnh khắc của cuộc sống, của hy vọng, và của lòng kiên trì. <br /><br />

                                Ở trung tâm của câu chuyện này là chị Chu Thị Hoa (Lena) – người sáng lập với một trái tim đầy nhiệt huyết, luôn tràn đầy khát khao mang lại điều tốt đẹp cho mọi người. <br /><br />

                                Vitaglow không ngừng nỗ lực tạo ra những giải pháp sức khỏe tốt nhất, không chỉ để cải thiện cơ thể mà còn giúp mọi người tìm lại sự cân bằng trong cuộc sống.
                            </div>
                        </>, 0)}
                        {renderMediumContainer("aboutUs-image1-container", <>
                            <img src={AboutUs2} className="aboutUs-image1" />
                        </>, 1)}
                    </Col>
                </Row>
            </div>

            <div className="container aboutUs-container-2">
                <Row>
                    <img src={HomeImage12} alt="Vina Glow Logo" className="bgImage-aboutUs" />
                </Row>
                {renderMediumContainer("about-us-medium-container-frame", <>
                    <Row className="justify-content-center">
                        <Col md={1}></Col>
                        <Col md={5} className="about-us-medium-container">
                            <div className="about-us-medium-content1">
                                <div className="about-us-title1">Tầm nhìn</div>
                                <div className="about-us-medium-maincontent1">Vitaglow mong muốn trở thành thương hiệu hàng đầu trong lĩnh vực chăm sóc sức khỏe không chỉ tại Việt Nam mà còn trên toàn cầu</div>
                            </div>
                        </Col>

                        <Col md={5} >
                            <div className="about-us-medium-content2">
                                <div className="about-us-title2">Sứ mệnh</div>
                                <div className="about-us-medium-maincontent1">Vitaglow cam kết mang lại những giải pháp chăm sóc sức khỏe toàn diện, chất lượng và bền vững cho mọi đối tượng khách hàng</div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md={1}></Col>
                        <Col md={5} className="about-us-medium-container">
                            <div className="about-us-medium-content3">
                                <div className="about-us-title3">Giá trị cốt lõi</div>
                                <div className="about-us-medium-content3-text about-us-medium-maincontent1">Chúng tôi đặt chất lượng làm nền tảng cho mọi hoạt động, đảm bảo từng sản phẩm đều đạt được những tiêu chuẩn cao nhất về an toàn</div>
                            </div>
                        </Col>

                        <Col md={5} >
                            <div className="about-us-medium-content4">
                                <div className="about-us-title4">Văn hóa công ty</div>
                                <div className="about-us-medium-content3-text about-us-medium-maincontent1">Văn hóa tại Vitaglow được xây dựng dựa trên tinh thần đồng đội, sáng tạo và sự tận tâm tạo ra một môi trường làm việc phát triển</div>
                            </div>
                        </Col>
                    </Row>
                </>, 2)}
            </div>

            <div className="container-fluid homeContainer2">
                <Row className="justify-content-center">
                    <Col md={3} className="text-center CEO-container">
                        <Row className="justify-content-center CEO-content">
                            <Col md={12}>
                                <img src={AboutUs3} className="aboutUs-image-3" />
                            </Col>
                        </Row>

                        <Row lassName="justify-content-center CEO-content-name">
                            <Col md={12} className="title CEO-content-name">
                                <div>Chu Thị Hoa</div>
                                <div>CEO & Founder</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={3} className="text-center CEO-container">
                        <Row className="justify-content-center">
                            <Col md={12} className="title CEO-content-name-second">
                                <div>Meet the Founder</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center CEO-content-second">
                            <Col md={12}>
                                <img src={AboutUs3} className="aboutUs-image-3" />
                            </Col>
                        </Row>
                        <Row lassName="justify-content-center CEO-content-name">
                            <Col md={12} className="title CEO-content-name">
                                <div>Chu Thị Hoa</div>
                                <div>CEO & Founder</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={3} className="text-center CEO-container">
                        <Row className="justify-content-center CEO-content">
                            <Col md={12}>
                                <img src={AboutUs3} className="aboutUs-image-3" />
                            </Col>
                        </Row>

                        <Row lassName="justify-content-center CEO-content-name">
                            <Col md={12} className="title CEO-content-name">
                                <div>Chu Thị Hoa</div>
                                <div>CEO & Founder</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className="container-fluid homeContainer2">

                <Row className="justify-content-center about-us-medium-3-container">
                    <Col md={4} className="about-us-medium-3">
                        <img src={AboutUs5} className="about-us-medium-3-image" />
                        <div className="title value-statement">Tuyên ngôn giá trị</div>
                        <div className="about-us-medium-3-content">
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                        </div>
                    </Col>

                    <Col md={5} className="about-us-medium-3">
                        <img src={AboutUs6} className="about-us-medium-3-image-2" />
                    </Col>
                </Row>
            </div>

            <div className="container aboutUs-container-3">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <span className="title">Bạn hiểu thế nào về chúng tôi?</span><br />
                    </Col>
                </Row>

                <br />

                <Row className="justify-content-center">
                    <Col md={7} className="text-center">
                        <span>Vina Glow là công ty thực phẩm chức năng hàng đầu, cam kết mang đến cho người tiêu dùng những sản phẩm chăm sóc sức khỏe và sắc đẹp chất lượng cao, an toàn và hiệu quả. Được xây dựng trên nền tảng kết hợp giữa nghiên cứu khoa học hiện đại và tinh hoa thảo dược truyền thống.</span>
                    </Col>
                </Row>

                <br />
                <br />

                <Row className="justify-content-center">
                    <Col md={3} className="bottom-aboutUs-container">
                        <div className="bottom-image-aboutU-container">
                            <img src={AboutUs7} className="bottom-image-aboutUs" />
                        </div>
                    </Col>
                    <Col md={3} className="bottom-aboutUs-container">
                        <div className="bottom-image-aboutU-container">
                            <img src={AboutUs8} className="bottom-image-aboutUs" />
                        </div>
                    </Col>
                    <Col md={3} className="bottom-aboutUs-container">
                        <div className="bottom-image-aboutU-container">
                            <img src={AboutUs9} className="bottom-image-aboutUs" />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container homeContainer2">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <span className="title">Giấy chứng nhận doanh nghiệp</span><br />
                    </Col>
                </Row>

                <br />

                <Row className="justify-content-center">
                    <Col md={12}>
                        <div>
                            <img src={AboutUs10} className="bottom-image-aboutUs" />
                        </div>
                    </Col>
                </Row>
            </div>


            <br />

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default AboutUs;
