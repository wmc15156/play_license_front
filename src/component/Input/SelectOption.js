import styled from "styled-components";
import color from "../../../styles/colors";

const SelectOption = ({
  value = 0,
  onChange,
  options,
  height,
  radius,
  fontSize,
}) => {
  return (
    <Container>
      <Select
        value={value}
        onChange={onChange}
        height={height}
        borderRadius={radius}
        fontSize={fontSize}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: calc(100% - 20px);
  height: ${(props) => (props.height ? props.height : "40px")};
  background-color: ${color.white};
  border-radius: ${(p) => (p.radius ? p.radius : "8px")};
  border: 1px solid ${color.black5};
  padding: 0 20px;
  font-family: "NotoSansCJKkr-Medium";
  font-size: ${(p) => (p.fontSize ? p.fontSize : "16px")};
  &:focus {
    outline: none;
  }
`;
export default SelectOption;
