import { atom } from "recoil";

export const userLocationState = atom({
  key: "userLocationState",
  default: "",
  // {
  // location: { latitude: null, longitude: null },
  // address: "",
  // },
});
