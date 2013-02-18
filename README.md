RenderTests
===========

Comparing different 2D web based rendering techniques. The results seem to vary significantly from browser to browser. Unfortunately it looks like there is no one technique that will always be fast across the board.

Check out the demo page and be sure to try it in a few different browsers:
[Render Test Demos](http://zevanrosser.github.com/RenderTests/demos.html)

### Normal Canvas
--------------
Standard use of the canvas tag.

### Cached Canvas
--------------
This method creates a canvas for each shape, draws the shape to this canvas and then uses one call to drawImage() to place the shape on the canvas. The idea being that we have less called to context methods.

### CSS3 Canvas
This method creates a canvas for each shape and adds each canvas to the DOM. CSS3 2D transformations are used to animate each canvas.

### CSS3D Canvas
This method creates a canvas for each shape and adds each canvas to the DOM. CSS3 3D transformations are used to animate each canvas.

### CSS3 Top Left Canvas
This method creates a canvas for each shape and adds each canvas to the DOM. CSS3 2D transformations are used to rotate each canvas and top and left properties are used for translation.

### CSS3D Top Left Canvas
This method creates a canvas for each shape and adds each canvas to the DOM. CSS3 3D transformations are used to rotate each canvas and top and left properties are used for translation.