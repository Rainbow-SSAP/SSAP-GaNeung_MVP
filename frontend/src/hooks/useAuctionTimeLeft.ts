import { useEffect, useState } from "react";

const useAuctionTimeLeft = (auctionEndTime) => {
  const [timeLeftString, setTimeLeftString] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime(); // 현재 시간 밀리초로 변환
      const auctionEndTimeDate = new Date(auctionEndTime).getTime(); // 경매 마감 시간 밀리초로 변환
      const timeLeft = auctionEndTimeDate - now; // 현재 시간과 경매 마감 시간 차이

      if (timeLeft <= 0) {
        // 경매 마감 시간이 지났을 경우
        setTimeLeftString("경매 마감");
      } else {
        // 년 월 달 시간 일 계산
        const yearsLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
        const monthsLeft = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
        );
        const daysLeft = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
        );
        const hoursLeft = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutesLeft = Math.floor(
          (timeLeft % (1000 * 60 * 60)) / (1000 * 60),
        );

        let timeString = "";

        // 문자 변환
        if (yearsLeft > 0) {
          timeString += `${yearsLeft}년 후 마감`;
        } else if (monthsLeft > 0) {
          timeString += `${monthsLeft}개월 후 마감`;
        } else if (daysLeft > 0) {
          timeString += `${daysLeft}일 후 마감`;
        } else if (hoursLeft > 0) {
          timeString += `${hoursLeft}시간 후 마감`;
        } else if (minutesLeft > 0) {
          timeString += `${minutesLeft}분 후 마감`;
        } else {
          if (auctionEndTime === "") {
            setTimeLeftString("");
          } else {
            timeString += "마감 임박";
          }
        }

        setTimeLeftString(timeString);
      }
    };

    // 초기 렌더링 시에도 타이머를 업데이트하기 위해 호출
    updateTimer();

    // 타이머 시작
    const intervalId = setInterval(updateTimer, 60000); // 업데이트

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(intervalId);
  }, [auctionEndTime]);

  return timeLeftString;
};

export default useAuctionTimeLeft;
