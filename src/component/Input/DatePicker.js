import styled from "styled-components";
import color from "../../../styles/colors";
import { memo, useState } from "react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

const Date_Picker = ({ date, setDate }) => {
  return (
    <Container>
      <DatePicker
        selected={date}
        dateFormat="yyyy-MM-dd"
        onChange={(d) => {
          // console.log(
          //   d.getFullYear() + "-" + d.getMonth() + 1 + "-" + d.getDate()
          // );
          setDate(d.valueOf());
        }}
        minDate={new Date()}
        popperModifiers={{
          preventOverflow: { enabled: true },
        }}
        disabledKeyboardNavigation
        locale={ko}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  .react-datepicker {
    padding: 0;
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    cursor: default;
  }
  .react-datepicker__triangle {
    border-bottom-color: ${color.white} !important;
  }
  .react-datepicker__header {
    background-color: ${color.gray1};
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }

  .react-datepicker__navigation--previous {
    top: 15px;
    left: 56px;
  }
  .react-datepicker__navigation--next {
    top: 15px;
    right: 57px;
  }
  .react-datepicker__current-month {
    font-size: 18px;
    font-family: "NotoSansCJKkr-Bold";
    color: ${color.black1};
  }
  .react-datepicker__day-names {
    padding-top: 16px;
  }
  .react-datepicker__day-name {
    font-family: "NotoSansCJKkr-Regular";
    width: 35px;
    margin: 0 0 3px 0;
    font-size: 16px;
    line-height: 18px;
    color: ${color.black3};
  }

  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__day {
    font-family: "NotoSansCJKkr-Medium";
    margin: 0;
    width: 35px;
    height: 35px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: ${color.black2};
    font-size: 15px;
    &:hover {
      font-weight: 800;
      color: ${color.orange};
      background-color: ${color.white};
      border-radius: 50%;
    }
  }

  .react-datepicker__day--in-range {
    background-color: ${color.gray1};
  }
  .react-datepicker__day--in-selecting-range {
    background-color: ${color.yellow};
  }
  .react-datepicker__day--selected {
    background-color: ${color.orange};
    color: ${color.white};
    border-radius: 50%;
    font-weight: 800;
    font-family: "NotoSansCJKkr-Medium";
  }
  .react-datepicker__day--range-start {
    background-color: ${color.orange};
    color: ${color.white};
    border-radius: 50%;
    font-family: "NotoSansCJKkr-Medium";
  }

  .react-datepicker__day--range-end {
    background-color: ${color.orange};
    color: ${color.white};
    border-radius: 50%;
    font-family: "NotoSansCJKkr-Medium";
  }
`;

export default memo(Date_Picker);
