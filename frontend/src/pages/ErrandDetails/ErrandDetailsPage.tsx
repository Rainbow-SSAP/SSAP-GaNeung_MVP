import React, { useState } from "react";
import { Button } from "../../components/@common/Button/Button";
import BottomSheet from "../../components/bottomSheet/BottomSheet";
import Content from "../../components/bottomSheet/Content";
import { ToastContainer } from "react-toastify";

const ErrandDetailsPage = () => {
  const [open, setOpen] = useState(false);

  const handleBtnClick = () => {
    //바텀 시트 로직
    setOpen(true);
    console.log("클릭!!");
  };

  return (
    <div>
      {/* 심부름 상세 페이지 보이는 컴포넌트 추가 TODO */}
      <Button
        text="✋ 심부름 지원하기"
        size="large"
        color="primary"
        onClick={handleBtnClick}
      />
      {open && (
        <BottomSheet isOpen={open} setIsOpen={setOpen}>
          {/* <Content /> */}
        </BottomSheet>
      )}
      <ToastContainer
        position="bottom-center" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
      />
    </div>
  );
};

export default ErrandDetailsPage;
