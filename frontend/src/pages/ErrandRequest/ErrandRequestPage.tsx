import React, { useState } from "react";
import { Button } from "../../components/@common/Button/Button";
import BottomSheet from "../../components/bottomSheet/BottomSheet";
import Content from "../../components/bottomSheet/Content";

const ErrandRequestPage = () => {
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
    </div>
  );
};

export default ErrandRequestPage;
