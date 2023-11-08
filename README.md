# Blogs Matter (actually meant to be Blog it)
Application is to be a place for developers to create blogs on their favorite topics and receive comments

## Description and Motivation
This application is to enable a user to create a login and be able to store blog posts of their own and have other users comment on those blogs.
They can update, add, blogs as they like and even make comments of their own.

The application currently does not function as expected, however is deployed to Heroku and looks like this on first arrival

![img](./public/images/main_page%20.png)

It is built with the understanding that a user just might need a simple place to make and store notes. 


## Usage

This application is deployed to Heroku. It is supposed to be an interactive site. However, though there is a lot of code in this Repo, i could not get it to function well. The only thing I can get is, front page and access to the contents of the DB via the /blog/:id for any blog

Here is the link to the Deployed Application ...
[Blogs Matter Deployed on Heroku](https://evening-forest-13294-57b0629d7f50.herokuapp.com)


## Table of Contents

* [Technology Used](#technology-used)
* [Repo Location](#repo)
* [Screenshots of Application](screenshots-of-application)
* [Learning Points](#learning-points)
* [Code Snippets](#code-snippets)
* [Contact Info](#contact-info)

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Heroku | [https://www.heroku.com//](https://www.heroku.com/)     |    
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| NPM and ExpressJs | [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)|
| NodeJs | [https://nodejs.org/en](https://nodejs.org/en)|
| ChatGPT | [https://openai.com/blog/chatgpt](https://openai.com/blog/chatgpt)|

There is also javascript, Google Search, and Youtube university. 
## Repo 

[GitHub Repo for Blogsmatter](https://github.com/flimits/blogsmatter)


## Screenshots of Application
---
To get a better picture of what it is doing, or going to do, here are three snapshots to look at.

### Here is the opening page.
![img](./public/images/main_page%20.png)
---
---
### Here is the ability to hit the Heroku database and seed it with data
![img](./public/images/seed%20and%20env%20of%20jawsdb.png)
---
---
### I could see that if I hit the /blog/:id of the page, I can see data is there. but the rest of the site is not functional
![img](./public/images/hitoneblogbyname.png
---


## Learning Points and Lessons learned

ExpressJs handlebars is really difficult for myself to comprehend. I basically needed to create an index.html page first, and the logins, and nave bars and so on by hand first, and then put them into the handlebar next. Well, that did not work out as well as I like.

I did manage to at least get a page up and a db running in Heroku. All file structure is there and running db. 

I did lean heavily on pre course work to create a bunch of this code. Chatgpt was used to help debug issues. I did write 90% of it by hand even if looking at other ways to code it. 

Besides this, Google was my friend.

### note
I do plan on coming back to this later and resubmitting it. just don't understand it now.

## Code Snippets

Here is from models of the blogs models

```js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
    ```

    here is from the main / routing
    ```
    const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        }
        );

        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        console.log(blogs)

        res.render('homepage', {
            blogs,
            // logged_in: req.session.logged_in
        });

    } catch(err) {
        res.status(500).json(err);
    }
});
```






## Contact Info

| Name      |Email      | Github    | Portfolio |
|-----------|-----------|-----------|-----------|
|Jason       |flimits@gmail.com|https://github.com/flimits|https://github.com/flimits/my-portfolio/|



## Psuedo Code

The below was a psuedo coding exercise I did with others in order to come up with an attack plan of our to build the final touches on the Note-Taker application. 

### From the course story of what is required

* GIVEN a note-taking application
* WHEN I open the Note Taker
* THEN I am presented with a landing page with a link to a notes page
* WHEN I click on the link to the notes page
* THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note's text in the right-hand column
* WHEN I enter a new note title and the note's text
* THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
* WHEN I click on the Save button
* THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
* WHEN I click on an existing note in the list in the left-hand column
* THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
* WHEN I click on the "New Note" button in the navigation at the top of the page
* THEN I am presented with empty fields to enter a new note title and the note's text in the right-hand column and the button disappears

### Psuedo code part

* import express module to our server
* import require("./db/db.json")
* create app variable pointing to new express object(express())
* app.use(*middleware*){ -json, urlencoded, staticify(public)}
* 
* get/delete/post requests:
* 
* get request to send index.html, route: '/'
* get request to send notes.html, route: '/notes'
* 
* get request to fetch our api to send notes from db.json, route: '/api/notes'
* post request to fetch our api to modify with parsed req.body data and push post to db.json with fs.writeFile, route: '/api/notes', return res.json;
* delete request to delete specific note, *EXTRA CRED* remove specific data from db.json and push with fs.writeFile,  route: '/api/notes/:notes_id', return res.json;
* app.listen# blogsmatter
Enable a developer, or anyone, to post a blog about a specific topic and allow others to make comments on it.


## PSEUDO-CODE This Thing
Creating directories within the convention of MVC (Model-View-Control)
- controllers, views, models folders
- server.js
### MODELS
- Setting up your database
- index to tie it all together
- User, Post, Comments (Users <-> Posts/Comments one to many relationships)
    - User -> id, username, password
        - encrypt password, need some hooks
    - Post -> id, title, description, date/timestamp(sequelize can do this for you, research!), fk_user_id
    - Comments -> id, description, fk_post_id, fk_user_id
### VIEWS
- handlebarsjs
- login/signup, homepage, dashboard, post(comments/newcomment-partial), new-post(edit-post)
- folders for layouts and partials if you plan to use them
    - layouts main? partials post/comment?
### CONTROLLERS
- routes! /api/ and home
- index -> apiroutes, homeroutes
- homeroutes -> (get) '/', '/login/', '/post/:id', '/user/:id'(for the dashboard)
- /api/ index, user, (blog)post, comments
    - get, post, put, delete
    - index -> userroutes, postroutes, commentroutes
    - (blog)post -> :id, title, description, (includes user)
    - user -> :id, username, password
    - comments -> :id, description (includes post/user), could do post.includes(comments)
### Basics
- server file, .env, .gitignore, readme
- public (css, img, js)
- config(connection)
- db(schema)
- seeds(index, postData?, commentData?)
- utils(auth, helpers)
### SERVER
- NPMs: path, express, express-session, express-handlebars, sequelize, dotenv, 
- middleware: 
    - app.use express.json/urlencoded/static(public)
    - engine, handlebars, helpers, session
- session: secret, cookie