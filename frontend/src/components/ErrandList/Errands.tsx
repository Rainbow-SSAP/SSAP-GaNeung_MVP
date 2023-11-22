import React from "react";
import { ErrandItem, ErrandItemProps } from "./ErrandItem";
import styled from "styled-components";
import { errandsData } from "../../mocks/errandsData";
import { useQuery } from "react-query";
import { getErrands } from "../../apis/errand";

type ErrandsData = {
  content: ErrandItemProps[];
};

function Errands() {
  const { data, isLoading, error } = useQuery<ErrandsData>(
    "errands",
    getErrands,
  );
  console.log("Query data:", data); // 데이터 로깅
  console.log("Is loading:", isLoading); // 로딩 상태 로깅
  console.log("Error:", error); // 에러 로깅

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error)
    return <div>Error: 데이터를 불러오는 중에 오류가 발생하였습니다.</div>;

  if (!data || !data.content) return <div>데이터가 없습니다.</div>;

  return (
    <ErrandsWrapper>
      <h3>🌈 우리 동네 심부름</h3>
      <ErrandItemsWrapper>
        {data.content.map((item) => {
          console.log("Errand item:", item);
          return (
            <ErrandItem
              key={item.taskId}
              thumbnailUrl={item.thumbnailUrl}
              jibunAddress={item.jibunAddress}
              title={item.title}
              auctionStartTime={item.auctionStartTime}
              auctionEndTime={item.auctionEndTime}
              isLiked={item.isLiked}
            />
          );
        })}
        {/* {ErrandItems.map((item, index) => (
          <ErrandItem key={index} {...item} />
        ))}*/}
      </ErrandItemsWrapper>
    </ErrandsWrapper>
  );
}

const ErrandsWrapper = styled.section`
  margin: 40px 0;
  > h3 {
    font-size: 18px;
  }
`;
const ErrandItemsWrapper = styled.ul``;

export default Errands;
