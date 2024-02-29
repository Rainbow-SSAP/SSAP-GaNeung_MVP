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
    error,
  } = useQuery(
    ["errandCategory", selectedCategoryId],
    () => fetchErrandCategory(selectedCategoryId),
    {},
  );

  console.log("selectedCategory", errandCategory);

  if (errandCategory == null || isLoading) {
    return (
      <Template headerProps={{ gnb: true, type: "location" }}>
        <Nav selectedCategoryId={selectedCategoryId} />
        <ErrandsList>
          {[...new Array(10)].map((_, index) => (
            <ErrandItem.Skeleton key={index} />
          ))}
        </ErrandsList>
      </Template>
    );
  }
  if (error) return <div></div>;

  return (
    <Template headerProps={{ gnb: true, type: "location" }}>
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
