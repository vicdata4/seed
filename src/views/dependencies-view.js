import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedButtonStyle } from 'seed-catalog/styles.js';
import 'seed-catalog/components/seed-dropdown.js';

class DependenciesView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedButtonStyle,
      css`
        :host{
          background-image: url('assets/images/backgrounds/keyboard.jpg');
        }

        h5 {
          margin-top: 50px;
        }

        p > span {
          font-weight: 800;
        }

        seed-dropdown > p {
          color: white;
        }
        
        seed-dropdown > .sd-btn-mix {
          width: 100%;
          text-align: inherit;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>Dependencies</h1>
        <hr>
        <h3>package.json</h3>
        <p>Learn about Rollup.js, LitElement, Redux and how to build a web application based on web components.</p>
        <seed-dropdown mode="collapse" position="relative" rotate="true" backgroundColor="rgba(0,0,0,.3)" speed=".8">
            <button id="lol" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">keyboard_arrow_down</i>Rollup.js</button>
            <p slot="content" class="content">
              Rollup is a <span>module bundler</span> for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD.<br>ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.
              <a href="https://rollupjs.org/" target="_blank" class="sd-btn-mixr blue-mate sm">website<i class="material-icons">beenhere</i></a>
              <a href="https://www.npmjs.com/package/rollup" target="_blank" class="sd-btn purple sm">npm</a>
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse" position="relative" rotate="true" backgroundColor="transparent" speed=".8">
            <button id="lock" slot="button" class="sd-btn-mix green-mate"><i class="material-icons">keyboard_arrow_down</i>LitElement</button>
            <p slot="content" class="content">
              LitElement makes it easy to define Web Components – ideal for sharing elements across your organization or building a UI design system. Use your components anywhere you use HTML: in your main document, a CMS, Markdown, or a framework like React or Vue.
              <a href="https://lit-element.polymer-project.org/" target="_blank" class="sd-btn-mixr blue-mate sm">website<i class="material-icons">beenhere</i></a>
              <a href="https://www.npmjs.com/package/lit-element" target="_blank" class="sd-btn purple sm">npm</a>
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse" position="relative" rotate="true" backgroundColor="transparent" speed=".8">
            <button id="drot" slot="button" class="sd-btn-mix green"><i class="material-icons">keyboard_arrow_down</i>Redux</button>
            <p slot="content" class="content">
              Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.
              <a href="https://redux.js.org/" target="_blank" class="sd-btn-mixr blue-mate sm">website<i class="material-icons">beenhere</i></a>
              <a href="https://www.npmjs.com/package/redux" target="_blank" class="sd-btn purple sm">npm</a>
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse" position="relative" rotate="true" backgroundColor="transparent" speed=".8">
            <button id="lops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Vaadin</button>
            <p slot="content" class="content">
              Vaadin router is a small (< 7kb) yet powerful client-side router JS library. It uses a widely adopted express.js syntax for routers (users/:id) to map URLs to views based on Web Component. It has all the features you expect from a modern router: async route resolution, animated transition, child routes, navigation guards, redirects, and more. Vaadin router works with Web Components regardless of how they are created.
              <a href="https://vaadin.com/router" target="_blank" class="sd-btn-mixr blue-mate sm">website<i class="material-icons">beenhere</i></a>
              <a href="https://www.npmjs.com/package/@vaadin/router" target="_blank" class="sd-btn purple sm">npm</a>
            </p>
        </seed-dropdown>
      </section>
    `;
  }
}

window.customElements.define('dependencies-view', DependenciesView);
