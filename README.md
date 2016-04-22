# MU/SIC Chart Generator

![??](http://s31.postimg.org/mdh2drcjf/core.jpg)

**Contributors:**
- Cameron Iverson
- Michael Sturrus
- Maxwell Stern
- Brian Marshall
- Shawn Foster

**Project Requirements:**

+ Use Mongo & Express to build an API and a front-end that consumes it
+ Create an API using at least 2 related models, one of which should be a user
+ Include all major CRUD functions in a RESTful API for at least one of those models
+ Consume your own API by making your front-end with HTML, Javascript, & jQuery. React or another frame is a huge plus but not required.
+ Add authentication to your API to restrict access to appropriate users
+ Craft thoughtful user stories together, as a team
+ Manage team contributions and collaboration using a standard Git flow on Github
+ Layout and style your front-end with clean & well-formatted CSS (LESS is a huge plus)
+ Deploy your application online so it's on the web and accessible
+ Build Service-Oriented Architecture... host the API on one server and the client on another server that consumes your API.

**Technologies Used:**
- Bootsrap
- LESS
- Javascript
- JQuery
- MongoDB
- Mongoose
- Express
- React
- Node
- LastFM API

**General Approach:**


**Wireframes**

![??](http://s31.postimg.org/ng7a2uzp7/muchart_homepage.png)

![??](http://s31.postimg.org/jkwhqrl17/muchart_account.png)

![??](http://s31.postimg.org/3lowrqbzv/muchart_ui.png)

**Unfinished work:**

Ongoing process of trying to expose what we want to include on the API.  Making modifications to the AJAX call that saves the model.  Making charts available as jpeg or png exports.
---------------------------------------
​
**Front-End**
​
On the front-end, we still want to get the active class working on the navbar menu items and also want to get the chart-builder's jumbotron positioned in the same place as a user scrolls down the page. The chart-builder has set column breakpoints (col-xs col-sm, col-md, col-lg) but can always be adjusted for better mobile usability. The original intention was for this app to be more desktop-based.
​
**Back-End**
​
Testing all routes and combinations.

**Major hurdles**

Trying to modify members of the AlbumDiv react class on the drag and drop event triggers - which are not react components - is extremely difficult and may be impossible.  There are a few avenues that may theoretically work but we have not gone far down them.  If we could get these react classes to play nicely with the drag and drop event triggers, we could save the charts by saving the AlbumDiv react array with location information instead of saving the html to the database.  Using the react drag-and-drop is not really an acceptable way of solving this problem as the react drag-and-drop is much more complicated and prone to mishap than the HTML5 drag-and-drop standard, which is easy to use and conforms very closely to what users expect from a drag-and-drop interface.
