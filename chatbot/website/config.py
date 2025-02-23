import os

# Config class to store all the configuration variables


class Config:
    DEBUG = False
    SECRET_KEY = os.environ.get("SECRET_KEY")
    # contain mysql database url with user and password
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI")
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:password@localhost/users' #mysql
    SQLALCHEMY_DATABASE_URI = 'sqlite:///users.db'  #Alternative database if mysql not working
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    