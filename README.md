RenderTests
===========

Comparing different 2D web based rendering techniques

### Normal Canvas
--------------
Standard use of the canvas tag.

### Cached Canvas
--------------
This method creates a canvas for each shape, draws the shape to this canvas and then uses one call to drawImage() to place the shape on the canvas. The idea being that we avoid many calls to context methods. 

### CSS3 Canvas
This method creates a canvas for each shape and adds each canvas to the DOM. CSS3 transformations are used to animate each canvas.