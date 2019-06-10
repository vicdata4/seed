import { LitElement, html, css } from 'lit-element';
import { CustomStyles } from '../utils/custom-styles';

class NavigationMenu extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          --app-color-blue-light: #21bfbf;
        }

        section {
          display: flex;
          align-items: center;
          flex-flow: row wrap;
          justify-content: center;
          padding: 0;
        }

        a {
          padding: 10px;
          text-decoration: none;
          color: white;
          transform: all 1s;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        li {
          padding:20px;
          text-align: center;
        }

        a:hover {
          color: var(--app-color-blue-light);
        }

        .active {
          border-bottom: 1px solid #929191;
          border-top-right-radius: 10px;
          color: var(--app-color-blue-light);
          animation: all 1s;
        }
      `,
    ];
  }

  constructor() {
    super();

    this.navList = [
      {
        route: '/',
        name: 'Home'
      },
      {
        route: '/rollup',
        name: 'RollUp'
      },
      {
        route: '/litelement',
        name: 'Lit-Element'
      },
      {
        route: '/vaadin',
        name: 'Vaadin'
      },
      {
        route: '/redux',
        name: 'Redux'
      },
    ];
  }

  firstUpdated(){
    this.setActiveViaPath();
  }

  render() {
    return html`
     <section>
       <ul>
        ${this.navList.map((x, i) => html `
          <li><a href="${x.route}" @click="${() => this.setActive(i)}">${x.name}</a></li>
        `)}
        </ul>
     </section>
    `;
  }

  setActiveViaPath() {
    this.navList.forEach((x, i) => {
      if (x.route === location.pathname) this.setActive(i);
    }); 
  }

  setActive(index){
    const navList = this.shadowRoot.querySelectorAll('a');

    navList.forEach((x, i) => {
      x.className = (x.className === 'active' && i !== index) ? '' : (i == index) ? 'active' : '';
    }); 
  } 
}

window.customElements.define('navigation-menu', NavigationMenu);