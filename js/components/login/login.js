
const template = document.createElement('template')
template.innerHTML = `
<style>

</style>

<div id="login-form" class="modal">  
  <form class="modal-content animate" action="" >
    
    <div class="container">
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" required>

      <label for="passwd"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="passwd" required>
        
      <button type="submit">Login</button>
    </div>

  </form>
</div>
`

// <login></login>
class Login extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.root = this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  validateLogin(e) {
    e.preventDefault()
    const validUserName = 'Tomi'
    const validPassword = 'salasana'  
    let form = e.target
    let username = form.elements['username'].value
    let passwd = form.elements['passwd'].value
    if (username == validUserName && passwd == validPassword){
      window.location.href = 'upload.html'
    }else {
      alert('Sorry, try again!')
    }

  }

  connectedCallback() {
    this.shadowRoot.querySelector('#login-form').addEventListener('submit', (e) => this.validateLogin(e)
    )
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#login-form').removeEventListener()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
  
  }
}

window.customElements.define('voima-login', Login);