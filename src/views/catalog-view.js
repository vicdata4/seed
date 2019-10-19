import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedButtonStyle } from 'seed-catalog/styles.js';
import 'seed-catalog/components/seed-modal.js';

class CatalogView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedButtonStyle,
      css`
        :host {
          background-image: url('assets/images/backgrounds/keyboard.jpg');
        }
      `
    ];
  }

  render() {
    return html`
      <section>
          <h1>Seed catalog</h1>
          <hr>
          <h3>Web components catalog</h3>
          <p>Seed-catalog is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.</p>
          <div>
          <a href="https://seed-catalog.web.app" target="_blank" class="sd-btn blue">StoryBook</a>
          <seed-modal>
          <button slot="button" class="sd-btn-mix red"><i class="material-icons">people</i>Open modal</button>
          <span slot="title">Building Web Components</span>
          <button slot="close-btn" class="sd-btn-empty"><i class="material-icons blue-mate">close</i></button>
          
          <div slot="content">
            Duis sit amet sollicitudin nulla, sit amet molestie magna. Aenean interdum justo id iaculis hendrerit. Nullam sed tellus pretium, mattis dui vitae, placerat diam. <br><br>Nulla faucibus lacus sed mauris facilisis, a condimentum risus lobortis. Nunc egestas vehicula libero, non condimentum enim semper in. Donec efficitur convallis felis nec malesuada. Morbi ornare massa diam, ac ultrices magna suscipit a. Integer tempus sagittis ligula, ut fermentum magna suscipit a. Sed pellentesque consequat velit, ut convallis tellus. Mauris eget felis tortor. Aliquam sed consectetur ipsum. Praesent vel tortor consectetur sem mollis tincidunt vitae nec purus. Nullam ac scelerisque est, vitae iaculis magna. Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
          </div>
          <div slot="footer">
            <button class="sd-btn black">Close</button>
            <button class="sd-btn blue-mate">Send</button>
          </div> 
        </seed-modal>

        <seed-modal>
          <button slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">lock</i>Open modal</button>
          <span slot="title">Building Web Components</span>
          <button slot="close-btn" class="sd-btn-empty"><i class="material-icons blue-mate">close</i></button>
          
          <div slot="content">
            Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
          </div>
          <div slot="footer">
            <button class="sd-btn green-mate">Ok</button>
            <button class="sd-btn red-mate">Deny</button>
          </div> 
        </seed-modal>
        <button class="sd-btn-mix green"><i class="material-icons">folder</i>Success</button>
        </div>
        <div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('catalog-view', CatalogView);
