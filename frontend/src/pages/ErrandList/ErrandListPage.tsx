import React from "react";
import Template from "../../components/Template";
import Errands from "../../components/ErrandList/Errands";
import NavBar from "../../components/ErrandList/NavBar";

function ErrandListPage() {
  return (
    <Template headerProps={{ title: "사용자 위치" }}>
      <NavBar />
      <Errands />
    </Template>
  );
}

export default ErrandListPage;
