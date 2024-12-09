import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import { NewsObject } from "../../Entities/News.ts";
import { Utility } from "../../utility/Utility.ts";
import "./ListNewsSearch.scss"

const ListNewsSearch = (props) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const [lstNews, setLstNews] = useState<Array<NewsObject>>([]);
    const [totalPages, setTotalPages] = useState(0);

    const GetListNews = async (categoryId: number | undefined, page: number, pageSize: number, keyword: string | undefined = "") => {
        try {
            const url = props.isNewsHome ? ApiUrl.GetListNewsHomeBySearch(page, pageSize, keyword) : ApiUrl.GetListNews(categoryId, page, pageSize, keyword);
            const res = await ApiProtocol.callAPI(url, undefined, "GET");

            console.log("Call here", url)

            if (res) {
                const result = await res.json();
                const { data } = result;

                let totalRows = data![0]?.TotalRows;

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
        const categoryId = props.categoryId || 0; // Thay bằng ID danh mục nếu cần
        const keyword = props.filter || ""; // Thay bằng từ khóa nếu cần
        GetListNews(categoryId, currentPage, postsPerPage, keyword);
    }, [currentPage]);

    useEffect(() => {
        const categoryId = props.categoryId || 0; // Thay bằng ID danh mục nếu cần
        const keyword = props.filter || ""; // Thay bằng từ khóa nếu cần
        GetListNews(categoryId, currentPage, postsPerPage, keyword);
    }, [props.filter]);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };
    return (
        <div>
            <div className="container my-4 news-container-2">
                <Row>
                    <Col md={12}>
                        <span className="result-search">Kết quả tìm kiếm:</span>
                    </Col>
                </Row>

                <br />

                {/* Danh sách bài viết */}
                <Row>
                    {lstNews.map((post) => (
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
        </div >
    );
};

export default ListNewsSearch;
