import { atom } from "recoil";

// 카테고리 상태
export const selectedCategoryIdState = atom({
  key: "selectedCategoryIdState",
  default: "",
});

// 카카오맵 도로명 주소
export const roadAddrState = atom({
  key: "roadAddrState",
  default: "",
});

// 카카오맵 지번 주소
export const jibunAddrState = atom({
  key: "jibunAddrState",
  default: "",
});

// 심부름 시간을 위한 상태
export const errandTimeState = atom({
  key: "errandTimeState", // 고유한 키
  default: { startDate: new Date(), endDate: new Date() },
});

// 경매 진행 시간을 위한 상태
export const auctionTimeState = atom({
  key: "auctionTimeState",
  default: { startDate: new Date(), endDate: new Date() },
});

// 이미지 파일 미리보기
export const uploadImgState = atom({
  key: "uploadImgState",
  default: [],
});
