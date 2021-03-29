from flask import Flask
import random
import json
from functools import reduce
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__, static_folder='../public', static_url_path='/')
CORS(app)

global SEEN
SEEN = {}

with open('data.json') as dfile:
    data = json.load(dfile)

def getUserIndex(user):
    global SEEN
    if user not in SEEN.keys():
        index = random.randint(0, len(data))
        SEEN[user] = index
    else:
        index = SEEN[user]
    
    return index



@app.errorhandler(404)
def not_found(e):
    return 'ERROR 404!'


@app.route('/')
def index():
    return 'SERVING...  '

@app.route('/user/<user>')
def user(user):
    index = getUserIndex(user)
    return data[index]


@app.route('/expenses/<user>')
def expenses(user):
    index = getUserIndex(user)
    expenses = data[index]['expenses']
    expenses.sort(key= lambda x: datetime.strptime(x['date'], '%Y-%m-%dT%H:%M:%S%z'), reverse=True)
    # expenses.sort(key= lambda x: -float(x['amount'][1:]))
    return json.dumps(expenses)

@app.route('/total/<user>')
def total(user):
    index = getUserIndex(user)
    total = 0
    for expense in data[index]['expenses']:
        total+=float(expense['amount'][1:])
    total = round(total, 2)
    return {'total': total}

@app.route('/lastfive/<user>')
def lastfive(user):
    index = getUserIndex(user)
    total = 0
    expenses = data[index]['expenses']
    expenses.sort(key= lambda x: datetime.strptime(x['date'], '%Y-%m-%dT%H:%M:%S%z'), reverse=True)
    # for expense in data[index]['expenses']:
    #     total+=round(float(expense['amount'][1:]), 2)
    return json.dumps(expenses[:5])

@app.route('/weekly/<user>')
def weekly(user):
    index = getUserIndex(user)
    total = 0
    expenses = data[index]['expenses']
    return


@app.route('/categorical/<user>')
def categorical(user):
    index = getUserIndex(user)
    total = 0
    expenses = data[index]['expenses']
    return 

@app.route('/currency/<user>')
def currency(user):
    index = getUserIndex(user)
    try: 
        currency = data[index]['expenses'][0]['currency']
        return {'currency':currency}
    except:
        return {'currency': 'INR'}

# @app.route('/signin')
# def handleSignIn():

# @app.route('/register')
# def handleRegister():

# @app.route('/profile')
# def profile():

# @app.route('')
# // dispatch({type: 'SET_USER', payload: })
# // dispatch({type: 'SET_EXPENSES', payload: })
# // dispatch({type: 'SET_TOTAL', payload: })
# // dispatch({type: 'SET_LAST_FIVE', payload: })
# // dispatch({type: 'SET_WEEKLY_EXPENSES', payload: })
# // dispatch({type: 'SET_CATEGORY_EXPENSES', payload: })
# // dispatch({type: 'SET_CURRENCY', payload: })

