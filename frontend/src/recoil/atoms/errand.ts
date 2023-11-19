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
