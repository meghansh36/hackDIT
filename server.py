from flask import Flask, request, jsonify
from flask_cors import CORS
from test import predict

app = Flask(__name__)
CORS(app)

@app.route('/prediction', methods=['POST'])
def prediction():
    symptoms = request.get_json()
    print(symptoms)
    result = predict(symptoms['payload'])
    return jsonify(result[0])


if __name__ == "__main__":
    app.run(debug=True, port=8080)
