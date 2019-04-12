## Shopping-list application

###### About:
This is a final project for my Web Developer certification, it’s a web-application that can be shared in real-time by multiple people to do shopping.

I’ve found this project very handy while shopping for the groceries, clothes or other merchandise. Each person in the group has the same grocery list on their phone or other device where he/she is able to create, add, update, delete items or mark them as “purchased” in order to optimize shopping time.

###### Built with:
This App is built using JavaScript/Node.JS as back-end and HTML,CSS as front-end  technologies infused with variety of addons like Bootstrap, Express, Jasmine, Ejs, Bcrypt, Passport, Sequelize and more.

###### Features:
Ability to create members groups, categorise shopping items, make shopping list private, add frequently purchased item and much more makes “Shopping-list” stand out from other similar projects.

###### Installation:
In order to enjoy demo version of the app simply follow this link https://kurdove-shoppinglist.herokuapp.com/
Or if you want to play around with the code, pull the project from repository https://github.com/kurdove/shopping-list, make sure you have NodeJS and other dependencies (presented in package.json) installed.

###### Contribution:
Contribution into the project, either small pieces of enhanced code or global application behavior strategy, much appreciated. You can also check the project progress here https://github.com/kurdove/shopping-list/projects/1 in order to track the work we’ve already done and the tickets we are going to complete to have our App shine.

###### Problem and Solution:
Now let’s add some lyrics here, below I’m explaining my thought process and technologies driving my decisions.

The global task was to create a grocery list web-application that can be shared in real-time by multiple people. Imagine you have a 4-person family, and each of you has a smart-phone with the web application running. When you arrive at the grocery store, you split up to shop individually. This allows the groceries to be acquired in the fastest possible way. Each person has the same grocery list on their phone. When one of you checks a grocery item off the shared list, it updates on everyone else’s list, preventing anyone from purchasing duplicate items. Similarly, items added to the list on any phone update to the same list.

I decided that it’s good to have shopping categories “Lists” where we would be able to save, update, and delete items to/from a database of your choose along with ability to “mark as purchased”, and “unmark as purchased” on each item. On top of that we will need to implement user profile creation (authentication), so we can manipulate with user groups and list/items privacy.

Now we have the general Idea of the app behavior so we can decide how to organize the database and the technologies that are able to handle our tasks.
It seems like PostgreSQL/Sequelize for database and Node.js for back-end would work great to accomplish our goals, in addition they work great paired together and I’m feel pretty confident with those technologies.
Based on the problems we need to accomplish there should be three DB models “List”, “Item” and “User” where “List” need to have id, title, description, userId  connected to “User” id and “Item” would need to have id, title, note, listId connected to “Item” id, userId  connected to “User” id and purchased boolean parameter so we can track either item purchased or not. Speaking of “User” model, it should have obvious parameters id, email and password. So having this initial database we can manipulate with our application in different ways.

Let’s talk about front-end part of the app, the technology selection was driven by simplicity and speed of communication between server and client so Shopping-list is built with HTML paired with CSS, Bootstrap and infused with EJS for seamless communication between computing back-end data and the client.

And finally, probably the most important part of the app, authentication and authorization. To implement this features I decided to use bcryptjs for encrypting and storing passwords, and Passport which is authentication middleware that provides over 500 strategies to handle authentication through everything from social media accounts to local authentication using username and password.

Even though I spent two and a half weeks part time developing the main functionality of the app I still have some uncovered areas and things to improve which I’m going to finish up after certification.
I’ll be focusing on implementing authorization using policies and ability to make lists/items private. I’d implement “frequently purchased” items categories so the user can easily add the most common items. Also I will create a user groups so users can switch between them and, may be the last thing for app functionality, I will allow users to split payments based on grocery costs.
Finally, I feel I need to spend more time on UI and design because initially my goal was to have the app running and functioning as needed, so after all functionality is done I’ll have time to sleek the “facade” of the app.

