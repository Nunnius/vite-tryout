export default class Button extends HTMLElement {
  #isPrivate = 'hello';

  constructor() {
    super()
  }

  connectedCallback() {
    console.log(this.#isPrivate)
  }
}