import { LitElement, html, css } from 'lit-element';
import { close } from '../utils/svg-icons';

class NavigationMenu extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0,0,0,.8);
          --app-color-blue-light: #21bfbf;
          
        }

        section {
          display: flex;
          align-items: center;
          flex-flow: row wrap;
          justify-content: center;
          padding: 0;
          height: 100%;
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
          list-style: none;
          white-space: nowrap;
          font-size: 20px;
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

        .close {
          position: absolute;
          border: none;
          top: 0;
          left: 0;
          padding: 20px;
          background: unset;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .close {
            display: none;  
          }

          ul {
            font-size: 15px;
          }
        }
      `,
    ];
  }

  constructor() {
    super();

    this.navList = [
      {
        path: '/',
        name: 'Home'
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
      },
    ];
  }

  firstUpdated(){
    this.setActiveViaPath();
  }

  render() {
    return html`
     <section>
     <button class="close" @click="${this.closeMobileMenu}">${close}</button>
       <ul>
        ${this.navList.map((x, i) => html `
          <li><a href="${x.path}" @click="${() => this.setActive(i)}">${x.name}</a></li>
        `)}
      </ul>
     </section>
    `;
  }

  closeMobileMenu() {
    this.style.left = '100%';
  }

  setActiveViaPath() {
    this.setActive(this.navList.findIndex((i) => i.path === location.pathname));
  }

  setActive(index){
    const navList = this.shadowRoot.querySelectorAll('a');
    this.closeMobileMenu();

    navList.forEach((x, i) => {
      x.className = (i == index) ? 'active' : '';
    }); 
  }
}

window.customElements.define('navigation-menu', NavigationMenu);