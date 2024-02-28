import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authInfoState } from "../../recoil/atoms/userInfo";
import getKakaoLocation, { fetchUserAddress } from "../../apis/loaction";
import { headerImage } from "../../assets/headerImages";
import styled from "styled-components";
import { Button } from "../../components/@common/Button/Button";
import { useMutation } from "react-query";
import Loading from "../../components/Loading/Loding";

export default function LocationConsentPage() {
  const navigate = useNavigate();
  const userProfile = useRecoilValue(authInfoState);
  const [authInfo, setAuthInfo] = useRecoilState(authInfoState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("사용자 주소: ", userProfile.userEmail);
  // const email = userProfile.userEmail;

  const { mutate } = useMutation(fetchUserAddress, {
    onSuccess: () => {
      console.log("서버에 유저 주소 저장 성공");
    },
    onError: () => {
      setLoading(false);
    },
  });

  const handleLocationConsent = async () => {
    setLoading(true);
    setError(null);
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const x = position.coords.longitude; // 경도
        const y = position.coords.latitude; // 위도

        try {
          const data = await getKakaoLocation(x, y);
          const address_name = data.documents[1].address_name;
          const region_3depth_name = data.documents[1].region_3depth_name;
          console.log("현재 위치 정보: ", address_name);

          mutate({
            address: address_name,
            email: userProfile.userEmail,
          });

          setAuthInfo({
            ...authInfo,
            address: address_name,
            shortAddress: region_3depth_name,
          });

          setLoading(false);
          navigate("/");
        } catch (error) {
          console.error("위치 정보를 가져오는 데 실패했습니다:", error);
          setError(
            "위치 정보를 가져오는데 실패했습니다. 설정을 확인하거나 다시 시도해주세요.",
          );
          setLoading(false);
        }
      },
      (error) => {
        console.error("위치 정보 접근 권한을 거부하였습니다:", error);
        setError(
          "위치 정보 접근을 거부하였습니다. 설정을 확인하거나 다시 시도해주세요.",
        );
      },
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LocationConsentWrapper>
          <Container>
            {/* <h1>위치 정보 동의</h1> */}
            <LocationIcon>
              <img src={headerImage.placeholder} alt="위치 아이콘" />
            </LocationIcon>
            <p>모든 심부름 SSAP에서 쌉가능!</p>
            {error ? (
              <>
                <span>
                  서비스 이용을 위해 위치 정보 접근 권한이 필요합니다. <br />내
                  동네를 설정하고 시작해보세요.
                </span>
                <Button
                  size="large"
                  text="다시 시도하기"
                  onClick={handleLocationConsent}
                />
              </>
            ) : (
              <>
                <span>{error}</span>
                <Button
                  size="large"
                  text="동의하고 시작하기"
                  onClick={handleLocationConsent}
                />
              </>
            )}
          </Container>
        </LocationConsentWrapper>
      )}
    </>
  );
}

const LocationConsentWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 320px;
  max-height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  /* 웹 환경에서의 스타일 */
  @media (min-width: 321px) {
    max-width: 768px;
    min-width: 320px;
    margin: 0 auto;
  }
`;
const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc((var(--vh, 1vh) * 100));
  text-align: center;
  color: white;

  p {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 20px;
  }
  span {
    font-size: 14px;
    line-height: 1.8;
  }

  button {
    width: 90%;
    background-color: #5e6eff;
    margin-top: 8rem;
  }
`;

const LocationIcon = styled.div`
  width: 160px;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;
