from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/prediction', methods=['POST'])
def prediction():
    symptoms = request.data
    return symptoms


if __name__ == "__main__":
    app.run(debug=True, port=8080)
