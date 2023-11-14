import { atom } from "recoil";
import { Category } from "../../types/errand";

// 하위 카테고리 상태
export const detailedItemState = atom<Category[]>({
  key: "detailedItemState",
  default: [],
});
