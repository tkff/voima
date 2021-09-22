const template = document.createElement('template')
template.innerHTML = `
<style>
  .preview {
    width: 200px;
    height: 200px;
  }
</style>

<div>
  <form id="upload-form" >
    <input id="file-input" type="file"  >
    <button type="submit">Send</button>
  </form>
  <div class="preview">
    <img id="preview"/>
  </div>
</div>
`

// <upload></upload>
class Upload extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.root = this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  isImage(type) {
    return type.includes('image')
  }

  submitFile(e) {
    e.preventDefault()
  }

  validateFile(e) {
    const fileType =  e.target.files[0].type
    if (this.isImage(fileType)){
      let reader = new FileReader();
      reader.onload = () => {
        let output = this.shadowRoot.querySelector('#preview');
        output.src = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    } 
  }

  connectedCallback() {
   this.shadowRoot.querySelector('#upload-form').addEventListener('submit', (e) => this.submitFile(e))
   this.shadowRoot.querySelector('#file-input').addEventListener('change', (e) => this.validateFile(e))
  }

  disconnectedCallback() {
   this.shadowRoot.querySelector('#upload-form').removeEventListener()
   this.shadowRoot.querySelector('#file-input').removeEventListener()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('voima-upload', Upload);