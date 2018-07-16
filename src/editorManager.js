
class EditorManager {

  constructor(options) {
    this.hasTyped = false
    this.setupEditor(options.editorElement)
  }

  setupEditor( /*editorElement*/ ) {
    
    // self.MonacoEnvironment = {
    //   getWorkerUrl: function (moduleId, label) {
    //     return './editor.worker.bundle.js';
    //   }
    // }

    // this.editor = monaco.editor.create(editorElement, {
    //   value: [
    //     '// Welcome to Tutorial Markdown.',
    //     '// start scrolling, and we\'ll',
    //     '// write the code.'
    //   ].join('\n'),
    //   lineNumbersMinChars: 3,
    //   scrollBeyondLastLine: false,
    //   language: 'javascript',
    //   fontSize: 10,
    //   minimap: { enabled: false },
    //   hover: false,
    //   occurrencesHighlight: false
    // });

    // this.editor.onKeyDown(function(e) {
    //   this.hasTyped = true;
    // }.bind(this))

    // this.editor.getModel().updateOptions({ tabSize: 2 })
  }
}

export default EditorManager