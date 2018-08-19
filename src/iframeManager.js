class IframeManager {

  constructor(options) {
    this.iframe = options.iframe
  }

  sendCode(code) {
    this.iframe.contentWindow.postMessage(code, '*')
  }
}

export default IframeManager