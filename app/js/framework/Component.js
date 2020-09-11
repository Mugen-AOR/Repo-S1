// @ts-nocheck
/* global game */

class Component{
  constructor(name, tagName, domTarget){
    this.name = name;
    this.DOM  = document.createElement(tagName);
    domTarget.appendChild(this.DOM);
    game[name] = this;
  }
}