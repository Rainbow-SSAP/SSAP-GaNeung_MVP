import React from "react";
import { KAKAO_AUTH_URL } from "../../apis/OAuth";
import kakaoImage from "../../assets/Kakao.png";
export default function LoginPage() {
  return (
    <a href={KAKAO_AUTH_URL} className="kakaobtn">
      <img src={kakaoImage} alt="kakao login btn" />
    </a>
  );
}
