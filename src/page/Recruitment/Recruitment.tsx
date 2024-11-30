import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button, Card, Nav, Form, FormControl } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../CommonComponent/Header.tsx";
import AboutUs2 from '../../MockupData/Image/aboutUs2.png';
import HomeIcon2 from '../../MockupData/Image/homeIcon2.png';
import HomeIcon3 from '../../MockupData/Image/homeIcon3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import rectangle_6 from '../../MockupData/Image/rectangle_6.png';
import Ecosystem1 from '../../MockupData/Image/ecosystem_6.png'
import Ecosystem2 from '../../MockupData/Image/ecosystem_4.png'
import Ecosystem3 from '../../MockupData/Image/ecosystem_5.png'
import Rec1 from '../../MockupData/Image/rec1.png'
import Rec2 from '../../MockupData/Image/rec2.png'
import Rec3 from '../../MockupData/Image/rec3.png'
import Rec11 from '../../MockupData/Image/rec11.png'
import Rec12 from '../../MockupData/Image/rec12.png'
import Rec13 from '../../MockupData/Image/rec13.png'
import Rec14 from '../../MockupData/Image/rec14.png'
import Rec15 from '../../MockupData/Image/rec15.png'
import Rec16 from '../../MockupData/Image/rec16.png'
import News4 from '../../MockupData/Image/Rectangle_30.png'
import HomeImage8 from '../../MockupData/Image/Rectangle_36.png'
import HomeImage9 from '../../MockupData/Image/danh_luc.png'
import HomeImage10 from '../../MockupData/Image/danh_luc2.png'
import HomeImage11 from '../../MockupData/Image/10.png'
import HomeImage12 from '../../MockupData/Image/background.png'
import Footer from "../../CommonComponent/Footer/Footer.tsx";
import './Recruitment.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ArrowTimeDown from '../../MockupData/Image/ecosystem_time_arrow_down.png'
import EcosystemTime1 from '../../MockupData/Image/ecosystem_time-2.png'
import EcosystemTime2 from '../../MockupData/Image/ecosystem_time_3.png'
import EcosystemTime3 from '../../MockupData/Image/ecosystem_time_4.png'
import EcosystemTime4 from '../../MockupData/Image/ecosystem_time6.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import UploadCVPopup from "../../CommonComponent/UploadCVPopup/UploadCVPopup.tsx";

interface Post {
    id: number;
    title: string;
}

const posts: Post[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Bài viết ${i + 1}`,
}));

const Recruitment = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showMoreMediumRec1, setShowMoreMediumRec1] = useState(false);
    const [showMoreMediumRec2, setShowMoreMediumRec2] = useState(false);
    const [showMoreMediumRec3, setShowMoreMediumRec3] = useState(false);
    const [showMoreMediumRec4, setShowMoreMediumRec4] = useState(false);
    const containerRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);

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
                    <Col className="text-center mainContent-recuiment">
                        <div className="bottomMainSlide-recuiment">
                            <span className="about-us">Tuyển dụng</span><br />
                            <span className="aboutUsRoute">Trang chủ <i className="fa-solid fa-chevron-right"></i> Tuyển dụng</span>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="container news-container-1">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center recruiment-head-title">
                        <span className="title news-head-title">Chính Sách Tuyển Dụng ĐẶc Biệt Tại Công ty TNHH Thương mại Vinaglow
                        </span><br />
                    </Col>
                </Row>
            </div>

            <div className="container news-container-1">
                <Row className="justify-content-center">
                    <Col md={4} className="text-center recruiment-image-head-container">
                        <img src={Rec1} className="rec-image rec-image-head" />
                    </Col>

                    <Col md={4} className="text-center recruiment-image-head-container">
                        <img src={Rec2} className="rec-image rec-image-head" />
                    </Col>

                    <Col md={4} className="text-center recruiment-image-head-container">
                        <img src={Rec3} className="rec-image rec-image-head" />
                    </Col>
                </Row>
            </div>

            <div className="container news-container-1">
                <Row className="justify-content-center">
                    <Col md={4} className={`left-rec-medium-container-frame ${isVisible ? "visible" : ""}`} ref={containerRef}>
                        <div className="left-rec-medium-container" onClick={() => setShowMoreMediumRec1(true)}>
                            <div className="medium-rec-left">
                                Tại Vinaglow, Tuyển Dụng Nhân Tài
                            </div>
                            <div className="recruiment-special-content">
                                Chúng tôi không chỉ tìm kiếm những
                                người đến để làm việc, mà còn muốn{!showMoreMediumRec1 && <>...</>}
                                {showMoreMediumRec1 && <> tìm kiếm những cá nhân có tầm nhìn xa, sẵn sàng thay đổi, thử thách giới hạn và cùng nhau kiến tạo những thành công vượt trội. Tại Vinaglow, bạn không chỉ được làm việc, bạn còn được tạo nên những giá trị lớn lao cho chính mình và cộng đồng.
                                </>}
                            </div>
                        </div>

                        <div className="left-rec-medium-container left-rec-medium-container-2" onClick={() => setShowMoreMediumRec2(true)}>
                            <div className="medium-rec-left">
                                Thách thức và vượt qua chính mình
                            </div>
                            <div className="recruiment-special-content">
                                Vinaglow không ngại thử thách. Chúng tôi khuyến khích nhân{!showMoreMediumRec2 && <>...</>}
                                {showMoreMediumRec2 && <> viên bước ra khỏi vùng an toàn và tìm cách đột phá trong mọi khía cạnh của công việc. Chúng tôi không chỉ tuyển dụng nhân tài – chúng tôi tuyển những cá nhân dám mơ ước lớn và biến nó thành hiện thực.
                                </>}
                            </div>
                        </div>

                        <div className="left-rec-medium-container left-rec-medium-container-2" onClick={() => setShowMoreMediumRec3(true)}>
                            <div className="medium-rec-left">
                                Phát triển cá nhân và nghề nghiệp
                            </div>
                            <div className="recruiment-special-content">
                                Với chúng tôi, mỗi cá nhân là một hành trình phát triển không ngừng{!showMoreMediumRec3 && <>...</>}
                                {showMoreMediumRec3 && <>. Bên cạnh lộ trình thăng tiến rõ ràng, bạn còn được tham gia vào các khóa đào tạo chuyên sâu, phát triển kỹ năng mềm, và cơ hội làm việc trực tiếp với các chuyên gia hàng đầu trong lĩnh vực giúp bạn phát triển toàn diện về cả tư duy lẫn năng lực.
                                </>}
                            </div>
                        </div>

                        <div className="left-rec-medium-container left-rec-medium-container-2" onClick={() => setShowMoreMediumRec4(true)}>
                            <div className="medium-rec-left">
                                Tự do sáng tạo không giới hạn
                            </div>
                            <div className="recruiment-special-content">
                                Tại Vinaglow, tự do sáng tạo là nguyên tắc cốt lõi. Mọi nhân viên đều có quyền{!showMoreMediumRec4 && <>...</>}
                                {showMoreMediumRec4 && <> đưa ra ý tưởng, thử nghiệm, và tiên phong trong việc phát triển dự án. Ý tưởng của bạn là vô giá, và chúng tôi luôn cam kết tạo ra môi trường để bạn có thể biến những ý tưởng táo bạo nhất thành hiện thực.
                                </>}
                            </div>
                        </div>

                    </Col>

                    <Col md={8} className="recruiment-fight-head-container">
                        <div className="recruiment-fight-head-title">
                            Chúng tôi hiểu rằng mỗi đóng góp của bạn xứng đáng được trân trọng.<br />
                            Chính vì vậy, tại Vinaglow, bạn sẽ nhận được:
                        </div>

                        <div className="remuneration-regime">
                            <div className="check-container">
                                <i className="fa-solid fa-circle-check check-rec"></i>

                                Mức lương cạnh tranh cùng các chính sách thưởng linh hoạt, dựa trên hiệu quả và sự đột phá trong công việc.
                            </div>

                            <div className="check-container">
                                <i className="fa-solid fa-circle-check check-rec"></i>
                                Chế độ chăm sóc sức khỏe toàn diện: Bên cạnh bảo hiểm đầy đủ, chúng tôi cung cấp các dịch vụ hỗ trợ sức khỏe đặc biệt, giúp bạn duy trì một cuộc sống cân bằng và lành mạnh.
                            </div>

                            <div className="check-container">
                                <i className="fa-solid fa-circle-check check-rec"></i>
                                Thời gian làm việc linh hoạt: Chúng tôi tạo điều kiện để bạn cân bằng giữa công việc và cuộc sống cá nhân.
                            </div>
                        </div><br />

                        <div className="news-detail-title">
                            Quy Trình Tuyển Dụng Minh Bạch – Cơ Hội Bình Đẳng
                        </div>
                        <div className="recruitment-process">
                            <div className="recruitment-process-content">
                                <span>1. </span> Nộp hồ sơ đơn giản: Chỉ cần gửi CV và thư xin việc qua email hr@vinaglow.com (gửi nhanh CV <UploadCVPopup />)

                            </div>
                            <div className="recruitment-process-content">
                                <span>2</span>. Liên hệ trực tiếp: Bộ phận tuyển dụng sẽ phản hồi lại tất cả các hồ sơ phù hợp trong vòng 3 - 5 ngày làm việc. Bạn sẽ nhận được thông tin cụ thể về quy trình tiếp theo.


                            </div >
                            <div className="recruitment-process-content">
                                <span>3</span>. Phỏng vấn sáng tạo: Chúng tôi không chỉ kiểm tra kiến thức chuyên môn, mà còn đánh giá sự sáng tạo và khả năng giải quyết vấn đề của ứng viên qua các tình huống thực tế.


                            </div>
                            <div className="recruitment-process-content">
                                <span>4.</span> Thư mời làm việc sẽ được gửi qua email tới những ứng viên xuất sắc nhất trong vòng 3 ngày làm việc sau buổi phỏng vấn
                            </div>
                        </div>

                    </Col>


                </Row>

                <Row className="justify-content-center rec-head-bottom-title">
                    <Col md={12} className="text-center">
                        <span className="title">Một đội ngũ, một tầm nhìn, một thành công
                        </span><br />
                    </Col>
                </Row>
            </div>

            <div className="container news-container-1">
                <Row className="justify-content-center">
                    <Col md={4} className="text-center bottom-recruiment-container">
                        <img src={Rec11} className="rec-image" />
                        <div className="title-rec">Tuyển dụng nhân viên sale</div>
                    </Col>

                    <Col md={4} className="text-center bottom-recruiment-container">
                        <img src={Rec12} className="rec-image" />
                        <div className="title-rec">Tuyển dụng nhân viên Facebook Ads</div>
                    </Col>

                    <Col md={4} className="text-center bottom-recruiment-container">
                        <img src={Rec13} className="rec-image" />
                        <div className="title-rec">Tuyển dụng nhân viên tư vấn</div>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={4} className="text-center bottom-recruiment-container">
                        <img src={Rec14} className="rec-image" />
                        <div className="title-rec">Quy trình phỏng vấn</div>
                    </Col>

                    <Col md={4} className="text-center bottom-recruiment-container">
                        <img src={Rec15} className="rec-image" />
                        <div className="title-rec">Tuyển dụng mở rộng kinh doanh</div>
                    </Col>

                    <Col md={4} className="text-center bottom-recruiment-container">
                        <img src={Rec16} className="rec-image" />
                        <div className="title-rec">Tuyển dụng nhân viên Marketing</div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div >
    );
};

export default Recruitment;
