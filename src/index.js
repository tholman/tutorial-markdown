import CodeManager from './codeManager'
import EditorManager from './editorManager'
import IframeManager from './iframeManager'

class TutorialMarkdown {

  constructor(options) {

    const {editor} = options
    this.scheduled = false
    this.currentStep = -1

    this.editorManager = new EditorManager({editor})
    this.iframeManager = new IframeManager({iframe: options.iframe})

    this.codeManager = new CodeManager({
      selectors: options.markdownSelector,
      tabSize: editor.editor.getModel()._options.tabSize
    })

    // Saving the post executed state, so when we step backwards we can
    // reapply previous set information
    this.savedSteps = [this.editorManager.getCode()]

    this.throttleScroll = this.throttleScroll.bind(this)
    this.sendCode = this.sendCode.bind(this)
    this.create()
  }

  throttleScroll() {
    if (!this.scheduled) {
      this.scheduled = true
      window.requestAnimationFrame(() => {
        this.scheduled = false
        this.onScroll()
      })
    }
  }

  onScroll() {
    const step = this.codeManager.getStep()
    if(step > this.currentStep) {

      for( let i = this.currentStep + 1; i <= step; i++ ) {
        this.stepForward(i)
      }
      
    } else if (step < this.currentStep) {
      this.stepBackward(step)
    }

    this.currentStep = step
  }

  stepForward(step) {
    const block = this.codeManager.getBlockByStep(step)
    this.editorManager.executeBlock(block)

    const currentCode = this.editorManager.getCode()

    if(!this.savedSteps[step + 1]) {
      this.savedSteps.push(currentCode)
    }

    this.iframeManager.sendCode(currentCode)

    return step
  }

  stepBackward(step) {
    this.editorManager.replaceWith(this.savedSteps[step + 1])
    const currentCode = this.editorManager.getCode()
    this.iframeManager.sendCode(currentCode)
  }

  create() {
    window.addEventListener('scroll', this.throttleScroll)
  }

  destroy() {
    window.removeEventListener('scroll', this.throttleScroll)
  }

  sendCode() {
    const currentCode = this.editorManager.getCode()
    this.iframeManager.sendCode(currentCode)
  }
}

export default TutorialMarkdown