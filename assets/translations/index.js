/*
 * Configuration (after creating .js and .png file)
 * 1 import new country .js file as below
 * 2 add reference into => const countries = {...}
 */

import * as es from './es';
import * as en from './en';
import * as fr from './fr';

export const countries = { en, es, fr };

/*
 * End configuration
 */

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
