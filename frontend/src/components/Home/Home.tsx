import React from "react";
import { Button } from "../../components/@common/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/errand/request");
  };
  return (
    <div>
      <Button text="✋ 요청하기" size="medium" onClick={handleClick} />
    </div>
  );
}

export default Home;
