from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', home=1)


@app.route('/citi')
def citi():
    return render_template('citi.html', home=0)

@app.route('/sharkstakes')
def sharkstakes():
    return render_template('sharkstakes.html', home=0)

@app.route('/python_game')
def python_game():
    return render_template('python_game.html', home=0)