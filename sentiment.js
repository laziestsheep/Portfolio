document.getElementById("analyzeButton").addEventListener("click", async () => {
    const userInput = document.getElementById("userInput").value.trim();
    const sentimentResult = document.getElementById("sentimentResult");

    if (!userInput) {
        sentimentResult.textContent = "Please enter some text!";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: userInput }),
        });

        const result = await response.json();

        if (response.ok) {
            sentimentResult.textContent = `Sentiment: ${result.sentiment}`;
        } else {
            sentimentResult.textContent = "Error analyzing sentiment.";
        }
    } catch (error) {
        sentimentResult.textContent = "Error connecting to the server.";
    }
});
