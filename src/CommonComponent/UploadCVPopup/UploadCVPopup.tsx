import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Modal, Alert, Stack } from "@mui/material";
import "./UploadCVPopup.scss";
import { Col, Row, Button } from "react-bootstrap";
import ApiProtocol from "../../api/ApiProtocol.ts";
import ApiUrl from "../../api/ApiUrl.ts";


const style = {
  borderRadius: "30px",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "scale(1) translate(-50%, -50%)",
  width: {
    xs: "80%",
    sm: "70%",
    xl: "30%",
  },
  height: "40%",
  bgcolor: "background.paper",
  p: 4,
};

const buttonStyle = {
  cursor: "pointer"
}

interface CV_Send {
  FullName?: string;
  Message?: string;
  URL_CV?: string;
}

const UploadCVPopup = (props: any) => {
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [alertSendCV, setAlertSendCV] = useState<string | null>(null);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    try {
      if (!file) {
        setAlertSendCV("Vui lòng chọn một file.");
        setTimeout(() => setAlertSendCV(null), 3000);
        return;
      }

      // Chuẩn bị dữ liệu
      const formData = new FormData();
      formData.append("FullName", fullName || "Test");
      formData.append("Message", message || "Test");
      formData.append("FileCV", file);

      // Gửi request đến API
      const response = await ApiProtocol.callAPIImage(
        ApiUrl.SendContact,
        formData,
        "POST"
      );

      setAlertSendCV("Gửi liên hệ thành công!");
      handleClose();
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Đã xảy ra lỗi khi tải lên.");
    }

    setTimeout(() => setAlertSendCV(null), 3000);
  };

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleOpen}
        style={buttonStyle} className="register-button">Đăng ký ngay</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <div className="container upload-cv-container-frame">
            <Row className="justify-content-center" style={{ height: "100%" }}>
              <Col md={5} className="upload-cv-container">
                <div className="title">
                  Tải CV của bạn lên
                </div>

                <div className="contact-input-cv-content">
                  <input className="contact-input-cv" placeholder="Họ tên" />

                  <input className="contact-input-cv" placeholder="Vị trí ứng tuyển" />

                  <label htmlFor="fileInput" className="custom-file-label">
                    {file ? file.name : "CV của bạn"}
                  </label>

                  <input className="contact-input-cv hidden-file-input" type="file" placeholder="CV của bạn" id="fileInput" onChange={handleFileChange} />
                </div>
                <div className="uploadCV-button">
                  <Button variant="primary" size="lg" className="cancelCV" onClick={handleClose}>Cancel</Button>
                  <Button variant="primary" size="lg" className="uploadCV" onClick={handleSubmit}>OK</Button>
                </div>
              </Col>

            </Row>
          </div>

        </Box>
      </Modal>
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 1000,
        }}
      >
        {alertSendCV && (
          <Stack spacing={2}>
            <Alert
              severity={alertSendCV === "Gửi liên hệ thành công!" ? "success" : "error"}
              onClose={() => setAlertSendCV(null)}
            >
              {alertSendCV}
            </Alert>
          </Stack>
        )}
      </div>
    </>
  );
};

export default UploadCVPopup;
