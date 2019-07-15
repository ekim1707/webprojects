# Collection of 2nd week html exercises from DigitalCrafts

Hello. Thanks for checking out my first steps into html. There are at least a handful of visually-functional beginner layouts available for viewing here.

##Contents
--- 
  * What It Is
  * What We Used
  * Challenges
  * Most Interesting Available Working Files
  * Screenshots
  * Github Link
  * Code Examples

##What It Is
---
This is all my beginner work with html mostly consisting of layouts required from exercises from DigitalCrafts classes along with my own very first attempt at a website made from purely self-teaching (before camp even started) in the "widow-site" folder.

##What We Used
---
  * HTML
  * CSS
  * Bootstrap
  * Flexbox
  * Media Queries
  * JavaScript

##Challenges
---
There proved to be several difficult challenges with HTML that were not expected. At the top of the list were:

  * General sizing, as well as accomodating media display size differences
  * Investigating cross-compatibility amongst different web browsers
  * Mastering relation between the different display/position styles in CSS

##Most Interesting Available Working Files
---

1. [90's-style-site/index.html](https://github.com/ekim1707/web_projects/blob/master/90's-style-site/index.html)

Grade: N/A

Instructions:

Create a basic website!

Start with the home page at index.html
Create pages for individual topics. These can your interest, passions, family, cats, or anything else.
Link the different pages to one another (via nav or links in the content).
Include images
Make use of tags you learned
Make use of CSS styling
Make sure all your html page are validated via plugin (or you can always upload your HTML file here.)
Make 5-10 different pages. Put good content in them
 
A few ideas:

Document a few of the python projects you created with screenshots, pre-formatted code, and a brief description.
Create a hypertext version of notes you've taken during class, including links to external resources.
Create a (hopefully non-creepy) fan page for something you love.

---

Analysis:

This site was the first one made that featured a sticky headbar. The headbar does not adjust to display-size, which would the very next change I would make to it. This is also the first headbar I ever made that implemented hover color changes for links, along with a full-page background image, and the use of -webkit- for text-bordering in CSS.

2. [classexercises/googleexercise.html](https://github.com/ekim1707/web_projects/blob/master/classexercises/googleexercise.html)

Grade: N/A

Instructions:

The mockup image has been provided ... as well as the main image.
Develop your site to mimic Google's center-aligned site.

https://dc-class.herokuapp.com/static/fullstack/projects/google/google_mockup.png

---

Analysis:

This exercise was mainly focused on the use of Flexbox, which is evident in the CSS (classexercises/styleg.css). The final product I created is display-size compatible, and also features my first use of input-boxes and buttons (non-functional; for display purposes only).

3. [bootstrap/bslayout.html](https://github.com/ekim1707/web_projects/blob/master/bootstrap/bslayout.html)

Grade: N/A

Instructions:

![alt text](https://github.com/ekim1707/web_projects/blob/master/bootstrap/images/bootstrap.png 'bootstrap.png')

4. [shapes.py](https://github.com/ekim1707/secondclasspython/blob/master/shapes.py)

Draw these simple shapes (each in its own .py file):

an equilateral triangle
a square
a pentagon
a hexagon
an octagon
a star
a circle

Extract all the code for the shapes in exercise 1 into functions. Move them all into a single file called shapes.py. Write a new .py program that imports the shapes module and use its functions to draw all the available shapes onto the screen.

5. [shapeparameters.py](https://github.com/ekim1707/secondclasspython/blob/master/shapeparameters.py)

*Cont. from above

Add parameters into the various functions of your shapes module. Include:

size - the size of the shape
fill - a bool specifying whether to fill or outline the shape
color - the color of the shape. *Hint: you can use the color function to set both the pen color and the fill color.
Make a new .py program that imports the shapes module and uses its functions to draw different shapes of various colors, fills, and sizes.

##Screenshots
---
![alt text](https://github.com/ekim1707/secondclasspython/blob/master/screenshots/turtlestar.png 'turtlestar.png')
![alt text](https://github.com/ekim1707/secondclasspython/blob/master/screenshots/turtlestar1.png 'turtlestar1.png')

We completed the turtlestar.py file (which produced the first image) before we came across the solution code (turtlestar2.py, which produced the second image), and we noted the interesting differences that resulted from the different methods of completing the instructions of the exercise.

##Github Link
---
[Github](https://github.com/ekim1707/secondclasspython)

##Code Examples
---
Included is the code for both star-drawing programs.

* turtlestar.py:

'''python
from turtle import *

rt(72)
fd(100)
lt(72)
fd(100)
rt(144)
fd(100)
lt(72)
fd(100)
rt(144)
fd(100)
lt(72)
fd(100)
rt(144)
fd(100)
lt(72)
fd(100)
rt(144)
fd(100)
lt(72)
fd(100)

mainloop()'''

* turtlestar1.py:

'''python
from turtle import *
for i in range(5):
    forward(100)
    right(144)
mainloop()'''