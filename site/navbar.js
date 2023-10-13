// navbar-component.js

class NavbarComponent extends HTMLElement {
    constructor() {
      super();
      // Attach a shadow root to the element.
      const shadowRoot = this.attachShadow({ mode: 'open' });
      
      shadowRoot.innerHTML = `
        <style>
            .navbar {
                background-color: #333;
                overflow: hidden;
                padding: 0.5rem;
            }
            
            .navbar a {
                float: left;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
            
            .navbar a:hover {
                background-color: #ddd;
                color: black;
            }
        </style>
        
        <div class="navbar">
            <a href="index.html">Home</a>
            <a href="rights.html">Rights</a>
            <a href="about.html">About</a>
        </div>
      `;
    }
  }
  
  // Define the new element
  customElements.define('my-navbar', NavbarComponent);
  