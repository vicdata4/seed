import { months, days } from './constants';

/**
  * FORMATTERS
  */

export const dateFormatter = (date_) => {
  const date = new Date(date_);

  const monthDay = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  const weekDayName = days[date.getDay()];
  const hour = date.getHours();
  const minute = date.getMinutes();

  return {
    default: monthName + ' ' + monthDay + ', ' + year,
    short: monthName.slice(0, 3) + ' ' + monthDay,
    day: weekDayName,
    hour: (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute)
  };
};

export const textAreaFormatter = (text) => {
  const breakLines = /\n\r?/g;
  return text
    .replace(breakLines, '</br>');
};

/**
  * VALIDATORS
  */

const emailValidator = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const loginValidator = (data) => {
  const { mail, password } = data;
  if (mail && password) {
    if (emailValidator(mail)) {
      if (password.length > 5) {
        return true;
      } else {
        return 'Password too short';
      }
    } else {
      return 'Invalid email format';
    }
  } else {
    return 'Complete all fields';
  }
};

export const sortBy = (a, b) => {
  return (a.createdAt > b.createdAt) ? -1 : (a.createdAt < b.createdAt) ? 1 : 0;
};
