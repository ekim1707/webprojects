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

Use Bootstrap to make the layout pictured above.

---

Analysis:

Overall, the presentation came out as desired. The headbar is again sticky, yet this time it is also display-size compatible (as is the rest of the layout). Flexbox was incorporated along with the bootstrap foundation to complete the project. The website was intentionally left unstyled to highlight the structural integrity of the bootstrap layout.

4. [widow-site/index.html](https://github.com/ekim1707/web_projects/blob/master/widow-site/index.html)

Grade: N/A

Instructions: N/A

Analysis:

This first-attempt html was made according to the developer mozilla HTML instruction page (https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web), which was provided as a reference for the pre-work that was assigned before the start of the DigitalCrafts bootcamp. The website is very basic and raw in terms of both visuality and user-friendly interface, yet it at least does serve its function well enough.

##Screenshots
---
![alt text](https://github.com/ekim1707/web_projects/blob/master/googleex.png 'googleex.png')
![alt text](https://github.com/ekim1707/web_projects/blob/master/googleex2.png 'googleex2.png')

These screenshots are to depict the achieved display-size functionality of the aforementioned Google Exercise above (#3 in "Most Interesting Available Working Files").

##Github Link
---
[Github](https://github.com/ekim1707/web_projects)

##Code Examples
---
Included is the CSS for the classexercises/googleexercise.html file.

* classexercises/styles/styleg.css:

'''
html {
    position: relative;
    min-height: 100%;
}
body {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 2px solid black;
}
.wrapper {
    display: flex;
    flex-flow: column nowrap;
}
.image1 {
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 70px;
    padding: 10px 0;
}
.input {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
input[type="text"] {
    width: 450px;
    height: 35px;
    padding: 0 10px;
}
.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}
button {
    margin: 10px 0;
    background-color: rgb(235, 232, 232);
    color: rgb(99, 98, 98);
    width: 120px;
    height: 35px;
    margin: 15px 5px;
    border: none;
}'''