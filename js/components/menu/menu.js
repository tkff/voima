const template = document.createElement('template')
template.innerHTML = ` 
<style>

.topnav {
  overflow: hidden;
  background-color: #333;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>

<div class="topnav">
  <a class="active" href="#login">Login</a>
  <a href="#about">About</a>
</div>
`

// <menu></menu>
class Menu extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.root = this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
 
  }
  disconnectedCallback() {
 
  }
  attributeChangedCallback(attrName, oldVal, newVal) {

  }
}

window.customElements.define('voima-menu', Menu)