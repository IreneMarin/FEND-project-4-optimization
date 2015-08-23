## Website Performance Optimization portfolio project

Fourth project from the Front-End Web Developer Nanodegree in <a href="http://www.udacity.com" target="_blank">Udacity</a>:<br>
optimized index.html to achieve a score of 90 in PageSpeed, and optimized main.js to achieve 60 fps in pizza.html.

####Part 1: Optimize PageSpeed Insights 

- Minified CSS and JS files with Grunt.
- Optimized images (size and compression) with Grunt.
- Eliminated render-blocking JavaScript and CSS in above-the-fold content:
  - style.css inlined in index.html.
  - print.css with the media=print tag.
  - Put the Google Analytics script to the footer of the page.
  - Loaded asyncronoulsy the Google Fonts with a script in the footer.
- Created web.config file to put an expiry date to static resources (css, images and js).

####Part 2: Optimize Frames per Second 

- Apply optimizations for PageSpeed: minified css and js, optimized images, inlined css, configured the viewport.
- Optimizations made in views/js/main.js:
  - Lines 360-366: created a helper function to use instead of document.querySelectorAll.
  - Lines 436-455: deleted the function determineDx, since we change the pizza size inside the changePizzaSizes. Also optimized the for loop to put the new width in each .randomPizzaContainer.
  - Line 471: put 50 pizzas in the background (100 is too much).
  - Lines 451 and 504: used getDomNodeArray instead of document.querySelectorAll.
  - Line 507: the document.body.scrollTop is a constant number, so we don't want to create the varible each time inside the for loop, moved it outside in a new variable.
  - Lines 511-513: phase only have 5 different values, because it changes for each (i % 5). So we create an array where we put the 5 values. We also put the phase variable outside the for loop, to separate the manipulation of the DOM from the methods that query the state.
  - Lines 517-518: optimized the for loop function with the new outside variables created.
  - Line 539: created 50 moving pizzas (200 is way too much).
  - Lines 542-544: put the optimized image of the pizza with its real size.
- Optimizations in CSS: put will-change:transform;transform: translateZ(0); in the .mover class. This way we will create diferent layouts for each pizza and the main layout will not be repainted every time we create a pizza.


-----------------------------------------------

### Udacity's instructions

1. Review our course on Website Performance Optimization using Google PageSpeed.
2. Download the required project assets.
3. Use Chrome Developer Tools to review the current state of various pages within the application and identify areas for improvement.
4. Review the code powering the website and identify areas where you believe modifications are warranted.
5. Iteratively make changes and test those changes using the tools available to you to determine if they are a performance gain or loss.
