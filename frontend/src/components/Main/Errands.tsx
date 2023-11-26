import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getErrands } from "../../apis/errand";
import { useRecoilState } from "recoil";
import { userLocationState } from "../../recoil/atoms/LocationState";
import { ErrandsData } from "../../types/errand";
import { ErrandItem } from "../ErrandList/ErrandItem";

function Errands() {
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);
  const { data, isLoading, error } = useQuery<ErrandsData>(
    "errands",
    () => getErrands(userLocation),
    {
      enabled: !!userLocation, // userLocation 값이 있을 때만 쿼리를 활성화
    },
  );

  console.log("Query data:", data); // 데이터 로깅
  console.log("Is loading:", isLoading); // 로딩 상태 로깅
  console.log("Error:", error); // 에러 로깅

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error)
    return <div>Error: 데이터를 불러오는 중에 오류가 발생하였습니다.</div>;

  if (!data || !data.content) return <div></div>;

  return (
    <ErrandsWrapper>
      <h3>🌈 우리 동네 심부름</h3>
      <ErrandItemsWrapper>
        {data.content.map((item) => {
          return (
            <ErrandItem
              key={item.taskId}
              taskId={item.taskId}
              fileData={item.fileData}
              district={item.district}
              title={item.title}
              fee={item.fee}
              startTime={item.startTime}
              auctionEndTime={item.auctionEndTime}
              isLiked={item.isLiked}
            />
          );
        })}
      </ErrandItemsWrapper>
    </ErrandsWrapper>
  );
}

const ErrandsWrapper = styled.section`
  width: 100%;
  margin: 40px 0;
  > h3 {
    font-size: 18px;
  }
`;
const ErrandItemsWrapper = styled.ul``;

export default Errands;
