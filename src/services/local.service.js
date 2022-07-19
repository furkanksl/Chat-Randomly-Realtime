import { v4 as uuidv4 } from "uuid";

export function createUserNickname() {
  var generatedUserNickname = uuidv4();

  localStorage.setItem("nickname", generatedUserNickname);

  return generatedUserNickname;
}

export function getUserNickname() {
  const userNickname = localStorage.getItem("nickname");

  return userNickname ?? createUserNickname();
}
