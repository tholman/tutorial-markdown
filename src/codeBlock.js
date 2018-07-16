class CodeBlock {
  constructor(element, codeSelector) {
    this.element = element
    this.code = element.querySelector(codeSelector).innerText
    this.action = element.getAttribute('data-action')
    this.from = parseInt(element.getAttribute('data-from'))
    this.to = element.getAttribute('data-to')
    this.lines = this.code.split('\n').length

    // Set "TO" value if it isn't set
    this.to = this.to ? parseInt(this.to) : this.from + this.lines 
  }

  shouldBeActive() {
    const rect = this.element.getBoundingClientRect()
    return (rect.y + rect.height/3) < (window.innerHeight / 2)
  }
}

export default CodeBlock