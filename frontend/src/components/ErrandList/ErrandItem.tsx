import React, { useState } from "react";
import styled, { css } from "styled-components";
import defaultProfileImg from "../../assets/images/ssap_icon.svg";
import { LikedButton } from "./LikedButton";
import { Link } from "react-router-dom";

export interface ErrandItemProps {
  taskId: string;
  fileData?: string; // 썸네일 이미지 URL
  district: string; // 동 이름
  title: string; // 제목
  fee: string; // 심부름비
  startTime?: string; // 심부름 시작 시간
  endTime?: string; // 경매 마감 시간
  isLiked?: boolean; // 찜하기
}

export const ErrandItem = (errandItemProps: ErrandItemProps) => {
  const {
    taskId,
    fileData,
    district,
    title,
    fee,
    startTime,
    endTime,
    isLiked = false,
  } = errandItemProps;
  const [liked, setLiked] = useState(isLiked);

  // 찜하기 상태를 토글하는 함수
  const toggleLiked = () => {
    setLiked(!liked);

    // 찜 상태 업뎃 api 호출 로직 필요
  };

  console.log("심부름 내역", {
    taskId,
    fileData,
    district,
    title,
    fee,
    startTime,
    endTime,
    isLiked,
  });

  return (
    <ErrandItemWrapper>
      <Link to={`/errand/${taskId}`}>
        <ItemLeft fileData={fileData}>
          <img
            src={fileData || defaultProfileImg}
            alt={`${title}의 심부름 이미지`}
          />
        </ItemLeft>
        <ItemRight>
          <span>{district}</span>
          <h4>{title}</h4>
          <p>{fee}원</p>
          <Time>
            <span>{startTime || `지금 즉시 헬프미`}</span>
            <span>{endTime || `시간 제한 없음`}</span>
          </Time>
        </ItemRight>
        <LikedButton isLiked={liked} onToggleLiked={toggleLiked} />
      </Link>
    </ErrandItemWrapper>
  );
};

const ErrandItemWrapper = styled.li`
  position: relative;
  margin-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey50};
  a {
    display: flex;
    grid-gap: 20px;
    align-items: center;
  }

  h4 {
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 12px;
    font-weight: 400;
  }
  p {
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.blue};
  }
  span {
    display: inline-block;
    font-size: 12px;
    color: ${({ theme }) => theme.color.grey400};
  }
`;

const ItemLeft = styled.div<{ fileData?: string }>`
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
    opacity: ${({ fileData }) =>
      fileData ? "1" : "0.6"}; // thumbnail이 없는 경우 투명도 적용
  }
`;

const ItemRight = styled.div`
  flex: 1;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;

  > span:last-child {
    font-weight: 700;
    color: ${({ theme }) => theme.color.orange};
  }
`;
