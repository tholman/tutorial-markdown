
class EditorManager {

  constructor(options) {
    this.hasTyped = false
    this.lastExecuted = null

    const {editor} = options
    this.editor = editor.editor
    this.api = editor.api

    this.editor.onKeyDown(() => {
      this.hasTyped = true
    })
  }

  executeBlock(block) {

    if(this.hasTyped) {
      this.hasTyped = false
      this.replaceWith(this.lastExecuted)
    }

    // If we are trying to append beyond the current line count, add the lines
    const lineCount = this.editor.getModel().getLineCount()
    if(lineCount < block.from) {
      const linesNeeded = block.from - lineCount
      const range = new this.api.Range(block.from, 1, block.from + linesNeeded, 1)
      const newLines = '\n'.repeat(linesNeeded)
      const operation = {
        identifier: { major: 1, minor: 1 },
        range: range,
        text: newLines,
        forceMoveMarkers: true
      }

      this.editor.executeEdits(newLines, [operation])
    }

    const range = new this.api.Range(block.from, 1, block.to, 1)
    const operation = {
      identifier: { major: 1, minor: 1 },
      range: range,
      text: block.code,
      forceMoveMarkers: true
    }
    
    this.editor.executeEdits(block.code, [operation])
    this.editor.revealLines(
      block.from,
      block.from + block.lines
    )

    // Save last state (to undo any manually typed code)
    this.lastExecuted = this.getCode()
  }

  replaceWith(code) {
    const range = new this.api.Range(0, 1, 9999, 1)
    const operation = {
      identifier: { major: 1, minor: 1 },
      range: range,
      text: code,
      forceMoveMarkers: true
    }
    this.editor.executeEdits(code, [operation])
  }

  getCode() {
    return this.editor.getValue()
  }
}

export default EditorManager