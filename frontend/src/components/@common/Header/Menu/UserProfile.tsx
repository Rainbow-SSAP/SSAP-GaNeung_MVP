import React, { useEffect } from "react";
import styled from "styled-components";
import defaultProfileImg from "../../../../assets/images/ssap_icon.svg";
import { useLogoutHandler } from "../../../../apis/Logout";
import user from "../../../../mocks/userData.json";
import { useRecoilValue } from "recoil";
// import { authInfoState } from "../../recoil/atoms/userInfo";

function UserProfile() {
  // const authInfo = useRecoilValue(authInfoState); // TODO 로그인된 사용자 데이터로 변경 예정
  const logoutFunction = useLogoutHandler();

  // 로그아웃 처리
  const handleLogout = () => {
    logoutFunction();
  };

  return (
    <UserProfileWrapper>
      <UserImgBox>
        <img
          src={user.profileImageUrl || defaultProfileImg}
          alt={`${user.userName}의 프로필 이미지`}
        />
      </UserImgBox>
      <UserInfo>
        <h4>{user.userName}</h4>
        <p>{user.introduction || "자기소개를 입력해 주세요."}</p>
      </UserInfo>
      <Logout onClick={handleLogout}>로그아웃</Logout>
    </UserProfileWrapper>
  );
}

const UserProfileWrapper = styled.div`
  display: flex;
  grid-gap: 20px;
  position: relative;
  padding: 20px 0;
`;

const UserImgBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  > img {
    width: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h4 {
    font-size: 22px;
    margin-bottom: 12px;
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.color.grey400};
  }
`;

const Logout = styled.button`
  position: absolute;
  top: 2.6rem;
  right: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey400};
  padding: 0;
  color: ${({ theme }) => theme.color.grey400};
  background-color: white;
`;

export default UserProfile;
