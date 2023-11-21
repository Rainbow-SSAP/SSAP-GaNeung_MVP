import React from "react";
import { KAKAO_AUTH_URL } from "../../apis/OAuth";
import kakaoImage from "../../assets/Kakao.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    // <Link to={KAKAO_AUTH_URL} className="kakaobtn">
    //   <img src={kakaoImage} alt="kakao login btn" />
    // </Link>
    <a href={KAKAO_AUTH_URL} className="kakaobtn">
      <img src={kakaoImage} alt="kakao login btn" />
    </a>
  );
}
