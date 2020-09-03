class Component{
  constructor(name, tagName, domTarget){
    this.name = name;
    this.DOM = document.createElement(tagName);
    domTarget.appendChild(this.DOM);
    window.game[name] = this;
  }
}