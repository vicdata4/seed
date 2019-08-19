
function dedupeMixin(mixin) {
  return superClass => {
    const mixedClass = mixin(superClass);
    return mixedClass;
  };
}

export const countries = ['en', 'es', 'fr'];

export const LocalMixin = dedupeMixin(superclass =>
    // eslint-disable-next-line
  class LocalMixin extends superclass {

    static get properties() {
      return {
          locales: { type: Object },
          paises: { type: Array},
          countryPath: { type: Boolean},
          navigator: { type: Array} 
      };
    }

    constructor() {
      super();
      this.navigator = [];
      this.locales = {};
      this.paises = countries;
      this.path = location.pathname.substring(1);
      this.countryPath = countries.includes(this.path) && location.pathname.length === 3;
      this.dynamicImport();
      this.currentCountry = this.currentCountry();
    }

    async dynamicImport() {
      const country = this.currentCountry();
      const string = '../assets/translations/' + country + '.js';
      await import(string).then(x => {
        this.locales = x.default;
        this.setNavigator();
      });
    }

    setNavigator() {
      this.navigator = [{
        path: '/',
        name: this.locales.nav_home
      },
      {
        path: '/rollup',
        name: 'RollUp'
      },
      {
        path: '/litelement',
        name: 'Lit-Element'
      },
      {
        path: '/vaadin',
        name: 'Vaadin'
      },
      {
        path: '/redux',
        name: 'Redux'
      }
      ];
    }

    currentCountry() {
      // navigator preference (default)
      let country = navigator.language.slice(0, 2) || 'en';
    
      // overwrite session preference
      if (navigator.cookieEnabled && sessionStorage.getItem('language')) {
        country = sessionStorage.getItem('language');
      }
      // overwrite route/path preference

      if (this.countryPath) {
        country = this.path;
        if (navigator.cookieEnabled) sessionStorage.setItem('language', country);
      }

      return country;
    };
  }
);
