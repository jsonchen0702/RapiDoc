import { LitElement, html } from 'lit-element';
import FontStyles from '@/styles/font-styles';
import BorderStyles from '@/styles/border-styles';


export default class JsonTree extends LitElement {
  static get properties() {
    return {
      isCopied: { type: Boolean },
      data: { type: Object },
      renderStyle: { type: String, attribute: 'render-style' },
      isLast: { type: Boolean },
    };
  }


  /* eslint-disable indent */
  render() {
    return html`
      ${FontStyles}
      ${BorderStyles}
      <style>
        :host{
          display:flex;
        }
        .json-tree {
          font-family: var(--font-mono);
          font-size: var(--font-size-small);
          display:inline-block;
          overflow:hidden;
          word-break: break-all;
          flex:1;
          line-height: 18px;
        }

        .open-bracket{
          display:inline-block;
          padding: 0 20px 0 0;
          cursor:pointer;
          border: 1px solid transparent;
          border-radius:3px;
        }
        .open-bracket:hover{
          color:var(--primary-color);
          background-color:var(--hover-color);
          border: 1px solid var(--border-color);
        }
        .inside-bracket{
          padding-left:12px;
          border-left:1px dotted var(--border-color);
        }
        .open-bracket.collapsed + .inside-bracket,
        .open-bracket.collapsed + .inside-bracket + .close-bracket {
          display:none;
        }

        .string{color:var(--green);}
        .number{color:var(--blue);}
        .null{color:var(--red);}
        .boolean{color:var(--purple);}
        .object{color:var(--fg)}
        .toolbar {
          display:flex;
          width:100%;
          padding: 2px 0;
          color:var(--primary-color);
          font-family: var(--font-regular);
          margin-bottom:4px;
          align-items: center;
          font-size: calc(var(--font-size-small) - 1px);
        }
        .toolbar-btn{
          cursor:pointer;
          padding:4px 6px;
          margin:0 2px;
          color:var(--primary-color-invert);
          background-color: var(--primary-color);
          border-radius:2px;
          border:none;
        }
      </style>
      <div class = "json-tree" >
        <div class='toolbar'> 
          <button  class="toolbar-btn" @click='${(e) => { this.copyExample(this.data, e); }}'> COPY </button>
          <span style="margin-left:8px; color:var(--green)"> ${this.isCopied ? 'Copied' : ''} </span>
        </div>
        ${this.generateTree(this.data, this.isLast)}
      </div>  
    `;
  }

  generateTree(data, isLast = false) {
    if (data === null) {
      return html`<div class="null" style="display:inline;">null</div>`;
    }
    if (typeof data === 'object') {
      const detailType = Array.isArray(data) ? 'array' : 'pure_object';
      if (Object.keys(data).length === 0) {
        return html`${(Array.isArray(data) ? '[ ],' : '{ },')}`;
      }
      return html`
      <div class="open-bracket expanded ${detailType === 'array' ? 'array' : 'object'} " @click="${this.toggleExpand}" > ${detailType === 'array' ? '[' : '{'}</div>
      <div class="inside-bracket">
        ${Object.keys(data).map((key, i, a) => html`
          <div class="item"> 
            ${detailType === 'pure_object' ? html`${key}:` : ''}
            ${this.generateTree(data[key], i === (a.length - 1))}
          </div>`)
        }
      </div>
      <div class="close-bracket">${detailType === 'array' ? ']' : '}'}${isLast ? '' : ','}</div>
      `;
    }

    return typeof data === 'string'
      ? html`<span class="${typeof data}">"${data}"</span>${isLast ? '' : ','}`
      : html`<span class="${typeof data}">${data}</span>${isLast ? '' : ','}`;
  }
  /* eslint-enable indent */

  copyExample(data) {
    const textArea = document.createElement('textarea');
    textArea.value = JSON.stringify(data, null, 2);
    textArea.style.position = 'fixed'; // avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
    } catch (err) {
      console.error('Unable to copy', err); // eslint-disable-line no-console
    }
    document.body.removeChild(textArea);
  }

  toggleExpand(e) {
    const openBracketEl = e.target;
    const closeBacketText = openBracketEl.nextSibling.nextSibling.innerHTML;
    if (openBracketEl.classList.contains('expanded')) {
      openBracketEl.classList.replace('expanded', 'collapsed');
      e.target.innerHTML = e.target.classList.contains('array') ? `[...${closeBacketText}` : `{...${closeBacketText}`;
    } else {
      openBracketEl.classList.replace('collapsed', 'expanded');
      e.target.innerHTML = e.target.classList.contains('array') ? '[' : '{';
    }
  }
}
// Register the element with the browser
customElements.define('json-tree', JsonTree);
