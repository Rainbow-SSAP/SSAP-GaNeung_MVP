import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";

export interface LikedButtonProps {
  isLiked: boolean;
  onToggleLiked: () => void; // 찜하기 상태를 변경하는 함수
}

export const LikedButton = ({ isLiked, onToggleLiked }: LikedButtonProps) => {
  return (
    <Liked onClick={onToggleLiked}>
      {isLiked ? <FaHeart /> : <StyledFaRegHeart />}
    </Liked>
  );
};
const Liked = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: white;
  > * {
    font-size: 12px;
  }
`;
const StyledFaRegHeart = styled(FaRegHeart)`
  color: ${({ theme }) => theme.color.grey100};
`;
