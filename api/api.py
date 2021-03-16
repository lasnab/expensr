from flask import Flask

app = Flask(__name__, static_folder='../public', static_url_path='/')

@app.errorhandler(404)
def not_found(e):
    return 'ERROR 404!'


@app.route('/')
def index():
    return 'SERVING...  '

# @app.route('/signin')
# def handleSignIn():

# @app.route('/register')
# def handleRegister():

# @app.route('/profile')
# def profile():


