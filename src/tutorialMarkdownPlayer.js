import CodeManager from './codeManager';
import EditorManager from './editorManager';
import EventManager from './eventManager';

class TutorialMarkdownPlayer {

  constructor(options) {

    // TODO: be defensive on options

    this.codeManager = new CodeManager(options);
    this.editorManager = new EditorManager(options);
    this.eventManager = new EventManager(options);
  }
}

export default TutorialMarkdownPlayer;