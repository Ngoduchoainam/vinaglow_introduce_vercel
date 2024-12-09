import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../CommonComponent/Header/Header.tsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ecosystem1 from '../../MockupData/Image/ecosystem_6.png'
import Ecosystem2 from '../../MockupData/Image/ecosystem_4.png'
import Ecosystem3 from '../../MockupData/Image/ecosystem_5.png'
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import './Ecosystem.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ArrowTimeDown from '../../MockupData/Image/ecosystem_time_arrow_down.png'
import EcosystemTime1 from '../../MockupData/Image/ecosystem_time-2.png'
import EcosystemTime2 from '../../MockupData/Image/ecosystem_time_3.png'
import EcosystemTime3 from '../../MockupData/Image/ecosystem_time_4.png'
import EcosystemTime4 from '../../MockupData/Image/ecosystem_time6.png'
import ListNewsSearch from "../../CommonComponent/ListNewsSearch/ListNewsSearch.tsx";
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import { Utility } from "../../utility/Utility.ts";

const Ecosystem = () => {
    const [activeImages, setActiveImages] = useState<string[]>([]);
    const navigate = useNavigate();
    const [hasSearch, setHasSearch] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [categoryId, setCategoryId] = useState();
    const [bannerUrl, setBannerUrl] = useState("");

    const GetCategoryid = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetMenuByUrl("/he-sinh-thai"), undefined, "GET");

            if (res) {
                let result = await res?.json();

                setCategoryId(result.data.CatalogNewsId);
            }
        } catch (error) {

        }
    }

    const GetListSlideBanner = async () => {
        try {
            const res = await ApiProtocol.callAPI(ApiUrl.GetListSlideBanner(2, 6, 0), undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                setBannerUrl(Utility.ApiUrlPublic + data[0].ImageUrl);
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    }


    useEffect(() => {
        GetCategoryid();
        GetListSlideBanner();

    }, []);

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

    const SearchPost = async (loading?: boolean, filter?: any, resetResult?: boolean) => {
        console.log("Call here", filter)
        if (!filter) {
            setHasSearch(false)
        }
        else {
            try {
                setHasSearch(true);
                setFilterText(filter);
            } catch (error) {
            }

        }
    }
    return (
        <div>
            {/* SEO Optimization */}
            <Helmet>
                <title>Vina Glow - Hệ sinh thái</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <Header SearchPost={SearchPost} />

            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col className="text-center mainContent-ecosystem" style={{ backgroundImage: `url(${bannerUrl})` }}>
                        <div className="bottomMainSlide-ecosystem">
                            <span className="about-us"></span><br />
                            <span className="aboutUsRoute"></span>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container news-container-navigate">
                <Row>
                    <img src={HomeImage12} alt="Vina Glow Logo" className="bgImage-ecosystem" />
                </Row>
                <Row className="justify-content-center">
                    <Col md={12}>
                        <div className="navigate-news-detail">
                            <span className="navigate-page-title" onClick={() => navigate('/')}>Trang chủ </span><i className="fa-solid fa-chevron-right"></i>Hệ sinh thái
                        </div>
                    </Col>
                </Row>
            </div>

            {!hasSearch && <>
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


                <div className="container-fluid ecosystem-general-container">
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
            </>}

            {hasSearch && <>
                <ListNewsSearch categoryId={categoryId} filter={filterText} />
            </>}
            <Footer />
        </div >
    );
};

export default Ecosystem;
