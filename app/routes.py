from app import app, db, models, forms
from flask import render_template, flash, redirect, url_for, request, session

@app.route('/')
@app.route('/index')
def index():

    return render_template('index.html')