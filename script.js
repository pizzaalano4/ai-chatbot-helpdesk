window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";

    let savedChat = localStorage.getItem("chatHistory");

    if (savedChat) {
        document.getElementById("chat-box").innerHTML = savedChat;
    }
});

function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user-message");

    let reply = getBotReply(message);

    addMessage("Typing...", "bot-message");

    setTimeout(function () {
        let chatBox = document.getElementById("chat-box");
        chatBox.removeChild(chatBox.lastChild);

        addMessage(reply, "bot-message");
    }, 1000);

    input.value = "";
}

function addMessage(text, className) {
    let chatBox = document.getElementById("chat-box");

    let messageDiv = document.createElement("div");
    messageDiv.className = className;

    let time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    messageDiv.innerHTML = `
        ${text}
        <div class="time">${time}</div>
    `;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    localStorage.setItem("chatHistory", chatBox.innerHTML);
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "🤖 Hello! How may I assist you?";
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

    else if (message.includes("schedule") || message.includes("class")) {
        return "For schedule concerns, please check your student portal or contact your department.";
    }

    else if (message.includes("grade") || message.includes("grades")) {
        return "For grade concerns, please contact your subject instructor or registrar office.";
    }

    else if (message.includes("requirements") || message.includes("documents")) {
        return "For document requirements, please prepare your valid ID, registration form, and other required school documents.";
    }

    else if (message.includes("contact") || message.includes("helpdesk")) {
        return "You may contact the helpdesk at helpdesk@example.com or call 0912-345-6789.";
    }

    else {
        return "Sorry, I cannot answer that yet. Please contact the helpdesk staff for further assistance.";
    }
}

function quickQuestion(question) {
    document.getElementById("user-input").value = question;
    sendMessage();
}

function clearChat() {
    document.getElementById("chat-box").innerHTML = `
        <div class="bot-message">
            🤖 Chat cleared. How can I help you today?
            <div class="time">Now</div>
        </div>
    `;

    localStorage.removeItem("chatHistory");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});