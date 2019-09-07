import { months, days } from './constants';

export const sortBy = (a, b) => {
  return (a.createdAt > b.createdAt) ? -1 : (a.createdAt < b.createdAt) ? 1 : 0;
};

export const dateFormatter = (date) => {
  const formatDate = new Date(date);
  return {
    default: formatDate.getDate() + ' ' + months[formatDate.getMonth()] + ' ' + formatDate.getFullYear(),
    hour: formatDate.getHours() + ':' + formatDate.getMinutes(),
    day: days[formatDate.getDay()]
  };
};
