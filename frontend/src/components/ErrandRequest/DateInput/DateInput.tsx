import React, { forwardRef, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

interface DateInputProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
}

interface ExampleCustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLButtonElement, ExampleCustomInputProps>(
  ({ value, onClick }) => (
    <StyledCustomInput onClick={onClick}>{value}</StyledCustomInput>
  ),
);

CustomInput.displayName = "CustomInput";

function DateInput({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: DateInputProps) {
  const handleStartDateChange = (date: Date) => {
    // const formattedDate: string = format(date, "yyyy-MM-dd HH:mm");
    setStartDate(date);
    if (date > endDate) {
      // 시작 날짜 선택 시 자동으로 마감 날짜 반영
      setEndDate(date);
    }
  };

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <DateIputWrapper>
      <DateInputBox>
        <StyledDatePicker // DatePicker의 styled-component명
          locale={ko} //한글
          selected={startDate} // 시작 날짜
          dateFormat="yyyy-MM-dd HH:mm" // 2023-11-20 14:00 형식
          showTimeSelect // 시간 설정
          minDate={new Date()}
          filterTime={filterPassedTime} // 이전 시간 필터링
          onChange={handleStartDateChange}
          customInput={<CustomInput />}
          withPortal
        />
        <StyledIcon />
      </DateInputBox>
      <StyledDash />
      <DateInputBox>
        <StyledDatePicker // DatePicker의 styled-component명
          locale={ko} //한글
          selected={endDate} // 마감 날짜
          dateFormat="yyyy-MM-dd HH:mm" // 2023-11-20 14:00 형식
          showTimeSelect // 시간 설정
          filterTime={filterPassedTime} // 이전 시간 필터링
          minDate={startDate} // 시작 날짜 이후의 날짜만 선택 가능하도록 설정
          minTime={startDate}
          maxTime={setHours(setMinutes(new Date(), 59), 23)}
          onChange={(date: Date) => setEndDate(date)}
          customInput={<CustomInput />}
          withPortal
        />
        <StyledIcon />
      </DateInputBox>
    </DateIputWrapper>
  );
}

const DateIputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const DateInputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  > div {
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 100%;
    div {
      width: 100%;
    }
  }
  .react-datepicker__portal {
    // 모달 Bg
    background-color: transparent;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker {
    // 날짜 시간 컨테이너
    // 날짜
    display: flex;
    /* border: none; */
    border-radius: 1rem;
    background-color: white;
    overflow: hidden;
  }
  .react-datepicker__month-container {
    // 날짜 컨테이너
    float: none;
    padding: 0 8px;
    padding-bottom: 10px;
  }
  .react-datepicker__header {
    // 날짜 헤더
    background-color: white;
    border-bottom: none;
  }
  .react-datepicker__current-month {
    padding: 1rem;
  }

  // 선택된 날짜
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.primary};
  }

  // nav arrow
  .react-datepicker__navigation {
    top: 12px;
  }
  .react-datepicker__navigation--previous {
    margin-left: 10px;
  }
  .react-datepicker__navigation--next {
    margin-right: 10px;
  }

  // 시간 컨테이너
  .react-datepicker__time-container {
    /* height: 280px; */
  }
  .react-datepicker__header--time {
    padding: 1.6rem;
  }
  .react-datepicker__time-list {
    /* height: auto !important; */
  }
`;

const StyledDatePicker = styled(DatePicker)`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 12px;
  border: none;
  background-color: white;

  > .custom_input {
    width: 100%;
  }
`;

const StyledCustomInput = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #f4f4f4;
  background-color: white;
`;

const StyledIcon = styled(FaCalendar)`
  position: absolute;
  right: 10px;
  margin-top: -1px;
`;

const StyledDash = styled(GoDash)`
  margin: 0 10px;
`;
export default DateInput;
