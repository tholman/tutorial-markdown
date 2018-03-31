import { CodeManager } from './codeManager';
import { EditorManager } from './editorManager';
import { EventManager } from './eventManager';

class TutorialMarkdownPlayer {

  constructor(options) {
    
    if( !options.editor ) {

    }

    this.codeManager = new CodeManager();

    this.editorManager = new EditorManager();

    this.eventManager = new EventManager({
      onTrigger: 
    });
  }

  handleCodeTrigger() {

  }

  handleCodeChange() {
    
  }

}