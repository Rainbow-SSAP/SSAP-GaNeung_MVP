import React from "react";
import Template from "../../components/Template";
import Errands from "../../components/ErrandList/Errands";
import Nav from "../../components/ErrandList/Nav";

function ErrandListPage() {
  return (
    <Template headerProps={{ title: "사용자 위치" }}>
      <Nav />
      <Errands />
    </Template>
  );
}

export default ErrandListPage;
