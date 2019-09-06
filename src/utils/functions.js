import { months, days } from './constants';

export const sortBy = (a, b) => {
  return (a.createdAt > b.createdAt) ? -1 : (a.createdAt < b.createdAt) ? 1 : 0;
};

export const dateFormat = (date) => {
  const formatDate = new Date(date);
  return formatDate.getDate() + ' ' + months[formatDate.getMonth()] + ' ' + formatDate.getFullYear();
};

export const dateHour = (date) => {
  const formatDate = new Date(date);
  return days[formatDate.getDay()] + ' ' + formatDate.getHours() + ':' + formatDate.getMinutes();
};
