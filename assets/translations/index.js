import * as es from './es';
import * as en from './en';
import * as fr from './fr';

// Include new country reference to this constant after creating .js and .png file
export const countries = { en, es, fr };

const path = location.pathname.substring(1);

export const countryPath = countries[path] && location.pathname.length === 3;

const get = () => {
  let country = sessionStorage.getItem('language') || navigator.language.slice(0, 2) || 'en';

  if (countryPath) {
    country = path;
    sessionStorage.setItem('language', country);
  }

  return countries[country].default;
};

export const locales = get();
