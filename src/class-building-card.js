/* eslint-disable lit/no-invalid-html */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';

class ClassBuildingCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true,
      },
      description: {
        type: String,
        reflect: true,
      },
      accentColor: {
        type: String,
        reflect: true,
        attribute: 'accent-color',
      },
      openDetails: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.header = 'My app';
    this.name = 'Westgate Building';
    this.img =
      'https://ist.psu.edu/sites/default/files/featured/visitor-info.jpg';
    this.description =
      "The Westgate building is located on the west end of Penn State’s University Park campus in University Park, Pennsylvania, housing the College of Information Sciences and Technology. Inside the building you'll find 199,000 square-feet of classroom spaces and gathering spaces, for studying, meetings, or just hanging out.";
    this.top = 'I hate this place';
    this.details = 'The IST Powerhouse of the cell';
    this.accentColor =
      'linear-gradient(180.3deg, rgb(221, 221, 221) 5.5%, rgb(110, 136, 161) 90.2%)';
    this.openDetails = false;
  }

  static styles = css`
    .card {
      background: linear-gradient(
        180.3deg,
        rgb(221, 221, 221) 5.5%,
        rgb(110, 136, 161) 90.2%
      );
      border-radius: 2%;
      padding: 15px;
    }
    .title {
      font-family: Georgia;
      color: navy;
      text-align: center;
      padding: 8px;
    }
    meme-maker {
      width: 50%;
    }
    .inside-card {
      background-color: lightGray;
      margin: 8px;
      display: flex;
      border: 6px #32a1ce;
      border-radius: 7px;
    }
    .building {
      width: 50%;
    }

    .haxButton {
      background-color: azure;
      display: inline-block;
      padding: 10px;
      font-family: Georgia;
      font-weight: bold;
      box-shadow: 5px 3px 3px;
    }

    .haxButton:hover {
      background-color: lightBlue;
      display: inline-block;
      padding: 16px;
      font-family: Georgia;
      font-weight: bold;
    }
    .duplicate:hover {
      background-color: navy;
      color: white;
    }
    .hovered:hover {
      background-color: #456936;
    }

    @media screen and (max-width: 500px) {
      .card {
        width: 100%;
        padding: 8px;
      }
      .inside-card {
        margin: auto;
        width: 100%;
        display: flex;
      }
      .building {
        width: 50%;
        margin: 8px;
      }
      .alternate {
        background-color: #191a36;
      }
    }
    @media screen and (min-width: 500px) and (max-width: 800px) {
      .card {
        width: 100%;
      }

      .inside-card {
        background-color: smoke;
        width: 100%;
        display: flex;
        margin: 10px;
        border: thick double #32a1ce;
        border-radius: 10px;
        padding: 16px;
      }

      .not-image {
        margin: 8px;
      }
      .image {
        margin: 16px;
      }

      .description {
        font-size: 12pt;
        font-family: Georgia;
      }
    }
    @media screen and (min-width: 800px) {
      .card {
        width: 800px;
      }

      .title {
        color: grey;
        text-align: center;
        padding: 20px;
      }

      .building {
        margin: 20px 30px;
      }

      .description {
        font-size: 12pt;
        font-family: Georgia;
      }

      .haxButton {
        display: none;
      }
    }
  `;

  render() {
    return html`
      <div class="card">
        <h1 class="title">${this.name}</h1>
        <section class="inside-card">
        <meme-maker img="${this.url}" top-text="${this.top}"></meme-maker>
          <img class="building" src="${this.img}"  alt="${this.name}">
          <div class="not-image">
          <p class="description">${this.description}</p>
                    <slot></slot>
                <details class="details" .open="${this.openDetails}">
                <p class="description"></p>
            <a class="haxButton" href="#">Details </a>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('class-building-card', ClassBuildingCard);
