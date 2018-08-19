import CodeManager from './codeManager'
import EditorManager from './editorManager'
import IframeManager from './iframeManager'

class TutorialMarkdown {

  constructor(options) {

    const {editor} = options
    this.scheduled = false
    this.currentStep = -1

    this.editorManager = new EditorManager({editor})
    this.codeManager = new CodeManager(options.markdownSelector)
    this.iframeManager = new IframeManager({iframe: options.iframe})

    this.throttleScroll = this.throttleScroll.bind(this)
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

  onScroll(){
    const step = this.codeManager.getStep()
    if(step > this.currentStep) {
      this.stepForward(step)
    } else if (step < this.currentStep) {
      this.stepBackward(step)
    }
    this.currentStep = step
  }

  stepForward(step) {
    const block = this.codeManager.getBlockByStep(step)
    this.editorManager.executeBlock(block)
    this.iframeManager.sendCode(this.editorManager.getCode())
    return step
  }

  stepBackward(step) {

  }

  create() {
    window.addEventListener('scroll', this.throttleScroll)
  }

  destroy() {
    window.removeEventListener('scroll', this.throttleScroll)
  }
}

export default TutorialMarkdown


// // (function() {

//   // Editor variables
//   var frame = document.querySelector('iframe');
//   var editor;

//   // Code variables
//   var contentElement = document.querySelector('.content');
//   var triggers, blocks, structure, sendItButton, fullCodeSets;
//   var currentStep = -1;
//   var hasTyped = false;

//   function setup() {
//     setupCode();
//   }

//   function onContentScroll(e) {

//     var hitSteps = -1;

//     for( var i = 0; i < triggers.length; i++) {
//       var dimensions = triggers[i].getBoundingClientRect();
//       var headerHeight = 65; // todo, not put here.

//       if( dimensions.y + dimensions.height/3 < ((window.innerHeight - headerHeight) / 2 + headerHeight)) {
        
//         if( i === currentStep + 1 ) {
//           currentStep = i;
//           onCodeAdd(i);
//         }

//         hitSteps = i;
//       }
//     }

//     if( hitSteps === currentStep - 1) {
//       currentStep = currentStep - 1;
//       onCodeRemove(currentStep + 1);
//       sendCode(currentStep);
//     }
//   }

//   function onCodeRemove(step) {
//     var range = new monaco.Range(0, 1, 999, 1);
//     var id = { major: 1, minor: 1 };           
//     var op = {identifier: id, range: range, text: fullCodeSets[step - 1], forceMoveMarkers: true};
//     editor.executeEdits(fullCodeSets[step - 1], [op]);
//     hasTyped = false;
//   }

//   function onCodeAdd(step) {

//     if( hasTyped === true ) {
//       onCodeRemove(step);
//     }

//     // Positioning the instructions
//     var instructions = structure[step];

//     var range = new monaco.Range(instructions.from, 1, instructions.to, 1);
//     var id = { major: 1, minor: 1 };           
//     var op = {identifier: id, range: range, text: instructions.code, forceMoveMarkers: true};
//     editor.executeEdits(instructions.code, [op]);

//     editor.revealLines(instructions.from, instructions.from + instructions.lines);
//     sendCode();
//     saveCode(step);
//   }

//   function onCodeReverse(step) {
//     console.log("remove!");
//   }

//   function sendCode() {
//     var value = editor.getValue()
    
//     frame.contentWindow.postMessage(value, "*")
//   }

//   function saveCode(step) {

//     // Only save these ones per each step.
//     if( !fullCodeSets[step] ) {
//       fullCodeSets[step] = editor.getValue();
//     }

//   }

//   function bind() {}

//   setup();

// // })();
