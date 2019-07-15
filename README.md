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


2. [guessnumber.py](https://github.com/ekim1707/secondclasspython/blob/master/guessnumber.py)

Step 1
You will implement a guess-the-number game where the player has to try guessing a secret number until he gets it right. For now, you will "hard code" the secret number to 5 (just set it to five like secret_number = 5). You will prompt the player to enter a number again and again, each time comparing his input to the secret number. To to that, you will need to write a while loop. If he guesses correctly, you will print "You win!", otherwise, you will prompt for a number again.

Example session:

$ python guess_the_number.py I am thinking of a number between 1 and 10. What's the number? 3 Nope, try again. What's the number? 9 Nope, try again. What's the number? 5 Yes! You win!

Step 2: Give High-Low Hint
Improve your game to provide the player with a high-or-low hint. Example session:

$ python guess_the_number.py I am thinking of a number between 1 and 10. What's the number? 3 3 is too low. What's the number? 9 9 is too high. What's the number? 5 Yes! You win!

Step 3: Randomly Generated Secret Number
Instead of hard-coding the secret number to 5 now, you will generate the secret number using a random number generator provided by Python, so that even you, the programmer, cannot know the secret number before hand. To generate a random number between 1 and 10, inclusive, do this:

import random my_random_number = random.randint(1, 10)
Use this same method to generate your secret number for the game. Play the game a couple of times to see that the secret number is different each time.

Step 4: Limit Number of Guesses
Limit the number of guesses the player has to 5. If he cannot guess the number within 5 guesses, he losses. Example session:

$ python guess_the_number.py I am thinking of a number between 1 and 10. You have 5 guesses left. What's the number? 1 1 is too low. You have 4 guesses left. What's the number? 10 10 is too high. You have 3 guesses left. What's the number? 2 2 is too low. You have 2 guesses left. What's the number? 7 7 is too high. You have 1 guesses left. What's the number? 4 4 is too low. You ran out of guesses!
Bonus: Play Again
At the conclusion of a game, give the player the option of playing again. Example session:

$ python guess_the_number.py I am thinking of a number between 1 and 10. You have 5 guesses left. What's the number? 1 Yes! You win! Do you want to play again (Y or N)? Y I am thinking of a number between 1 and 10. You have 5 guesses left. What's the number? 5 Yes! You win! Do you want to play again (Y or N)? N Bye!

3. [phonebook.py](https://github.com/ekim1707/secondclasspython/blob/master/phonebook.py)

Electronic Phone Book:

Look up an entry 
Set an entry 
Delete an entry 
List all entries 
Quit
What do you want to do (1-5)?

If they choose to look up an entry, you will ask them for the person's name, and then look up the person's phone number by the given name and print it to the screen.
If they choose to set an entry, you will prompt them for the person's name and the person's phone number,
If they choose to delete an entry, you will prompt them for the person's name and delete the given person's entry.
If they choose to list all entries, you will go through all entries in the dictionary and print each out to the terminal.
If they choose to quit, end the program.

Example session:

$ python phonebook.py 

Electronic Phone Book:

Look up an entry 
Set an entry 
Delete an entry 
List all entries 
Quit

What do you want to do (1-5)? 2 
Name: Melissa 
Phone Number: 584-394-5857 
Entry stored for Melissa. 

Electronic Phone Book:

Look up an entry 
Set an entry 
Delete an entry 
List all entries 
Quit

What do you want to do (1-5)? 2 
Name: Igor 
Phone Number: 857-485-2935 
Entry stored for Igor. 

Electronic Phone Book:

Look up an entry 
Set an entry 
Delete an entry 
List all entries 
Quit

What do you want to do (1-5)? 2 
Name: Jazz 
Phone Number: 334-584-2345 
Entry stored for Jazz. 

Electronic Phone Book:

Look up an entry 
Set an entry 
Delete an entry 
List all entries 
Quit 

What do you want to do (1-5)? 1 
Name: Melissa 
Found entry for Melissa: 584-394-5857 

Electronic Phone Book:

Look up an entry 
Set an entry 
Delete an entry 
List all entries 
Quit

What do you want to do (1-5)? 3 
Name: Melissa 
Deleted entry for Melissa 

Electronic Phone Book:

Look up an entry 
Set an entry 
Delete an entry 
List all entries 
Quit

What do you want to do (1-5)? 
4 Found entry for Igor: 857-485-2935 
Found entry for Jazz: 334-584-2345 

Electronic Phone Book:

Look up an entry 
Set an entry 
Delete an entry 
List all entries 
Quit 

What do you want to do (1-5)? 5 Bye.

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