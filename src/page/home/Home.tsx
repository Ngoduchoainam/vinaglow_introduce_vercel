import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.scss'
import Header from "../../CommonComponent/Header/Header.tsx";
import HomeIcon from '../../MockupData/Image/homeIcon1.png';
import HomeIcon2 from '../../MockupData/Image/homeIcon2.png';
import HomeIcon3 from '../../MockupData/Image/homeIcon3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeImage4 from '../../MockupData/Image/rectangle_112.png'
import HomeImage5 from '../../MockupData/Image/rectangle_111.png'
import HomeImage6 from '../../MockupData/Image/Rectangle_34.png'
import HomeImage7 from '../../MockupData/Image/Rectangle_35.png'
import HomeImage8 from '../../MockupData/Image/Rectangle_36.png'
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import '../../App.css'
import { useNavigate } from "react-router-dom";
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import { NewsObject } from "../../Entities/News.ts";
import { Image } from "../../Entities/image.ts";
import ListNewsSearch from "../../CommonComponent/ListNewsSearch/ListNewsSearch.tsx";
import { Utility } from "../../utility/Utility.ts";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { HomeContent } from "../../Entities/HomeContent.tsx";

const HomePage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const [hasSearch, setHasSearch] = useState(false);
    const [lstNews, setLstNews] = useState<Array<NewsObject>>([]);
    const [filterText, setFilterText] = useState("");
    const [bannerUrl, setBannerUrl] = useState("");
    const [lstBannerImage, setLstBannerImage] = useState<Array<Image>>([]);
    const [lstSlideImage, setLstSlideImage] = useState<Array<Image>>([]);
    const [homeContent, setHomeContent] = useState(new HomeContent());
    const [lstImagePosition1, setLstImagePosition1] = useState<Array<Image>>([]);
    const [lstImagePosition2, setLstImagePosition2] = useState<Array<Image>>([]);
    const [lstImagePositionProduct, setLstImagePositionProduct] = useState<Array<Image>>([]);

    const GetListNewHome = async () => {
        try {
            const url = ApiUrl.GetNewsHome(3);
            const res = await ApiProtocol.callAPI(url, undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                data.forEach((item: NewsObject) => {
                    item.FullImageUrl = Utility.ApiUrlPublic + item.ImageUrl;
                });

                setLstNews(data);
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    }

    const GetListBanner = async () => {
        try {
            const res = await ApiProtocol.callAPI(ApiUrl.GetListSlideBanner(2, 1), undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                data.forEach((item: Image) => {
                    item.FullImageUrl = Utility.ApiUrlPublic + item.ImageUrl;
                });

                setLstBannerImage(data);
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    }

    const GetListSlide = async () => {
        try {
            const res = await ApiProtocol.callAPI(ApiUrl.GetListSlideBanner(1, 1), undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                data.forEach((item: Image) => {
                    item.FullImageUrl = Utility.ApiUrlPublic + item.ImageUrl;
                });

                let lstPos1 = data.filter((item) => item.PositionPage == 1);
                setLstImagePosition1(lstPos1);

                setLstSlideImage(data);
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    }

    const GetListImage = async () => {
        try {
            const res = await ApiProtocol.callAPI(ApiUrl.GetListSlideBanner(3, 1), undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                data.forEach((item: Image) => {
                    item.FullImageUrl = Utility.ApiUrlPublic + item.ImageUrl;
                });

                let lstPos2 = data.filter((item) => item.PositionPage == 2);
                let lstPosProduct = data.filter((item) => item.PositionPage == Utility.PositionImageProductHome);

                console.log(123, lstImagePositionProduct)
                setLstImagePosition2(lstPos2);
                setLstImagePositionProduct(lstPosProduct);
                setLstSlideImage(data);
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    }

    const GetPageContent = async () => {
        try {
            const res = await ApiProtocol.callAPI(ApiUrl.GetPageContent(1), undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                console.log(92, data);
                setHomeContent(data);
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    }

    useEffect(() => {
        GetListNewHome();
        GetListBanner();
        GetListSlide();
        GetPageContent();
        GetListImage();
    }, []);

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

    const SearchPost = async (loading?: boolean, filter?: any, resetResult?: boolean) => {
        if (!filter) {
            setHasSearch(false)
        }
        else {
            try {
                setHasSearch(true);
                setFilterText(filter);
            } catch (error) {
                console.log(132, error)
            }

        }
    }

    return (
        <div>
            <Helmet>
                <title>Vina Glow - Trang chủ</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <Header SearchPost={SearchPost} />

            {!hasSearch && <>
                <div className="container-fluid home-banner-container">
                    <Row className="justify-content-center">
                        <Swiper
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            style={{ display: "flex", flexDirection: "row" }}
                        >
                            {lstBannerImage.map((banner, index) => (
                                <SwiperSlide>
                                    <Col className="text-center mainContent" style={{ backgroundImage: `url(${banner.FullImageUrl})`, backgroundSize: "contain" }}>
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
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Row>
                </div>

                <div className={`container homeContainer2 ${isVisible ? "visible" : ""}`}
                    ref={containerRef}>
                    <Row className="justify-content-center">
                        <Col md={7} className="home-container-medium">
                            <div dangerouslySetInnerHTML={{ __html: homeContent.Unit1 || "" }} className="home-news-des" />
                        </Col>

                        <Col md={5} className="text-center home-medium-image-container-1">
                            <img src={lstImagePosition1[0]?.FullImageUrl} className="homeImage1" />
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
                                <img src={lstImagePosition2[0]?.FullImageUrl} className="home-medium1-image" />
                                <div className="text-overlay text-overlay-1">
                                    <h5 className="aboutUsTitle activity-field">Lĩnh vực hoạt động</h5>
                                    <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, </span>
                                </div>
                            </div>
                        </Col>

                        <Col md={3} className="homeMediumFrame1">
                            <div className="image-wrapper">
                                <img src={lstImagePosition2[1]?.FullImageUrl} className="homeImage3" />
                                <div className="text-overlay text-overlay-2">
                                    <h5 className="aboutUsTitle activity-field">Lĩnh vực hoạt động</h5>
                                    <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, </span>
                                </div>
                            </div>
                        </Col>

                        <Col md={3} className="homeMediumFrame2">
                            <div className="image-wrapper">
                                <img src={lstImagePosition2[2]?.FullImageUrl} className="home-medium1-image2" />
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
                            <div dangerouslySetInnerHTML={{ __html: homeContent.Unit4 || "" }} className="home-news-des" />
                        </Col>
                    </Row>

                    <Row className="justify-content-center master-Image-Container">
                        <Col md={4} className="text-center">
                            <div className="image-container1">
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: homeContent.Unit5 || "" }} className="home-news-des" />
                                </div>
                                <img src={HomeImage4} className="masterImage1" />
                            </div>
                        </Col>

                        <Col md={4} className="text-start">
                            <div className="image-container2">
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: homeContent.Unit6 || "" }} className="home-news-des" />
                                </div>
                                <img src={HomeImage5} className="masterImage2" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="container-fluid">
                    <Row className="justify-content-center">
                        <Col md={12} className="text-center">
                            <div dangerouslySetInnerHTML={{ __html: homeContent.Unit7 || "" }} className="home-news-des" />
                        </Col>
                    </Row>

                    <br />

                    <Row className="justify-content-center">
                        {lstImagePositionProduct.map((item) => (
                            <Col md={3} className="productHome">
                                <img src={item.FullImageUrl} alt="Vina Glow Logo" className="product-image" />
                                <div className="productName">
                                    {item.Note}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                <div className="container-fluid homeContainer2 home-news">
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
                                <img src={lstNews[0]?.FullImageUrl} className="information-image-1"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/200?text=Image+Not+Found";
                                    }} />
                                <div className="information-des">
                                    <div className="home-news-title">
                                        <span>{lstNews[0]?.Title}</span>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: lstNews[0]?.Description || "" }} className="home-news-des" />
                                </div>
                            </div>

                            <br />
                            <div className="information-container-1" onClick={() => navigate('/tin-tuc-chi-tiet/')}>
                                <img src={lstNews[1]?.FullImageUrl} className="information-image-1"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/200?text=Image+Not+Found";
                                    }} />
                                <div className="information-des">
                                    <div className="home-news-title">
                                        <span>{lstNews[1]?.Title}</span>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: lstNews[1]?.Description || "" }} className="home-news-des" />
                                </div>
                            </div>
                        </Col>

                        <Col md={6} className="information-right">
                            <img src={lstNews[2]?.FullImageUrl} className="information-image-2"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/200?text=Image+Not+Found";
                                }} />
                            <div className="bottomInformation-right">
                                <div className="home-news-title home-news-title-right">
                                    <span>{lstNews[2]?.Title}</span>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: lstNews[2]?.Description || "" }} className="home-news-des" />
                            </div>

                        </Col>
                    </Row>
                </div>
            </>}

            {
                hasSearch && <>
                    <ListNewsSearch isNewsHome={true} filter={filterText} />
                </>
            }
            <Footer />
        </div >
    );
};

export default HomePage;
