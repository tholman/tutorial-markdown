class CodeBlock {
  constructor(element, codeSelector, tabSize) {
    this.element = element
    this.from = parseInt(element.getAttribute('data-from'))
    this.to = element.getAttribute('data-to')
    this.indent = parseInt(element.getAttribute('data-indent')) || 0

    let code = null
    if( codeSelector ) {
      code = element.querySelector(codeSelector).innerText
    } else {
      code = element.innerText
    }

    this.code = this.prepareCode(code, tabSize)


    this.lines = this.code.split('\n').length

    // Set "TO" value to from + lines it isn't set
    this.to = this.to ? parseInt(this.to) : this.from + this.lines 
  }

  prepareCode(code, tabSize) {
    let parsedCode = code.split('\n')
    
    // Add indentation
    parsedCode = parsedCode.map(
      string => {
        if( string !== ''){
          return ' '.repeat(tabSize * this.indent) + string
        } else {
          return string
        }
      }
    )

    return parsedCode.join('\n')
  }

  shouldBeActive() {
    const rect = this.element.getBoundingClientRect()

    // 1/3 of rect is at 1/2 of window
    return (rect.y + rect.height/3) < (window.innerHeight / 2)
  }
}

export default CodeBlock