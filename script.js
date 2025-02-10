async function submitFeedback() {
    const data = {
        user_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("YOUR_API_GATEWAY_URL/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById("responseMessage").innerText = result.message;
}
