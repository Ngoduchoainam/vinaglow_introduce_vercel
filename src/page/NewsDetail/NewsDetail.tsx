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
import './NewsDetail.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NewsObject } from "../../Entities/News.ts";
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import { Utility } from "../../utility/Utility.ts";
import ListNewsSearch from "../../CommonComponent/ListNewsSearch/ListNewsSearch.tsx";

const NewsDetail = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState(new NewsObject());
    const { url } = useParams();
    const [lstNewsHighlight, setLstNewsHighlight] = useState<Array<NewsObject>>([]);
    const [lstNewsRelated, setLstNewsRelated] = useState<Array<NewsObject>>([]);
    const [hasSearch, setHasSearch] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [categoryId, setCategoryId] = useState();
    const [bannerUrl, setBannerUrl] = useState("");

    const GetCategoryid = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetMenuByUrl("/tin-tuc"), undefined, "GET");

            if (res) {
                let result = await res?.json();

                setCategoryId(result.data.CatalogNewsId);
            }
        } catch (error) {

        }
    }

    const GetListSlideBanner = async () => {
        try {
            const res = await ApiProtocol.callAPI(ApiUrl.GetListSlideBanner(2, 7), undefined, "GET");

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
        GetCategoryid();
        GetListSlideBanner();

    }, []);

    const GetItem = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetNewsByUrl(url!), undefined, "GET");

            if (res) {
                let result = await res?.json();
                let news = result.data;

                setNews(news);

                let keyword = await result.data.Title!.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '|');
                let response = await ApiProtocol.callAPI(ApiUrl.GetListNews(0, 1, 4, keyword), undefined, "GET");

                if (response) {
                    let result = await response?.json();
                    let lstNews = result.data;

                    let lstFinal = await lstNews.filter((item) => item.Url != url);

                    lstFinal.forEach((item: NewsObject) => {
                        item.FullImageUrl = Utility.ApiUrlPublic + item.ImageUrl;
                    });

                    if (lstFinal.length > 3) {
                        lstFinal.pop();
                        setLstNewsRelated(lstFinal);
                    }
                    else {
                        setLstNewsRelated(lstFinal);
                    }
                }
            }
        } catch (error) {

        }
    }

    const GetListNewsHighlight = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetNewsHighlight(4), undefined, "GET");

            if (res) {
                let result = await res?.json();
                let lstNews = result.data;


                let lstFinal = await lstNews.filter((item) => item.Url != url);

                lstFinal.forEach((item: NewsObject) => {
                    item.FullImageUrl = Utility.ApiUrlPublic + item.ImageUrl;
                });

                if (lstFinal.length > 3) {
                    lstFinal.pop();
                    setLstNewsHighlight(lstFinal);
                }
                else {
                    setLstNewsHighlight(lstFinal);
                }

            }
        } catch (error) {

        }
    }
    useEffect(() => {
        GetItem();
        GetListNewsHighlight();

    }, []);

    const sharePost = () => {
        const postUrl = window.location.href; // Lấy URL hiện tại
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
        window.open(facebookShareUrl, "_blank", "width=600,height=400");
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

    console.log(101, bannerUrl);

    return (
        <div>
            {/* SEO Optimization */}
            <Helmet>
                <title>Vina Glow - Tin tức chi tiết</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <Header SearchPost={SearchPost} />

            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col className="text-center mainContent-news" style={{ backgroundImage: `url(${bannerUrl})` }}>
                        <div className="bottomMainSlide-news-detail">
                            <span className="about-us"></span><br />
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container-fluid news-detail-container-navigate">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="navigate-news-detail">
                            <span onClick={() => navigate('/')} className="navigate-page-title">Trang chủ</span> <i className="fa-solid fa-chevron-right"></i> <span onClick={() => navigate('/tin-tuc')} className="navigate-page-title">Tin tức </span><i className="fa-solid fa-chevron-right"></i> Chi tiết tin tức
                        </div>
                    </Col>
                    <Col md={3} className="right-newsDetail-container"></Col>
                </Row>
            </div>

            {!hasSearch && <>
                <div className="container-fluid news-detail-container-1">
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div className="news-detail-title">
                                {news?.Title}
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: news.Detail || "" }} />

                            <div className="bottom-detail-content">
                                <div>
                                    <i className="fa-regular fa-clock"></i>{" "}
                                    Ngày 16/11/2024
                                </div>

                                <div className="share" onClick={sharePost}>
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

                            <div className="list-menu-container list-menu-container2">
                                <div className="list-menu-title">
                                    Tin liên quan
                                </div>
                                {lstNewsRelated.map((item) =>
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
            </>}

            {hasSearch && <>
                <ListNewsSearch categoryId={categoryId} filter={filterText} />
            </>}
            <Footer />
        </div >
    );
};

export default NewsDetail;
