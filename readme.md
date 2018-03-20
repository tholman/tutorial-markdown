## Tutorial Markdown

Tutorial markdown is a small set of additions to markdown, to allow for interactive players with the Tutorial Markdown player.

Purely a spec at the moment, but is in the works.

### The Player

The TMD player is initiated with JavaScript, for now, its recommended that you use the styles provided with this project, since we're in a lot of flux. But in the future it would be nice to open this up.

### Syntax

#### Setup

The tutorial markdown player contains an iframe, which your example will run within. Often, we want to set this up with some initial `styles`, and some initial `html`.

This is done by adding `TMD-SETUP-HTML` & `TML-SETUP-STYLES` within code blocks at the start of the tutorial. These will be hidden by the players styles, and the player will inject them to the iframe before we even begin.

#### Tutorial Steps

