import CodeBlock from './codeBlock'

class CodeManager {

  constructor(options) {
    this.codeBlocks = []
    this.blockSelector = options.blockSelector

    let blockElements = document.querySelectorAll(this.blockSelector)
    for( let i = 0; i < blockElements.length; i++ ) {
      this.codeBlocks.push(new CodeBlock(blockElements[i], options.codeSelector))
    }
  }

  getStep() {
    for( let i = this.codeBlocks.length - 1; i >= 0; i-- ) {
      if( this.codeBlocks[i].shouldBeActive() ) {
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