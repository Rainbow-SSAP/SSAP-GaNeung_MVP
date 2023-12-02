import React from "react";
import Template from "../../components/Template";
import Nav from "../../components/ErrandList/Nav";
import { ErrandItem } from "../../components/ErrandList/ErrandItem";
import { fetchErrandCategory } from "../../apis/errandCategory";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { userLocationState } from "../../recoil/atoms/LocationState";

function ErrandListPage() {
  const location = useRecoilValue(userLocationState);
  const { categoryId } = useParams();
  const selectedCategoryId = parseInt(categoryId, 10);
  console.log("categoryId", categoryId);
  console.log("selectedCategoryId", selectedCategoryId);

  const {
    data: errandCategory,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["errandCategory", selectedCategoryId],
    () => fetchErrandCategory(selectedCategoryId, location),
    {},
  );

  console.log("selectedCategory", errandCategory);

  return (
    <Template headerProps={{ title: "우리 동네 심부름" }}>
      <Nav selectedCategoryId={selectedCategoryId} />
      <ErrandsList>
        {errandCategory?.content.map((item) => {
          console.log("Errands Porps:", item);
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
      </ErrandsList>
    </Template>
  );
}

const ErrandsList = styled.ul`
  padding: 0 3vw 2rem;
  li:last-child {
    border-bottom: none;
  }
`;

export default ErrandListPage;
