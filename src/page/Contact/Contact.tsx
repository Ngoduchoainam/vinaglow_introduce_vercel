import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../CommonComponent/Header/Header.tsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import './Contact.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import Alert from "@mui/material/Alert"; // Import Alert từ MUI
import Stack from "@mui/material/Stack";
import ListNewsSearch from "../../CommonComponent/ListNewsSearch/ListNewsSearch.tsx";
import { Utility } from "../../utility/Utility.ts";
import { ConfigObjectContext } from "../../ConfigObjectContext.tsx";

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
    const [fullName, setFullName] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState<string | null>(null);
    const [hasSearch, setHasSearch] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [categoryId, setCategoryId] = useState();
    const [bannerUrl, setBannerUrl] = useState("");
    const config = useContext(ConfigObjectContext); // Use context directly

    if (!config) {
        // Handle the case where context is undefined (if it's not wrapped in the provider)
        throw new Error("ConfigObjectContext is not provided!");
    }

    console.log(48, config)

    const GetCategoryid = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetMenuByUrl("/lien-he"), undefined, "GET");

            if (res) {
                let result = await res?.json();
                setCategoryId(result.data.CatalogNewsId);
            }
        } catch (error) {

        }
    }

    const GetListSlideBanner = async () => {
        try {
            const res = await ApiProtocol.callAPI(ApiUrl.GetListSlideBanner(2, 4), undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                setBannerUrl(encodeURI(Utility.ApiUrlLocal + data[0].ImageUrl));
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    }

    useEffect(() => {
        GetCategoryid();
        GetListSlideBanner();

    }, []);


    const handleSubmit = async () => {
        try {

            // Chuẩn bị dữ liệu
            const formData = new FormData();
            formData.append("FullName", fullName || "Test");
            formData.append("Message", message || "Test");

            await ApiProtocol.callAPIImage(
                ApiUrl.SendContact,
                formData,
                "POST"
            );

            setAlert("Gửi liên hệ thành công!");

        } catch (error) {
            console.error("Error uploading file:", error);
            setAlert("Đã xảy ra lỗi khi gửi liên hệ.");
        } finally {
            // Ẩn thông báo sau 3 giây
            setTimeout(() => setAlert(null), 3000);
        }
    };

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
            {/* SEO Optimization */}
            <Helmet>
                <title>Vina Glow - Liên hệ</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <Header SearchPost={SearchPost} />

            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col className="text-center mainContent-contact" style={{ backgroundImage: `url(${bannerUrl})` }}>
                        <div className="bottomMainSlide-ecosystem">
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container-fluid contac-container-0">
                <Row>
                    <img src={HomeImage12} alt="Vina Glow Logo" className="bgImage-contact" />
                </Row>
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <div className="navigate-news-detail">
                            <span onClick={() => navigate('/')} className="navigate-page-title">Trang chủ</span> <i className="fa-solid fa-chevron-right"></i> <span onClick={() => navigate('/tin-tuc')} className="navigate-page-title">Liên hệ</span>
                        </div>
                        <div className="contact-title">Hãy để đội ngũ tư vấn VINA GLOW hỗ trợ bạn dù bất kỳ nơi đâu</div>
                    </Col>
                </Row>
            </div>

            {!hasSearch && <>

                <div className="container contac-container-1">
                    <Row className="justify-content-center">
                        <Col md={5} className="left-contact-container">
                            <div>
                                <div>
                                    <i className="fa-solid fa-phone"></i>
                                    <span className="information">{config.Hotline}</span>
                                </div>
                                <div className="contact-infor-index2 index-2">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span className="information"><div dangerouslySetInnerHTML={{ __html: config.Address || "" }} className="home-news-des" /></span>
                                </div>
                                <div className="contact-infor-index2">
                                    <i className="fa-solid fa-at"></i>
                                    <span className="information">{config.Email}</span>
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
                                    <Button variant="primary" size="lg" className="send-contact-button" onClick={handleSubmit}>Gửi liên hệ</Button>
                                </div>
                            </div>
                        </Col>

                        <Col md={7} className="right-contact-container">
                            <LoadScript googleMapsApiKey="AIzaSyCwQ0LRUNWgAtHGtQMRsqelLZQGtOMWktI">
                                <GoogleMap
                                    mapContainerClassName="map-container"
                                    center={{ lat: 21.003187, lng: 105.819854 }}
                                    zoom={12}
                                >
                                    <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
                                </GoogleMap>
                            </LoadScript>
                        </Col>
                    </Row>
                </div>

            </>}

            {hasSearch && <>
                <ListNewsSearch categoryId={categoryId} filter={filterText} />
            </>}

            <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
                {alert && (
                    <Stack spacing={2}>
                        <Alert severity={alert === "Gửi liên hệ thành công!" ? "success" : "error"}>
                            {alert}
                        </Alert>
                    </Stack>
                )}
            </div>

            <Footer />
        </div >
    );
};

export default Contact;
