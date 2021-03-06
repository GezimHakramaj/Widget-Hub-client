import { get, post, put, del } from "./xhr";
require("dotenv").config();

export async function me() {
  const user = await get(`${process.env.REACT_APP_ME_URL}`);
  return user;
}

export async function signup(data) {
  const user = await post(`${process.env.REACT_APP_SIGNUP_URL}`, data);
  return user;
}

export async function login(data) {
  const user = await post(`${process.env.REACT_APP_LOGIN_URL}`, data);
  return user;
}

export async function logout() {
  await del(`${process.env.REACT_APP_LOGOUT_URL}`);
}

export async function updatePrefs(data) {
  const res = await put(`${process.env.REACT_APP_UPDATE_PREFS_URL}`, data);
  return res;
}

export async function updateTasks(data) {
  const res = await put(`${process.env.REACT_APP_UPDATE_TASKS_URL}`, data);
  return res;
}
