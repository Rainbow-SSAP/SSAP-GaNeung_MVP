import { atom } from "recoil";

// 메뉴 상태 관리
export const isMenuOpenState = atom({
  key: "isMenuOpenState",
  default: false,
});
