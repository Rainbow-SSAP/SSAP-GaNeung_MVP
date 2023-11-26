import React from "react";
import Template from "../../components/Template";
import Nav from "../../components/ErrandList/Nav";
import { ErrandItem } from "../../components/ErrandList/ErrandItem";
import { fetchErrandCategory } from "../../apis/errandCategory";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

function ErrandListPage() {
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
    () => fetchErrandCategory(selectedCategoryId),
    {
      // 옵션: staleTime, cacheTime 등을 설정할 수 있습니다.
    },
  );

  console.log("selectedCategory", errandCategory);

  return (
    <Template headerProps={{ title: "현재 위치" }}>
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

const ErrandsList = styled.ul``;

export default ErrandListPage;
