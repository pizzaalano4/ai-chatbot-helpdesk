function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user-message");

    let reply = getBotReply(message);

    setTimeout(function() {
        addMessage(reply, "bot-message");
    }, 500);

    input.value = "";
}

function addMessage(text, className) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");

    messageDiv.className = className;
    messageDiv.innerText = text;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! How may I assist you?";
    } 
    else if (message.includes("office hours") || message.includes("open")) {
        return "Our office hours are Monday to Friday, 8:00 AM to 5:00 PM.";
    } 
    else if (message.includes("enrollment") || message.includes("enroll")) {
        return "For enrollment concerns, please visit the registrar office or check the student portal.";
    } 
    else if (message.includes("password") || message.includes("reset")) {
        return "To reset your password, go to the login page and click 'Forgot Password'.";
    } 
    else if (message.includes("payment") || message.includes("tuition")) {
        return "For payment concerns, please proceed to the cashier or check your online payment portal.";
    } 
    else if (message.includes("contact") || message.includes("helpdesk")) {
        return "You may contact the helpdesk at helpdesk@example.com or call 0912-345-6789.";
    } 
    else {
        return "Sorry, I cannot answer that yet. Please contact the helpdesk staff for further assistance.";
    }
}

document.getElementById("user-input")
.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});