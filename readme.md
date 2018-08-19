# Tutorial Markdown

Tutorial markdown is a small js library, which allows (with some data attributes) for a tutorial to type, and execute its code as you scroll through the document. You can see an example of it working on [generative artistry](https://generativeartistry.com).

Currently the system is geared towards showing visual javascript work on things like the canvas, so there will probably be some things pop up when trying to do other things, but please, report an issue for anything like that and we can grow the library together.

## The How

To run an interactive tutorial there are several parts that you will need to set up to act together, without all of them in place, we don't get to see any magic. These are:

### 1. Correct code marking

When you are marking your code blocks, you'll need to use the correct `data-` attributes. These are what will be parsed into instructions for the editor to display, and the iframe to run. You'll also need a consistent class name that marks all blocks.

There are only a few data attributes that tutorial markdown runs off

1. `data-from` (mandatory) is the line number where you intend your new code to be injected from.
1. `data-to` (optional) if you set a data-to all code between the from and to line will be replaced with your new code
1. `data-indent` (optional) indents your code to the level, so you don't need to indent code blocks needlessly in the markdown.

### 2. The `editor` and `iframe` on the page

Currently tutorial markdown only supports windows [monaco editor]() ... although its been built to have others in mind, the [support]() isn't implemented just yet. You will need to initialize a new "editor" and have the variable on hand.

The "iframe" is an iframe on your page, set up by you with the html you want to run your tutorial. In this iframe, you'll need some code that handles tutorialMarkdown sending messages to it. This can be found in [dist]() ... In the examples on [generativeArtistry]() you can see this set up with a canvas.

### 3. Correct tutorial markdown initiation and variables

Once you have included the tutorial markdown js file (available in /dist) you'll need to initialize it, here's an example.

```
new TutorialMarkdown({
  editor: {
    editor: value,
    api: value
  },
 iframe: value,
 markdownSelector: {
   blockSelector: value
   codeSelector: value
 }
})
```

The `values` here are as follows.

- `editor` is the Monaco code editor you have created on page
- `api` is the global variable created by adding the monaco script, allows tutorial markdown to access some of its functions
- `iframe` is the iframe in which tutorial markdown will send the code to run
- `blockSelector` is the selector (classname or id) which holds the blocks of code you want to be run by the system
- `codeSelector` is an optional variable which allows you to select the element that contains the code, within the `blockSelector` element... this is because these blocks often contain line numbers and other non relavent code.

All together these will make tutorial markdown work.

## The Other Things

In order to keep things simpler, there are certain pieces that tutorial markdown is not running, for example, how your page is styled. In the example you can see the editor and iframe set up in a way that keeps them on the page (with position sticky) you will need to do the same.

The iframe itself needs to be styled and set up by you. In the examples this includes adding a canvas, and styling it to take up the full frame.
