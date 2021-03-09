import styled from "styled-components";
import color from "../../../styles/colors";

const SelectOption = ({ value = 0, onChange, options }) => {
  return (
    <Container>
      <Select value={value} onChange={onChange}>
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
  width: 100%;
  height: 40px;
  background-color: ${color.white};
  border-radius: 8px;
  border: 1px solid ${color.black5};
  &:focus {
    outline: none;
  }
`;
export default SelectOption;
