export default function useComponents(components) {
  components.forEach(component => {
    const template = component.template
    class Component extends HTMLElement {
      constructor() {
        super()
        this.attachShadow({ mode: 'open' })
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = template
      }
    }
    customElements.get(component.name) ||
      customElements.define(component.name, Component)
  })
}
