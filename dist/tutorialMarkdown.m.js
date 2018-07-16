var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var CodeManager = function CodeManager(options) {
  classCallCheck(this, CodeManager);

  this.codeBlocks = [];
  this.blockSelector = options.block;
  this.codeSelector = options.code;

  var blockElements = document.querySelectorAll(this.blockSelector);
  blockElements.forEach(function (item) {
    return console.log(item);
  });
};

var EditorManager = function () {
  function EditorManager(options) {
    classCallCheck(this, EditorManager);

    this.hasTyped = false;
    this.setupEditor(options.editorElement);
  }

  createClass(EditorManager, [{
    key: "setupEditor",
    value: function setupEditor() /*editorElement*/{

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
  }]);
  return EditorManager;
}();

var TutorialMarkdown = function () {
  function TutorialMarkdown(options) {
    classCallCheck(this, TutorialMarkdown);


    this.currentStep = 0;

    // Options
    var fakeOptions = {
      editor: options.editor, //{monaco editor, created and on the document}
      markdownSelector: {
        block: '.tmd', // Selector for code blocks in the tutorial
        code: '.code' // Selector for the code WITHIN the block
      },
      triggerPosition: 0.5, // position on screen for code to trigger.
      iframe: options.executionWindow
    };

    this.scheduled = false;

    // this.editorManager = new EditorManager(options);
    // -- Used to send code to the editor
    // -- Used to erase code from the editor

    this.codeManager = new CodeManager(fakeOptions.markdownSelector);
    this.editorManager = new EditorManager(fakeOptions);

    this.throttleScroll = this.throttleScroll.bind(this);
    this.create();
  }

  createClass(TutorialMarkdown, [{
    key: 'throttleScroll',
    value: function throttleScroll() {
      var _this = this;

      if (!this.scheduled) {
        this.scheduled = true;
        window.requestAnimationFrame(function () {
          _this.scheduled = false;
          _this.onScroll();
        });
      }
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      // let currentStep = 0


    }
  }, {
    key: 'create',
    value: function create() {
      window.addEventListener('scroll', this.throttleScroll);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      window.removeEventListener('scroll', this.throttleScroll);
    }
  }]);
  return TutorialMarkdown;
}();

export default TutorialMarkdown;
//# sourceMappingURL=tutorialMarkdown.m.js.map
