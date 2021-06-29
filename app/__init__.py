from flask import Flask, session
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
#app.config.from_object('config.DevelopmentConfig') #use for changing config types

from app import routes