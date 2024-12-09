import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.scss'
import FooterImageLogo from '../../MockupData/Image/Artboard.png'
import { ConfigObjectContext } from "../../ConfigObjectContext.tsx";
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";
import { Utility } from "../../utility/Utility.ts";
import { MenuObject } from "../../Entities/MenuObject.ts";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const Footer = props => {
    const [filter, setFilter] = useState("");
    const [lstMenu, setLstMenu] = useState<Array<MenuObject>>([]);
    const [email, setEmail] = useState("");
    const [alert, setAlert] = useState<string | null>(null);

    const SearchPost = async () => {
        await props.SearchPost(false, filter, true);
    }

    const config = useContext(ConfigObjectContext); // Use context directly

    if (!config) {
        // Handle the case where context is undefined (if it's not wrapped in the provider)
        throw new Error("ConfigObjectContext is not provided!");
    }

    const GetListMenu = async () => {
        try {
            let res = await ApiProtocol.callAPI(ApiUrl.GetListMenu(Utility.MenuTypeFooter), undefined, "GET");

            if (res) {
                let result = await res?.json();
                let lstMenu = result.data;

                setLstMenu(lstMenu);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        GetListMenu();

    }, []);

    const handleSubmit = async () => {
        try {

            // Chuẩn bị dữ liệu
            const formData = new FormData();
            formData.append("FullName", email);

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

    return (
        <div className="container-fluid footerContainer">
            <Row>
                <Col md={5} className="head-footer-container">
                    <Row>
                        <Col md={4}>
                            <div className="contact-infor">
                                <span>Thông tin liên hệ</span>
                            </div>
                        </Col>
                    </Row>
                    <Col md={1} />
                    <Col md={12} className="right-left-information">
                        <div>
                            <i className="fa-solid fa-phone"></i>
                            <span className="information">{config.Hotline}</span>
                        </div>
                        <div className="contact-infor-index2 index-2">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="information"><div dangerouslySetInnerHTML={{ __html: config.Address || "" }} className="home-news-des" /></span>
                        </div>
                        <div className="contact-infor-index2">
                            <i className="fa-regular fa-clock"></i>
                            <span className="information"><div dangerouslySetInnerHTML={{ __html: config.WorkTime || "" }} className="home-news-des" /></span>
                        </div>
                    </Col>
                </Col>

                <Col md={2} className="company-contact">
                    <div className="contact-infor">
                        <span>Công ty</span>
                    </div>
                    <div className="infor-contact-container">
                        <div className="contact-infor-index-first">
                            {lstMenu![0]?.Name}
                        </div>
                        {lstMenu?.slice(1).map((item) => (
                            <div className="contact-infor-index">
                                {item.Name}
                            </div>
                        ))}
                    </div>
                </Col>

                <Col md={5} className="right-infor-footer">
                    <Row>
                        <span className="join-vinaglow">Tham gia VINA GLOW</span>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <div className="search-container">
                                <input
                                    className="inputEmailSearch"
                                    placeholder="Nhập Email của bạn"
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            // Handle the Enter key press
                                            handleSubmit();
                                        }
                                    }}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                                <i className="fa-solid fa-paper-plane" onClick={() => handleSubmit()}></i>
                            </div>


                            <img src={Utility.ApiUrlPublic + config.Logo} alt="Vina Glow Logo" className="footerLogo" onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/200?text=Image+Not+Found";
                            }} />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
                {alert && (
                    <Stack spacing={2}>
                        <Alert severity={alert === "Gửi liên hệ thành công!" ? "success" : "error"}>
                            {alert}
                        </Alert>
                    </Stack>
                )}
            </div>
        </div >
    );
};

export default Footer;
