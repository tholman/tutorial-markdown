(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TutorialMarkdown = factory());
}(this, (function () { 'use strict';

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

  var CodeBlock = function () {
    function CodeBlock(element, codeSelector) {
      classCallCheck(this, CodeBlock);

      this.element = element;
      this.code = element.querySelector(codeSelector).innerText;
      this.action = element.getAttribute('data-action');
      this.from = parseInt(element.getAttribute('data-from'));
      this.to = element.getAttribute('data-to');
      this.lines = this.code.split('\n').length;

      // Set "TO" value if it isn't set
      this.to = this.to ? parseInt(this.to) : this.from + this.lines;
    }

    createClass(CodeBlock, [{
      key: 'shouldBeActive',
      value: function shouldBeActive() {}
    }]);
    return CodeBlock;
  }();

  var CodeManager = function CodeManager(options) {
    classCallCheck(this, CodeManager);

    this.codeBlocks = [];
    this.blockSelector = options.blockSelector;

    var blockElements = document.querySelectorAll(this.blockSelector);
    for (var i = 0; i < blockElements.length; i++) {
      this.codeBlocks.push(new CodeBlock(blockElements[i], options.codeSelector));
    }

    console.log(this.codeBlocks);
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
          blockSelector: '.tmd', // Selector for code blocks in the tutorial
          codeSelector: '.highlight' // Selector for the code WITHIN the block
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

  return TutorialMarkdown;

})));
//# sourceMappingURL=tutorialMarkdown.umd.js.map
