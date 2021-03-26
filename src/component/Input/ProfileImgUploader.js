import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { BsFillImageFill } from "react-icons/bs";

const ImageUploader = ({ urlHandler }) => {
  const inputImageUploader = useRef(null);

  const handleClick = () => {
    inputImageUploader.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    const formData = new FormData();
    formData.append("file", fileUploaded);
    // console.log(formData.get(name), "formData");

    axios
      .post("/image/poster", formData)
      .then((res) => {
        // console.log(res, "이미지업로드res");
        urlHandler(res.data.url, res.data.filename);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Label onClick={handleClick}>
        <Icon>
          <BsFillImageFill size={16} />
        </Icon>
      </Label>
      <Uploader ref={inputImageUploader} onChange={handleChange} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Label = styled.div`
  height: 20px;
  width: 20px;
  padding: 5px;
  background-color: ${color.black3};
  border-radius: 50%;
  display: flex;
  color: ${color.white};
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
`;
const Icon = styled.div`
  width: 16px;
  display: flex;
  align-items: center;
`;

const Uploader = styled.input.attrs({
  type: "file",
  accept: "image/* ",
})`
  display: none;
  &:focus {
    outline: none;
  }
`;

export default ImageUploader;
