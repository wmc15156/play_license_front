import styled from "styled-components";

const HighlightVideo = () => {
  return (
    <Container>
      <Video>
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          src="https://www.youtube.com/embed/qVih2ERFU1Q?autoplay=1&mute=1&loop=1&autohide=1&showinfo=0&controls=0"
        ></iframe>
      </Video>
    </Container>
  );
};

export default HighlightVideo;

const Container = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 14px;
`;
const Video = styled.div`
  & + iframe {
    height: 0;
    max-width: 100%;
    width: 100%;
    -webkit-border-radius: 14px;
    -moz-border-radius: 14px;
    border-radius: 14px;
  }
`;
