import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedStyle } from 'seed-catalog/styles.js';
import { locales } from '../../assets/translations';
import 'seed-catalog/modal.js';

class CatalogView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedStyle,
      css`
        :host {
          background-image: url('assets/images/backgrounds/keyboard.jpg');
        }

        button {
          margin-bottom: 7px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #dedede;
        }

        .footer {
          display: flex;
          justify-content: flex-end;
        }

        .footer button {
          margin-left: 5px;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
          <h1>Seed catalog</h1>
          <hr>
          <h3>${locales.catalog_subtitle}</h3>
          <p>${locales.catalog_text}</p>
          <div>

        <seed-modal>
          <button slot="button" class="sd-btn-mix red"><i class="material-icons">tv</i>Default modal</button>
          <div slot="header" class="header">      
            <span>${locales.catalog_modal_title}</span>
            <button class="sd-icon clear close"><i class="material-icons blue-mate">close</i></button>
          </div>

          <div slot="content">
            Duis sit amet sollicitudin nulla, sit amet molestie magna. Aenean interdum justo id iaculis hendrerit. Nullam sed tellus pretium, mattis dui vitae, placerat diam. <br><br>Nulla faucibus lacus sed mauris facilisis, a condimentum risus lobortis. Nunc egestas vehicula libero, non condimentum enim semper in. Donec efficitur convallis felis nec malesuada. Morbi ornare massa diam, ac ultrices magna suscipit a. Integer tempus sagittis ligula, ut fermentum magna suscipit a. Sed pellentesque consequat velit, ut convallis tellus. Mauris eget felis tortor. Aliquam sed consectetur ipsum. Praesent vel tortor consectetur sem mollis tincidunt vitae nec purus.
          </div>
          <div slot="footer" class="footer">
            <button class="sd-btn black close">Close</button>
            <button class="sd-btn blue-mate">Send</button>
          </div> 
        </seed-modal>

        <seed-modal centered>
          <button slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">info</i>Centered modal</button>
          <div slot="header" class="header">      
            <span>${locales.catalog_modal_title}</span>
            <button class="sd-icon clear close"><i class="material-icons blue-mate">close</i></button>
          </div>
          
          <div slot="content">
            Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
          </div>
          <div slot="footer" class="footer">
            <button class="sd-btn green-mate">Ok</button>
            <button class="sd-btn red-mate">Deny</button>
          </div> 
        </seed-modal>
        <a href="https://seed-catalog.com" target="_blank" class="sd-btn-mix green"><i class="material-icons">star_border</i>Storybook</a>
        <a href="https://github.com/vicdata4/seed-catalog" target="_blank" class="sd-btn-mix yellow"><i class="material-icons">search</i>Github</a>
        </div>
        <div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('catalog-view', CatalogView);
