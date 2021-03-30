import styled from "styled-components";
import { useEffect, useState } from "react";

const HighlightVideo = ({ item }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { performanceVideo } = item;
    setUrl(performanceVideo.substring(performanceVideo.lastIndexOf("/") + 1));
  }, []);
  return (
    <Container>
      <Video>
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=1&loop=1&autohide=1&showinfo=0&controls=0`}
        ></iframe>
      </Video>
    </Container>
  );
};

export default HighlightVideo;

const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 14px;
`;
const Video = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border-radius: 14px;
  overflow: hidden;

  & > iframe {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    top: 0;
    left: 0;
  }
`;
