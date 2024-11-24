document.getElementById("analyzeButton").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value.trim();
    const sentimentResult = document.getElementById("sentimentResult");

    if (!userInput) {
        sentimentResult.textContent = "Please enter some text!";
        return;
    }

    // Basic sentiment keywords
    const positiveWords = ["good", "great", "awesome", "fantastic", "happy"];
    const negativeWords = ["bad", "terrible", "sad", "awful", "angry"];

    let sentiment = "Neutral 😐";
    positiveWords.forEach(word => {
        if (userInput.toLowerCase().includes(word)) {
            sentiment = "Positive 😊";
        }
    });
    negativeWords.forEach(word => {
        if (userInput.toLowerCase().includes(word)) {
            sentiment = "Negative 😞";
        }
    });

    sentimentResult.textContent = `Sentiment: ${sentiment}`;
});
