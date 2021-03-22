import styled from "styled-components";
import color from "../../../styles/colors";

const SelectOption = ({
  value = "",
  onChange,
  options,
  height,
  radius,
  fontSize,
  readOnly,
}) => {
  return (
    <Container>
      <Select
        value={value}
        onChange={onChange}
        height={height}
        borderRadius={radius}
        fontSize={fontSize}
        required
        disabled={readOnly}
      >
        <option value="" disabled>
          선택해주세요
        </option>
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
  color: ${color.black4};
  width: 100%;
  height: ${(props) => (props.height ? props.height : "40px")};
  background-color: ${color.white};
  border-radius: ${(p) => (p.radius ? p.radius : "8px")};
  border: 1px solid ${color.black5};
  padding: 0 20px;
  font-family: "NotoSansCJKkr-Medium";
  font-size: ${(p) => (p.fontSize ? p.fontSize : "16px")};
  background: url("/assets/image/select_arrow.png") no-repeat 94% 50%;
  background-size: 10px 5px;
  -webkit-appearance: none; /* Safari and Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none;

  &:focus {
    outline: none;
  }
  &:required:invalid {
    color: ${color.black4};
  }
  & > option[value=""][disabled] {
    /* display: none; */
  }
  & > option {
    color: ${color.black1};
    padding: 15px;
    &:hover {
      background-color: ${color.black4};
    }
  }
  &::-ms-expand {
    display: none;
  }
`;
export default SelectOption;
