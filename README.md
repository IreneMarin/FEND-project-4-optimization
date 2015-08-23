## Website Performance Optimization portfolio project

Fourth project from the Front-End Web Developer Nanodegree in <a href="http://www.udacity.com" target="_blank">Udacity</a>:<br>
optimized index.html to achieve a score of 90 in PageSpeed, and optimized main.js to achieve 60 fps in pizza.html.

####Part 1: Optimize PageSpeed Insights 

- Minify CSS and JS files with Grunt.
- Optimize images (size and compression) with Grunt.
- Eliminate render-blocking JavaScript and CSS in above-the-fold content:
  - style.css inlined in index.html.
  - print.css with the media=print tag.
  - Put the Google Analytics script to the footer of the page.
  - Load asyncronoulsy the Google Fonts with a script in the footer.
- Create web.config file to put an expiry date to static resources (css, images and js).

####Part 2: Optimize Frames per Second 

- Apply optimizations for PageSpeed: minify css and js, optimize images, inline css, configure the viewport.
- Optimizations made in views/js/main.js:
  - Lines 359-366: create a helper function to use instead of document.querySelectorAll
  - Lines 437-463: we have deleted the function determineDx, since we will change the pizza size inside the changePizzaSizes. 
  - Line 479: put 50 pizzas in the background, 100 is too much.
  - Line 513: use getDomNodeArray instead of document.querySelectorAll
  - Lines 516-530: 
  - Line 549: 
  - Lines 552-554: 


-----------------------------------------------

### Udacity's instructions

1. Review our course on Website Performance Optimization using Google PageSpeed.
2. Download the required project assets.
3. Use Chrome Developer Tools to review the current state of various pages within the application and identify areas for improvement.
4. Review the code powering the website and identify areas where you believe modifications are warranted.
5. Iteratively make changes and test those changes using the tools available to you to determine if they are a performance gain or loss.
