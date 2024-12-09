import React, { useEffect, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../CommonComponent/Header/Header.tsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import './News.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import { NewsObject } from "../../Entities/News.ts";
import { Utility } from "../../utility/Utility.ts";
import ListNewsSearch from "../../CommonComponent/ListNewsSearch/ListNewsSearch.tsx";

const News = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const [lstNews, setLstNews] = useState<Array<NewsObject>>([]);
    const [totalPages, setTotalPages] = useState(0);
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
            const res = await ApiProtocol.callAPI(ApiUrl.GetListSlideBanner(2, 5), undefined, "GET");

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

    const GetListNews = async (categoryId: number | undefined, page: number, pageSize: number, keyword: string | undefined = "") => {
        try {
            const url = ApiUrl.GetListNews(categoryId, page, pageSize, keyword);
            const res = await ApiProtocol.callAPI(url, undefined, "GET");

            if (res) {
                const result = await res.json();
                const { data } = result;

                let totalRows = data[0].TotalRows;

                data.forEach((item: NewsObject) => {
                    item.FullImageUrl = Utility.ApiUrlPublic + item.ImageUrl;
                });

                setLstNews(data);
                setTotalPages(Math.ceil(totalRows / pageSize));
            }
        } catch (error) {
            console.error("Failed to fetch news list", error);
        }
    };

    useEffect(() => {
        const categoryId = 0; // Thay bằng ID danh mục nếu cần
        const keyword = ""; // Thay bằng từ khóa nếu cần
        GetListNews(categoryId, currentPage, postsPerPage, keyword);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
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
                <title>Vina Glow - Tin tức</title>
                <meta name="description" content="Vina Glow - Leading business in nutrition products." />
                <meta name="keywords" content="Vina Glow, health, nutrition, products, business" />
            </Helmet>

            <Header SearchPost={SearchPost} />

            <div className="container-fluid">
                <Row className="justify-content-center">
                    <Col className="text-center mainContent-news" style={{ backgroundImage: `url(${bannerUrl})` }}>
                        <div className="bottomMainSlide-ecosystem">
                            <span className="about-us"></span><br />
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container news-container-1">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <div className="navigate-news-detail">
                            <span onClick={() => navigate('/')} className="navigate-page-title">Trang chủ</span> <i className="fa-solid fa-chevron-right"></i> Tin tức
                        </div>
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

            {!hasSearch && <>
                <div className="container news-container-1">
                    <Row className="justify-content-center news-button-group-container">
                        <Col md={6} className="text-center news-button-group">
                            <Button variant="primary" size="lg" className="news-button">Tin tức</Button>
                            <Button variant="primary" size="lg" className="news-button">Tuyển dụng</Button>
                            <Button variant="primary" size="lg" className="news-button">Sản phẩm</Button>
                        </Col>
                    </Row>
                </div>

                <div className="container news-container-head">
                    <Row onClick={() => navigate('/tin-tuc-chi-tiet/')}>
                        <Col md={7} className="news-head-left">
                            <img src={lstNews![0]?.FullImageUrl} className="news-image-2" />
                        </Col>
                        <Col md={5} className="news-head-right">
                            <div className="news-banner-container">
                                <div className="title-news-banner">
                                    {lstNews![0]?.Title}
                                </div>
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: lstNews![0]?.Description || "" }} />
                                </div>
                                <div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>

                <div className="container my-4 news-container-2">
                    <Row>
                        <img src={HomeImage12} alt="Vina Glow Logo" className="bgImage-news" />
                    </Row>
                    {/* Danh sách bài viết */}
                    <Row>
                        {lstNews?.slice(1).map((post) => (

                            <div className="col-12 col-sm-6 col-md-4 mb-3 news-detail-container" key={post.NewsId} onClick={() => navigate(`/tin-tuc-chi-tiet/${post.Url}`)}>
                                <h5 className="card-title"><img src={post.FullImageUrl} className="news-image-detail"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/200?text=Image+Not+Found";
                                    }} /></h5>
                                <div className="news-detail-des">
                                    <div className="news-title">
                                        <span>{post.Title}</span>
                                        <div>
                                        </div>
                                    </div>
                                    <div className="news-detail-des-2">
                                        <div dangerouslySetInnerHTML={{ __html: post.Description || "" }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Row>

                    {/* Phân trang */}
                    <nav className="pagination-container">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                            </li>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => handlePageChange(page)}>
                                        {page}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

            </>}

            {hasSearch && <>
                <ListNewsSearch categoryId={categoryId} filter={filterText} />
            </>}
            <Footer />
        </div >
    );
};

export default News;
