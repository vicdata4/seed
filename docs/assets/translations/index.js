/*
 * Configuration (add country)
 *   1 create .js and .png file with the same reference
 *   2 import new country .js file as below
 *   3 add reference into => const countries = {...}
 */

import * as es from './es';
import * as en from './en';
import * as fr from './fr';

export const countries = { en, fr, es };

/** **/

const path = location.pathname.substring(1);

export const countryPath = countries[path] && location.pathname.length === 3;

export const currentCountry = () => {
  // navigator preference (default)
  let country = navigator.language.slice(0, 2) || 'en';

  // overwrite session preference
  if (navigator.cookieEnabled && sessionStorage.getItem('language')) {
    country = sessionStorage.getItem('language');
  }
  // overwrite route/path preference
  if (countryPath) {
    country = path;
    if (navigator.cookieEnabled) sessionStorage.setItem('language', country);
  }

  return country;
};

export const locales = countries[currentCountry()].default;
