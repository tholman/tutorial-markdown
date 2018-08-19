class CodeBlock {
  constructor(element, codeSelector) {
    this.element = element
    this.code = element.querySelector(codeSelector).innerText
    this.from = parseInt(element.getAttribute('data-from'))
    this.to = element.getAttribute('data-to')
    this.lines = this.code.split('\n').length

    // Set "TO" value to from + lines it isn't set
    this.to = this.to ? parseInt(this.to) : this.from + this.lines 
  }

  shouldBeActive() {
    const rect = this.element.getBoundingClientRect()

    // 1/3 of rect is at 1/2 of window
    return (rect.y + rect.height/3) < (window.innerHeight / 2)
  }
}

export default CodeBlock