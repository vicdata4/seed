import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedStyle } from 'seed-catalog/styles.js';
import { locales } from '../../assets/translations';
import 'seed-catalog/components/seed-modal.js';

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
          <span slot="title">${locales.catalog_modal_title}</span>
          <button slot="close-btn" class="sd-btn-empty"><i class="material-icons blue-mate">close</i></button>
        
          <div slot="content">
            Duis sit amet sollicitudin nulla, sit amet molestie magna. Aenean interdum justo id iaculis hendrerit. Nullam sed tellus pretium, mattis dui vitae, placerat diam. <br><br>Nulla faucibus lacus sed mauris facilisis, a condimentum risus lobortis. Nunc egestas vehicula libero, non condimentum enim semper in. Donec efficitur convallis felis nec malesuada. Morbi ornare massa diam, ac ultrices magna suscipit a. Integer tempus sagittis ligula, ut fermentum magna suscipit a. Sed pellentesque consequat velit, ut convallis tellus. Mauris eget felis tortor. Aliquam sed consectetur ipsum. Praesent vel tortor consectetur sem mollis tincidunt vitae nec purus. Nullam ac scelerisque est, vitae iaculis magna. Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.<br><br>Nulla faucibus lacus sed mauris facilisis, a condimentum risus lobortis. Nunc egestas vehicula libero, non condimentum enim semper in. Donec efficitur convallis felis nec malesuada. Morbi ornare massa diam, ac ultrices magna suscipit a. Integer tempus sagittis ligula, ut fermentum magna suscipit a. Sed pellentesque consequat velit, ut convallis tellus. Mauris eget felis tortor. Aliquam sed consectetur ipsum. Praesent vel tortor consectetur sem mollis tincidunt vitae nec purus. Nullam ac scelerisque est, vitae iaculis magna. Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
          </div>
          <div slot="footer">
            <button class="sd-btn black">Close</button>
            <button class="sd-btn blue-mate">Send</button>
          </div> 
        </seed-modal>

        <seed-modal alignWindow="center">
          <button slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">info</i>Centered modal</button>
          <span slot="title">${locales.catalog_modal_title}</span>
          <button slot="close-btn" class="sd-btn-empty"><i class="material-icons green-mate">close</i></button>
          
          <div slot="content">
            Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
          </div>
          <div slot="footer">
            <button class="sd-btn green-mate">Ok</button>
            <button class="sd-btn red-mate">Deny</button>
          </div> 
        </seed-modal>
        <a href="https://seed-catalog.web.app" target="_blank" class="sd-btn-mix green"><i class="material-icons">star_border</i>Storybook</a>
        <a href="https://github.com/vicdata4/seed-catalog" target="_blank" class="sd-btn-mix yellow"><i class="material-icons">search</i>Github</a>
        </div>
        <div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('catalog-view', CatalogView);
