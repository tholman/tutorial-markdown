
class EditorManager {

  constructor(options) {
    this.hasTyped = false

    const {editor} = options
    this.editor = editor.editor
    this.api = editor.api

    this.options = {
      tabSize: this.editor.getModel()._options.tabSize
    }

    this.editor.onKeyDown(() => {
      this.hasTyped = true
    })
  }

  executeBlock(block) {
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
  }

  getCode() {
    return this.editor.getValue()
  }
}

export default EditorManager