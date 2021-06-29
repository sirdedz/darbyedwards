# mysite - Darby Edwards

# Overview:
This is a git repository for a web application for displaying my resumé and work.


 Architecture:
 The app is using 
 - Flask as a host (written in Python3)
 - Jinja2 in combination with HTML5 to structure content
 - JavaScript and JQuery for client side scripts
 - SQLAlchemy to interact with an SQLite3 database
 - CSS to style the pages

 External Libraries Used:
 - Bootstrap: https://getbootstrap.com/
    - CSS: https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css
    - JS: https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js
    - Icons: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css

 - JQuery: 
    - JS: https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js



# Instructions for starting web application:
1. navigate to the web application root directory in a command prompt
2. run the following in the command prompt:
    - run 'FLASK_APP=sharkstakes.py'
    - run 'export SECRET_KEY="temp_key"'
3. run the following in the command prompt to initialize the database:
    - run 'sqlite3 app.db'
    - run '.tables'
    - run '.quit'
    - run 'flask shell'
    - run 'from app import db'
    - run 'from app.models import User, Result, Quiz, Question'
    - run 'db.create_all()'
    - run 'quit()'
4. start the application by running the following in a command prompt:
    - run 'flask run'
5. to insert sample data once the web application is running:
    - navigate to the login page (top right corner) and click 'register'
    - register an account with username 'admin'
    - navigate back to the user page by clicking the user icon in the top right and login with your admin account
    - scroll down and click on 'Populate Database'
        - This will provide some quizzes as well as mock results for the admin account