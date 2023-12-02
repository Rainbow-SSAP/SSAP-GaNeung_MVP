import { atom } from "recoil";

// 메뉴 상태 관리
export const isMenuOpenState = atom({
  key: "isMenuOpenState",
  default: false,
});

// 로딩 상태 관리
export const loadingState = atom({
  key: "loadingState",
  default: true,
});
