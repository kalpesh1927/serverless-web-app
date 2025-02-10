async function submitFeedback() {
    const data = {
        user_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("arn:aws:execute-api:ap-south-1:376129854687:69ldtusvpl/*/POST/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById("responseMessage").innerText = result.message;
}
