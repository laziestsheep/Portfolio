from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.json
    if not data or 'text' not in data:
        return jsonify({"error": "Invalid input"}), 400

    text = data['text']
    analysis = TextBlob(text)
    polarity = analysis.sentiment.polarity

    if polarity > 0:
        sentiment = "Positive 😊"
    elif polarity == 0:
        sentiment = "Neutral 😐"
    else:
        sentiment = "Negative 😞"

    return jsonify({"sentiment": sentiment})

if __name__ == '__main__':
    app.run(debug=True)
