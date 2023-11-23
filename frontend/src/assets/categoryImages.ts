import accompany_parenting from "./images/accompany_parenting.svg";
import agency from "./images/agency.svg";
import bug from "./images/bug.svg";
import cleaning from "./images/cleaning.svg";
import delivery from "./images/delivery.svg";
import other from "./images/other.svg";
import part_time from "./images/part_time.svg";
import pet from "./images/pet.svg";
import repair from "./images/repair.svg";

interface CategoryImageMap {
  [key: string]: string;
}

interface CategoryMapping {
  [categoryName: string]: string;
}

export const categoryMapping: CategoryMapping = {
  "배달·퀵": "delivery",
  청소: "cleaning",
  "운반·수리": "repair",
  "동행·육아": "accompany_parenting",
  펫: "pet",
  역할대행: "agency",
  알바: "part_time",
  벌레잡기: "bug",
  기타: "other",
};

export const categoryImage: CategoryImageMap = {
  delivery,
  cleaning,
  repair,
  accompany_parenting,
  pet,
  agency,
  part_time,
  other,
  bug,
};
