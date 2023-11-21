import { atom } from "recoil";
import { Category } from "../../types/errand";

// 하위 카테고리 상태
export const detailedItemState = atom<Category[]>({
  key: "detailedItemState",
  default: [],
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
