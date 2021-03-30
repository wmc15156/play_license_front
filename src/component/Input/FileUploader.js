import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Loader from "../Loader/SmallCircle";

const FileUploader = ({ data, fileURLhandler, readOnly, icon }) => {
  const [btnText, setBtnText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputFileUploader = useRef(null);

  useEffect(() => {
    if (data.filename) {
      setBtnText(data.filename);
    } else {
      setBtnText("파일첨부");
    }
  }, [data]);

  const handleClick = () => {
    inputFileUploader.current.click();
  };

  const downloadFile = (fileUrl) => {
    console.log("file download", fileUrl);
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = data.filename;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(fileUrl);
    window.location.href = fileUrl;
  };

  const resetFile = () => {
    if (readOnly) {
      console.log("파일삭제불가 모달");
    } else {
      console.log("파일 삭제");
      fileURLhandler("", "");
    }
  };

  const handleChange = (event) => {
    setIsLoading(true);
    const fileUploaded = event.target.files[0];

    const formData = new FormData();
    formData.append("file", fileUploaded);
    // console.log(formData.get("file"), "formData");

    setBtnText(fileUploaded.name);
    axios
      .post("/image/poster", formData)
      .then((res) => {
        console.log(res, "파일업로드res");
        fileURLhandler(res.data.url, res.data.filename);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {btnText.includes("파일첨부") ? (
        <Label onClick={handleClick}>
          <Text>{btnText}</Text>
        </Label>
      ) : (
        <Label changeStyle>
          {isLoading && (
            <>
              <Text changeStyle>{btnText}</Text>
              <Icon onClick={resetFile}>
                <Loader />
              </Icon>
            </>
          )}
          {!isLoading && (
            <>
              <Text changeStyle onClick={() => downloadFile(data.url)}>
                {btnText}
              </Text>
              {icon && (
                <Icon onClick={resetFile}>
                  <VscChromeClose size={13} color={color.black4} />
                </Icon>
              )}
            </>
          )}
        </Label>
      )}
      <Uploader
        ref={inputFileUploader}
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
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 80px;
  border: 1px solid ${color.black3};
  border-radius: 8px;
  justify-content: center;

  ${(props) =>
    props.changeStyle &&
    css`
      width: 95%;
      border: none;
      justify-content: flex-start;
    `}

  &:focus {
    outline: none;
  }
`;
const Icon = styled.div`
  width: 13px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  display: inline-block;
  font-family: "NotoSansCJKkr-Bold";
  letter-spacing: -0.5px;
  font-size: 12px;
  line-height: 12px;
  padding: 8px 18px;
  color: ${color.black3};

  ${(props) =>
    props.changeStyle &&
    css`
      display: block;
      padding: 0;
      color: ${color.black1};
      text-decoration: underline;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

const Uploader = styled.input.attrs({
  type: "file",
})`
  display: none;
  &:focus {
    outline: none;
  }
`;

export default FileUploader;
