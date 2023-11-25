import React, { useEffect, useState } from "react";
import Template from "../../components/Template";
import Errands from "../../components/Main/Errands";
import Nav from "../../components/ErrandList/Nav";
import { ErrandItem } from "../../components/ErrandList/ErrandItem";
import { getCategories } from "../../apis/category";
import { fetchErrandCategory } from "../../apis/errandCategory";

function ErrandListPage() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = async (categoryId) => {
    try {
      const data = await fetchErrandCategory(categoryId);
      setSelectedCategory(data);
      console.log("handleCategoryClick 함수 내 data:", data);
      console.log("클릭됨!");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getCategories();
        setCategory(categoryData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Template headerProps={{ title: "사용자 위치" }}>
      <Nav handleCategoryClick={handleCategoryClick} />
      <Errands />
      {/* <ErrandItem /> */}
    </Template>
  );
}

export default ErrandListPage;
