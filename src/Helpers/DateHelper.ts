import {MONTH_SHORT} from '../Constants/Dates/Month';

const getMonthfromIndex = (index: number) => {
  return MONTH_SHORT[index];
};

export const utcToDateString = (date?: string) => {
  if (!date) return;

  const dateString = new Date(date);

  return `${getMonthfromIndex(
    dateString.getMonth(),
  )} ${dateString.getDate()}, ${dateString.getFullYear()}`;
};

export const utcToDateTimeString = (date?: string) => {
  if (!date) return;

  const dateString = new Date(date);

  return `${getMonthfromIndex(
    dateString.getMonth(),
  )} ${dateString.getDate()}, ${dateString.getFullYear()} at ${dateString.getUTCHours()}:${dateString.getUTCMinutes()}`;
};
