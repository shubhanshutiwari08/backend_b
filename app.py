from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

USER_ID = "shubhanshu_08062003"
EMAIL = "tiwarishubhanshu1071@gmail.com"
ROLL_NUMBER = "RA2111003010163"

@app.route('/bfhl', methods=['POST'])
def process_data():
    try:
        data = request.json.get("data")
        if not data:
            return jsonify({"is_success": False}), 400

        numbers = [item for item in data if item.isdigit()]
        alphabets = [item for item in data if item.isalpha()]

        highest_alphabet = max(alphabets, key=lambda x: x.lower(), default=None)

        response = {
            "is_success": True,
            "user_id": USER_ID,
            "email": EMAIL,
            "roll_number": ROLL_NUMBER,
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": [highest_alphabet] if highest_alphabet else []
        }
        return jsonify(response)
    except Exception as e:
        return jsonify({"is_success": False, "error": str(e)}), 500

@app.route('/bfhl', methods=['GET'])
def get_operation_code():
    return jsonify({"operation_code": 1})

if __name__ == '__main__':
    app.run(debug=True)
