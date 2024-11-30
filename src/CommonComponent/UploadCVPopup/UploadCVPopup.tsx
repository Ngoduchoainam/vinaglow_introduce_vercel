import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Modal } from "@mui/material";
import "./UploadCVPopup.scss";
import { Col, Row, Button } from "react-bootstrap";

const style = {
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
  border: "2px solid #000",
  p: 4,
};

const buttonStyle = {
  cursor: "pointer"
}

interface PickedImage {
  id?: number;
  fileUrl?: string;
}

const UploadCVPopup = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [serverImage, setServerImage] = useState([]);
  const [lstPickedImage, setLstPickedImage] = useState<Array<PickedImage>>([]);
  const [images, setImages] = useState([] as any);
  const [lstBg, SetLstBg] = useState(['']);
  const divRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const GetImageFromServer = async (loading?: boolean, imageNameFilter?: string, resetResult?: boolean) => {
    setLoading(loading!)
    try {
      let pageIndexLoad = resetResult ? 1 : loading ? pageIndex + 1 : pageIndex;
      setPageIndex(pageIndexLoad);

      setLoading(false);
    } catch (error) {
      console.log(35, error)
    }
  }

  useEffect(() => {
    GetImageFromServer();

  }, []);

  const rows = [];
  for (let i = 0; i < serverImage.length; i += 3) {
  }

  const AddImage = (img: PickedImage, image?: never) => {
    let arr = [...lstPickedImage];
    console.log(83, lstPickedImage, img)
    let lstFilter = arr.filter(element => element.id == img.id);
    if (lstFilter.length == 0) {
      arr.push(img);
      setLstPickedImage(arr);

      let index = serverImage.indexOf(image!);

      let lstBgNew = [...lstBg];
      lstBgNew[index] = "#245a5c";
      SetLstBg(lstBgNew);
    }
  }

  const AddNewImage = () => {
    try {
      images.forEach((element: any) => {
        let formData = new FormData();
        formData.append('file', element);
      });
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];

    images.forEach((image: any) => {
      let item = new Image();

      newImageUrls.push(item);
    });


    AddNewImage();

  }, [images]);

  const HandlePickedImages = async () => {
    await props.SetLstPickedImage(lstPickedImage, props.type);

    let arr = [...lstPickedImage];
    arr = [];
    setLstPickedImage(arr);
    SetLstBg(Array(serverImage.length).fill("white"));
    handleClose();
  }

  const handleDivClick = (event: any) => {
    if (divRef.current && event.target.tagName !== divRef.current.querySelector('img')!.tagName) {
      console.log('Div clicked, but not the image');

      SetLstBg(Array(serverImage.length).fill("white"));

      let arr = [...lstPickedImage];
      arr = [];
      setLstPickedImage(arr);
    }
  };

  return (
    <>
      <span
        onClick={handleOpen}
        style={buttonStyle}
      >
        tại đây
      </span>
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
                  Gửi CV cho chúng tôi
                </div>

                <div className="contact-input-cv-content">
                  <input className="contact-input-cv" placeholder="Họ tên" />

                  <input className="contact-input-cv" placeholder="Email" />

                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      setImages([...images, ...e.target.files!]);
                    }}
                  />
                </div>
                <div>
                  <Button variant="primary" size="lg" className="uploadCV">Gửi CV</Button>
                </div>
              </Col>

            </Row>
          </div>

        </Box>
      </Modal>
    </>
  );
};

export default UploadCVPopup;
