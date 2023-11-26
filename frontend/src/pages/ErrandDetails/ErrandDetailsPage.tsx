import React, { useEffect, useState } from "react";
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
import { GetCurrentBid } from "../../apis/currentBid";
import { useRecoilState, useRecoilValue } from "recoil";
import { authInfoState } from "../../recoil/atoms/userInfo";
import { getAuctionDetail } from "../../apis/auctionDetail";
import Template from "../../components/Template";
import styled from "styled-components";

const ErrandDetailsPage = () => {
  const [open, setOpen] = useState(false);
  // const [currentBid, setCurrentBid] = useState(0);
  // const [bidAmount, setBidAmount] = useState("");
  const authInfo = useRecoilValue(authInfoState);
  const [intervalId, setIntervalId] = useState(null);

  const { userName, userEmail } = authInfo;
  const userEmailTest = "ssap.rainbow@gmail.com";

  //TODO 밑에 accessToken 말고 recoil에서 저장해놓은 accessToken으로 대체
  const { taskId } = useParams<{ taskId: string }>();

  const {
    data: errandData,
    isLoading: errandLoading,
    error: errandError,
    refetch: refetchErrandData,
  } = useQuery(`errand-details-${taskId}`, () =>
    getErrandDetails(String(taskId), accessToken),
  );

  const {
    data: auctionData,
    isLoading: auctionLoading,
    error: auctionError,
    refetch: refetchAuctionData,
  } = useQuery(
    `auction-details-${taskId}`,
    () => getAuctionDetail(errandData.auctionId, accessToken),
    {
      enabled: !!errandData,
    },
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 여기에서 auctionData를 사용하여 추가 작업 수행

        // errandData가 존재할 때만 호출
        const auctionDetails = await getAuctionDetail(
          errandData.auctionId,
          accessToken,
        );
        console.log("use Effect 내 Auction Data:", auctionDetails);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };
    fetchData();
    const id = setInterval(async () => {
      await refetchErrandData();
      await refetchAuctionData();
      fetchData();
    }, 1000);

    setIntervalId(id);

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [refetchErrandData, refetchAuctionData]);

  if (errandLoading || auctionLoading) {
    return <div>Loading...</div>;
  }

  if (errandError || auctionError) {
    return <div>Error: 데이터를 불러오는 중에 오류가 발생하였습니다.</div>;
  }

  if (!errandData) {
    return <div>데이터가 없습니다.</div>;
  }

  console.log("Errand Data:", errandData);

  const auctionId = errandData.auctionId;

  console.log("auctionData", auctionData);
  console.log("userName :", userName);
  console.log("userEmail :", userEmail);
  console.log("auctionId :", auctionId);

  const openBottomSheet = () => {
    setOpen(true);
  };

  const handleBack = () => {
    console.log("뒤로가기 로직 구현 //TODO");
  };

  const handleMenu = () => {
    console.log("메뉴 창 오픈 (오른쪽 애니메이션으로) //TODO");
  };

  return (
    <Template>
      {/* <Header
        title="상세 페이지"
        onBack={handleBack}
        onMenu={handleMenu}
        alignItems="center"
        justifycontent="space-between"
        titleAlign="center"
      /> */}
      <KakaoMap data={errandData} />
      <ErrandDetailInner>
        <Title data={errandData} />
        <ErrandFeeContainer data={errandData} />
        <ErrandDate data={errandData} />
        <ErrandDetail data={errandData} />
        <UserProfile data={errandData} />
      </ErrandDetailInner>
      <Button
        className="button"
        fixed
        text="✋ 심부름 지원하기"
        size="large"
        color="primary"
        onClick={openBottomSheet}
      />
      {/* TODO userEmail 테스트용에서 실제 버전으로수정 */}
      {open && (
        <BottomSheet
          data={errandData}
          isOpen={open}
          setIsOpen={setOpen}
          // currentBid={currentBid}
          // setCurrentBid={setCurrentBid}
          accessToken={accessToken}
          taskId={taskId}
          userEmail={userEmailTest}
          auctionId={auctionId}
          // bidAmount={bidAmount}
          termsAgreed={true}
          // setBidAmount={setBidAmount}
          auctionData={auctionData}
        >
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
    </Template>
  );
};

const ErrandDetailInner = styled.div`
  padding: 2rem 3vw;
`;

export default ErrandDetailsPage;
