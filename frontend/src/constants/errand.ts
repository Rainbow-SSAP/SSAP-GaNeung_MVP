import { Category } from "../types/category";

export const categories: Category[] = [
  { id: 1, categoryName: "배달·퀵" },
  { id: 2, categoryName: "청소" },
  { id: 3, categoryName: "운반·수리" },
  { id: 4, categoryName: "동행·육아" },
  { id: 5, categoryName: "펫" },
  { id: 6, categoryName: "역할대행" },
  { id: 7, categoryName: "알바" },
  { id: 8, categoryName: "벌레잡기" },
  { id: 9, categoryName: "기타" },
];

export const buttonOtions = {
  preferredGender: ["없음", "남성", "여성"],
  timing: ["지금 즉시", "일정 예약"],
  auctionStatus: ["없음", "직접 설정"],
};
