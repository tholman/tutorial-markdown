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
      this.from = parseInt(element.getAttribute('data-from'));
      this.to = element.getAttribute('data-to');
      this.lines = this.code.split('\n').length;

      // Set "TO" value to from + lines it isn't set
      this.to = this.to ? parseInt(this.to) : this.from + this.lines;
    }

    createClass(CodeBlock, [{
      key: 'shouldBeActive',
      value: function shouldBeActive() {
        var rect = this.element.getBoundingClientRect();

        // 1/3 of rect is at 1/2 of window
        return rect.y + rect.height / 3 < window.innerHeight / 2;
      }
    }]);
    return CodeBlock;
  }();

  var CodeManager = function () {
    function CodeManager(options) {
      classCallCheck(this, CodeManager);

      this.codeBlocks = [];
      this.blockSelector = options.blockSelector;

      var blockElements = document.querySelectorAll(this.blockSelector);
      for (var i = 0; i < blockElements.length; i++) {
        this.codeBlocks.push(new CodeBlock(blockElements[i], options.codeSelector));
      }
    }

    createClass(CodeManager, [{
      key: 'getStep',
      value: function getStep() {
        for (var i = this.codeBlocks.length - 1; i >= 0; i--) {
          if (this.codeBlocks[i].shouldBeActive()) {
            return i;
          }
        }
        return -1;
      }
    }, {
      key: 'getBlockByStep',
      value: function getBlockByStep(step) {
        return this.codeBlocks[step];
      }
    }]);
    return CodeManager;
  }();

  var EditorManager = function () {
    function EditorManager(options) {
      var _this = this;

      classCallCheck(this, EditorManager);

      this.hasTyped = false;

      var editor = options.editor;

      this.editor = editor.editor;
      this.api = editor.api;

      this.options = {
        tabSize: this.editor.getModel()._options.tabSize
      };

      this.editor.onKeyDown(function () {
        _this.hasTyped = true;
      });
    }

    createClass(EditorManager, [{
      key: "executeBlock",
      value: function executeBlock(block) {
        var range = new this.api.Range(block.from, 1, block.to, 1);
        var operation = {
          identifier: { major: 1, minor: 1 },
          range: range,
          text: block.code,
          forceMoveMarkers: true
        };

        this.editor.executeEdits(block.code, [operation]);
        this.editor.revealLines(block.from, block.from + block.lines);
      }
    }, {
      key: "getCode",
      value: function getCode() {
        return this.editor.getValue();
      }
    }]);
    return EditorManager;
  }();

  var IframeManager = function () {
    function IframeManager(options) {
      classCallCheck(this, IframeManager);

      this.iframe = options.iframe;
    }

    createClass(IframeManager, [{
      key: 'sendCode',
      value: function sendCode(code) {
        this.iframe.contentWindow.postMessage(code, '*');
      }
    }]);
    return IframeManager;
  }();

  var TutorialMarkdown = function () {
    function TutorialMarkdown(options) {
      classCallCheck(this, TutorialMarkdown);
      var editor = options.editor;

      this.scheduled = false;
      this.currentStep = -1;

      this.editorManager = new EditorManager({ editor: editor });
      this.codeManager = new CodeManager(options.markdownSelector);
      this.iframeManager = new IframeManager({ iframe: options.iframe });

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
        var step = this.codeManager.getStep();
        if (step > this.currentStep) {
          this.stepForward(step);
        } else if (step < this.currentStep) {
          this.stepBackward(step);
        }
        this.currentStep = step;
      }
    }, {
      key: 'stepForward',
      value: function stepForward(step) {
        var block = this.codeManager.getBlockByStep(step);
        this.editorManager.executeBlock(block);
        this.iframeManager.sendCode(this.editorManager.getCode());
        return step;
      }
    }, {
      key: 'stepBackward',
      value: function stepBackward(step) {}
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
