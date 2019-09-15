import CodeBlock from './codeBlock'

class CodeManager {

  constructor(options) {
    this.codeBlocks = []
    const { blockSelector, codeSelector } = options.selectors

    this.blockSelector = options.blockSelector

    let blockElements = document.querySelectorAll(blockSelector)
    for (let i = 0; i < blockElements.length; i++) {
      this.codeBlocks.push(new CodeBlock(blockElements[i], codeSelector, options.tabSize))
    }
  }

  getStep() {
    for (let i = this.codeBlocks.length - 1; i >= 0; i--) {
      if (this.codeBlocks[i].shouldBeActive()) {
        return i
      }
    }
    return -1
  }

  getBlockByStep(step) {
    return this.codeBlocks[step]
  }
}

export default CodeManager