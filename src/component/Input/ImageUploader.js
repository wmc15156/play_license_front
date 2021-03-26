import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { FiPlusSquare } from "react-icons/fi";
import { IoDownloadOutline } from "react-icons/io5";

const ImageUploader = ({ name, data, getImgURL, readOnly }) => {
  const inputImageUploader = useRef(null);
  const [btnText, setBtnText] = useState("");

  useEffect(() => {
    if (data.filename) {
      setBtnText(data.filename);
    } else {
      setBtnText("업로드");
    }
  }, []);

  const handleClick = () => {
    inputImageUploader.current.click();
    if (inputImageUploader.current.disabled) {
      // download || view file
      // downloadFile(`data:image/*;base64,[${data.url}]`);
      window.href = data.url;
      downloadFile(data.url);
    }
  };

  const downloadFile = (fileUrl) => {
    const blob = new Blob([fileUrl], { type: "image/png;base64" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = data.filename;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    const formData = new FormData();
    formData.append("file", fileUploaded);
    // console.log(formData.get(name), "formData");

    axios
      .post("/image/poster", formData)
      .then((res) => {
        console.log(res, "이미지업로드res");
        getImgURL(name, res.data.url, res.data.filename);
        setBtnText(fileUploaded.name);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Label onClick={handleClick}>
        {btnText.includes("업로드") ? (
          <>
            <Icon>
              <FiPlusSquare size={20} />
            </Icon>
            <Text>{btnText}</Text>
          </>
        ) : (
          <>
            <Icon>
              <IoDownloadOutline size={22} />
            </Icon>
            <Text>{btnText}</Text>
          </>
        )}
      </Label>
      <Uploader
        ref={inputImageUploader}
        onChange={handleChange}
        disabled={readOnly ? readOnly : false}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Label = styled.div`
  width: calc(100% - 32px);
  background-color: ${color.orange};
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  color: ${color.white};
  align-items: center;
  &:focus {
    outline: none;
  }
`;
const Icon = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  width: 100%;
  color: ${color.white};
  font-family: "NotoSansCJKkr-Bold";
  align-items: center;
  justify-content: center;
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
