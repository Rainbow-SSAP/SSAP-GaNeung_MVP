import React from "react";
import { FaCalendar } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, setHours, setMinutes } from "date-fns";

interface DateInputProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
}

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
          filterTime={filterPassedTime} // 이전 시간 필터링
          closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
          onChange={handleStartDateChange}
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
          closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
          onChange={(date: Date) => setEndDate(date)}
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

  > .react-datepicker-wrapper {
    width: 100%;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #f4f4f4;
  background-color: white;

  > input {
    width: 100%;
  }
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
