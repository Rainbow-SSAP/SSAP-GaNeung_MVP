import React, { useState } from "react";
import { Button } from "../../components/@common/Button/Button";
import BottomSheet from "../../components/bottomSheet/BottomSheet";
import Content from "../../components/bottomSheet/Content";
import { ToastContainer } from "react-toastify";
import ErrandDetail from "../../components/ErrandDetail/ErrandDetail";
import { Header } from "../../components/@common/Header/Header";
import ErrandDate from "../../components/ErrandDetail/ErrandDate";
import ErrandFeeContainer from "../../components/ErrandDetail/ErrandFeeContainer";
import KakaoMap from "../../components/ErrandDetail/KakaoMap";
import Title from "../../components/ErrandDetail/Title";
import UserProfile from "../../components/ErrandDetail/UserProfile";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getErrandDetails } from "../../apis/errandDetail";
import { accessToken } from "../../apis/OAuth";
import ErrandCategory from "../../components/ErrandDetail/ErrandCategory";

const ErrandDetailsPage = () => {
  const [open, setOpen] = useState(false);

  const { taskId } = useParams<{ taskId: string }>();
  const { data, isLoading, error } = useQuery(`errand-details-${taskId}`, () =>
    getErrandDetails(String(taskId), accessToken),
  );

  console.log("data", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: 데이터를 불러오는 중에 오류가 발생하였습니다.</div>;
  }

  if (data == null) {
    return <div>데이터가 없습니다.</div>;
  }

  const handleBtnClick = () => {
    //바텀 시트 로직
    setOpen(true);
    console.log("클릭!!");
  };

  const handleBack = () => {
    console.log("뒤로가기 로직 구현 //TODO");
  };

  const handleMenu = () => {
    console.log("메뉴 창 오픈 (오른쪽 애니메이션으로) //TODO");
  };

  return (
    <div>
      {/* 심부름 상세 페이지 보이는 컴포넌트 추가 TODO */}
      {/* <Header
        title="상세 페이지"
        onBack={handleBack}
        onMenu={handleMenu}
        alignItems="center"
        justifycontent="space-between"
        titleAlign="center"
      /> */}
      <KakaoMap data={data} />
      {/* <ErrandCategory data={data} /> */}
      <Title data={data} />
      <ErrandFeeContainer data={data} />
      <ErrandDate data={data} />
      <ErrandDetail data={data} />
      <UserProfile data={data} />
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
        position="bottom-right" // 알람 위치 지정
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
