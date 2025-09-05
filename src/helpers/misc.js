import moment from "moment";
import { config } from "./config";

export const wait = (delay = 5) =>
  new Promise((resolve) => setTimeout(resolve, delay * 1000));

export const getGenderValues = () => {
  return config.genders.map((item) => item.value);
};

export const getTermValues = () => {
  return config.educationTerms.map((item) => item.value);
};

export const getDayLabel = (val) => {
  const day = config.days.find((t) => t.value === val);
  return day?.label ?? "";
};

export const getLessonNames = (lessons) => {
  return lessons.map((item) => item?.lessonName).join(" - ");
};

export const getDayValues = () => {
  return config.days.map((item) => item.value);
};

export const isLater = (timeBefore, timeAfter) => {
  const tb = moment(timeBefore, "HH:mm");
  const ta = moment(timeAfter, "HH:mm");
  return ta.isAfter(tb);
};

export const isStringArray = (str) => {
  try {
    const arr = JSON.parse(str);
    return Array.isArray(arr) && arr.length > 0;
  } catch (error) {
    return false;
  }
};

export const formatDate = (date) => {
  return moment(date).format("ll");
};

export const getTermLabel = (val) => {
  const term = config.educationTerms.find((t) => t.value == val);
  return term?.label ?? "";
};

export const isTimeValid = (timeString) => {
  return moment(timeString, "HH:mm", true).isValid();
};
