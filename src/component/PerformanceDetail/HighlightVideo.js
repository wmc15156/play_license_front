import styled from "styled-components";

const HighlightVideo = ({ item }) => {
  return (
    <Container>
      <Video>
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          src={`${item.performanceVideo}?autoplay=1&mute=1&loop=1&autohide=1&showinfo=0&controls=0`}
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
