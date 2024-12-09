import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../CommonComponent/Header/Header.tsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import News1 from '../../MockupData/Image/Rectangle_68.png'
import News2 from '../../MockupData/Image/Rectangle_71.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import './RecruimentDetail.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import UploadCVPopup from "../../CommonComponent/UploadCVPopup/UploadCVPopup.tsx";
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import { NewsObject } from "../../Entities/News.ts";
import { Utility } from "../../utility/Utility.ts";

interface Post {
    id: number;
    title: string;
}

const posts: Post[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Bài viết ${i + 1}`,
}));

const RecruimentDetail = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState(new NewsObject());
    const { url } = useParams();
    const [lstNewsHighlight, setLstNewsHighlight] = useState<Array<NewsObject>>([]);
    const [bannerUrl, setBannerUrl] = useState("");

    const GetItem = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetNewsByUrl(url!), undefined, "GET");

            if (res) {
                let result = await res?.json();
                let news = result.data;

                setNews(news);
            }
        } catch (error) {

        }
    }

    const GetListNewsOther = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetMenuByUrl("/tuyen-dung"), undefined, "GET");

            if (res) {
                let result = await res?.json();

                let response = await ApiProtocol.callAPI(ApiUrl.GetListNews(result.data.CatalogNewsId, 1, 3, ""), undefined, "GET");

                if (response) {
                    let lst = await response?.json();
                    let lstFinal = await lst.data.filter((item) => item.Url != url);

                    lstFinal.forEach((item: NewsObject) => {
                        item.FullImageUrl = Utility.ApiUrlPublic + item.ImageUrl;
                    });

                    setLstNewsHighlight(lstFinal);
                }
            }
        } catch (error) {

        }
    }

    const GetListSlideBanner = async () => {
        try {
            const res = await ApiProtocol.callAPI(ApiUrl.GetListSlideBanner(2, 8), undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                console.log(85, data)

                setBannerUrl(Utility.ApiUrlPublic + data[0].ImageUrl);
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    }

    useEffect(() => {
        GetItem();
        GetListNewsOther();
        GetListSlideBanner();

    }, []);

    console.log(101, bannerUrl);

    return (
        <div>
            {/* SEO Optimization */}
            <Helmet>
                <title>Vina Glow - Chi tiết tuyển dụng</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <Header />

            {/* <img src={bannerUrl} /> */}

            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col className="text-center mainContent-recruiment-detail" style={{ backgroundImage: `url(${bannerUrl})` }}>
                        <div className="bottomMainSlide-news-detail">
                            <span className="about-us"></span><br />
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container-fluid news-detail-container-1">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="navigate-news-detail">
                            <span onClick={() => navigate('/')} className="navigate-page-title">Trang chủ</span> <i className="fa-solid fa-chevron-right"></i> <span onClick={() => navigate('/tuyen-dung')} className="navigate-page-title">Tuyển dụng </span><i className="fa-solid fa-chevron-right"></i> Chi tiết tuyển dụng
                        </div>
                        <div className="news-detail-title">
                            {news.Title}
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: news.Detail || "" }} />

                        <div className="bottom-rec-detail-content">
                            <UploadCVPopup />
                        </div>
                    </Col>

                    <Col md={3} className="right-newsDetail-container">

                        <div className="list-menu-container list-menu-container2">
                            <div className="list-reacruiment-title">
                                Tin tuyển dụng khác
                            </div>
                            {lstNewsHighlight.map((item) =>
                                <div className="news-special-1">
                                    <img src={item.FullImageUrl} />
                                    <div className="news-special-title">
                                        {item.Title}
                                    </div>
                                    <div className="news-special-content">
                                        <div dangerouslySetInnerHTML={{ __html: item.Description || "" }} />
                                    </div>
                                </div>)}
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div >
    );
};

export default RecruimentDetail;
