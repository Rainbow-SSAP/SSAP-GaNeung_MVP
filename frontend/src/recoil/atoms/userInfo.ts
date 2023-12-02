import { atom } from "recoil";

export const authInfoState = atom({
  key: "authInfo",
  default: {
    accessToken: "",
    userName: "",
    userEmail: "",
    ageRange: "",
    birthdate: "",
    gender: "",
    profileImageUrl: "",
    introduction: "",
  },
});
