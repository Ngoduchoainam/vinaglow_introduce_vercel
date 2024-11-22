import React from "react";
import { Container, Row, Col, Button, Card, Nav, Form, FormControl } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../MockupData/Image/logo.png'
import HomeMainSlide from '../../MockupData/Image/homeMainSlide.png'
import './Home.css'

const HomePage = () => {


    return (
        <div>
            {/* SEO Optimization */}
            <Helmet>
                <title>Vina Glow - Home</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <div className="header-top bg-light py-2">
                <Container>
                    <Row className="align-items-center">
                        <Col md={4}>
                            <Link to="/" className="brand-logo">
                                <img src={Logo} alt="Vina Glow Logo" style={{ height: '40px' }} />
                            </Link>
                        </Col>
                        <Col md={5} className="text-md-right">
                            <Nav className="header-nav">
                                <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
                                <Nav.Link as={Link} to="/about">Về chúng tôi</Nav.Link>
                                <Nav.Link as={Link} to="/about">Hệ sinh thái</Nav.Link>
                                <Nav.Link as={Link} to="/about">Tin tức</Nav.Link>
                                <Nav.Link as={Link} to="/about">Tuyển dụng</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Liên hệ</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={3} className="text-md-right">
                            <Nav className="header-nav">
                                <Form>
                                    <FormControl type="text" placeholder="Tìm kiếm" className="mr-sm-2" />
                                    <Button variant="outline-success">Tìm kiếm</Button>
                                </Form>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>

            <header className="bg-light py-3">
                <div className="container-fluid">
                    <Row className="justify-content-center">
                        <Col md={12} className="text-center mainContent">
                            <h1 className="display-4">Chuyển Doanh Nghiệp Cùng Vina Glow</h1>
                            <p className="lead">Với các sản phẩm chất lượng cao, chúng tôi giúp doanh nghiệp của bạn phát triển mạnh mẽ.</p>
                            <Button variant="primary" size="lg">XIN GIỚI THIỆU</Button>

                        </Col>
                    </Row>
                </div>
            </header>

            {/* Header Section */}
            <header className="bg-light py-3">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} className="text-center">
                            <h1 className="display-4">Chuyển Doanh Nghiệp Cùng Vina Glow</h1>
                            <p className="lead">Với các sản phẩm chất lượng cao, chúng tôi giúp doanh nghiệp của bạn phát triển mạnh mẽ.</p>
                            <Button variant="primary" size="lg">XIN GIỚI THIỆU</Button>
                        </Col>
                    </Row>
                </Container>
            </header>

            {/* Main Content Section */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <h2>Vì Sao Chọn Vina Glow?</h2>
                                    <p>Chúng tôi cung cấp các sản phẩm dinh dưỡng chất lượng cao, giúp cải thiện sức khỏe và sắc đẹp.</p>
                                    <Button variant="success">Tìm Hiểu Thêm</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <img src="path_to_image.jpg" alt="Product" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer Section */}
            <footer className="bg-dark text-white py-4">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h5>Vina Glow</h5>
                            <p>Địa chỉ: Số 1, Phố ABC, Thành phố XYZ</p>
                        </Col>
                        <Col md={6} className="text-md-right">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="/" className="text-white">Trang Chủ</a></li>
                                <li className="list-inline-item"><a href="/contact" className="text-white">Liên Hệ</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default HomePage;
