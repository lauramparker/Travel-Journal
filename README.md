# Bucket List [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<h3><u>Bucket List<u></h3>

<h3>Description:</h3>
    "Bucket List" is a Node.js application, deployed through Heroku, that allows the user to 1) create travel reviews capturing their own travel experiences, and, 2) search travel reviews for planning future trips.  To use the site, users must establish login credentials with an email and password.  These credentials are stored and authenticated using Passport.  Once logged into the site, users can write a review by entering the following fields: city name, city review (text box), hotel name, hotel review (text box).  When navigating to the all reviews option on the navbar, users will find preview boxes for all the reviews that have been submitted.  When searching the reviews, the application uses a JQuery plug-in, typeahead, to generate results as the search term is entered.  To enhance responsiveness to the user, the application leverages elasticsearch to quickly return search results, matching the search term within the text fields for any of the four fields available in the saved review. 
    
    When the application runs, the user has the following options within the navigation: Sign-Up or Login (main page), Write A Review, Search Reviews, All Reviews (navbar)


<h3>Overview Snapshots of User Interface:</h3> 
<p>
    <img src="/imageREADME (1).png" width="350" height="350" />
</p>

<p>
    <img src="/imageREADME (2).png" width="350" height="350" />
</p>


<h3>Package Install<h3>
```npm install```
```npm install express```
```npm install express-handlebars```
```npm install mysql```
```npm install mysql2```
```npm install @elastic/elasticsearch```

<h3>Usage Information<h3>

You can clone this project and install the above dependencies in your terminal (& enter "node server.js" to run locally)

OR

Visit the deployed version of the application on Heroku [here](https://travel-log-project.herokuapp.com/)

<h3>Credits:<h3>
Authors: Laura Parker @ [lauramparker](https://github.com/lauramparker/), Joe Maniaci @ [Maniac-i](https://github.com/Maniac-i/), Eric Ober @ [esober101](https://github.com/esober101/), Jose Calderon @ [CalderonJG](https://github.com/CalderonJG/)

<h3>License:</h3> MIT   <i>Please use this project for your own learning!</i> 