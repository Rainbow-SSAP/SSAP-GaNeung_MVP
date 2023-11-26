import React from "react";
import styled from "styled-components";

const UserProfile = ({ data }) => {
  return (
    <OutsideLayout>
      <InsideLayout>
        <UserThumbnail>
          <img src={data.profileImageUrl} />
        </UserThumbnail>
        <UserInfoLayout>
          <UserInfoDetail>
            <UserNickname>{data.name}</UserNickname>
            <UserAge>
              {data.gender}
              {data.ageRange}
            </UserAge>
          </UserInfoDetail>
        </UserInfoLayout>
      </InsideLayout>
    </OutsideLayout>
  );
};

export default UserProfile;

const OutsideLayout = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  border: 1px solid #f4f4f4;
  background: #fff;
`;

const InsideLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  align-self: stretch;
`;

const UserThumbnail = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  padding: 1.8rem 3.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 50%;
  background: #c4c4c4;
  overflow: hidden;
`;

const UserInfoLayout = styled.div`
  display: flex;
  width: 18rem;
  flex-direction: column;
  align-items: flex-start;
`;

const UserInfoDetail = styled.div`
  display: flex;
  flex-flow: column;
  height: 2.2rem;
  /* align-items: center; */
  justify-content: center;
  gap: 0.4rem;
  align-self: stretch;
`;

const UserNickname = styled.h1`
  color: #262626;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.2rem;
`;

const UserAge = styled.h3`
  color: #a8a8a8;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
`;
