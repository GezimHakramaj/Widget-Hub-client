import { get } from "./xhr";
require("dotenv").config();

export async function getCovid() {
  const data = await get(`${process.env.REACT_APP_COVID_URL}`);
  return data;
}

export async function getNews() {
  const data = await get(`${process.env.REACT_APP_NEWS_URL}`);
  return data;
}

export async function getWeather() {
  const data = await get(`${process.env.REACT_APP_WEATHER_URL}`);
  return data;
}
