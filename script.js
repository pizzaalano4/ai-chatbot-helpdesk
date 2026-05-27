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

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "🤖 Hello! How may I assist you?";
    }

    else if (message.includes("next semester") || message.includes("semester")) {
        return `
            The next semester is expected to start on August 2026.<br>
            Please wait for the official academic calendar announcement from the school.
        `;
    }

    else if (message.includes("enrollment week") || message.includes("enrollment schedule")) {
        return `
            Enrollment week is expected to be from July 22 to July 26, 2026.<br>
            Students are advised to prepare their requirements before enrollment.
        `;
    }

    else if (message.includes("available courses") || message.includes("courses offered")) {
        return `
            Available Courses:<br><br>
            • BS Information Systems<br>
            • BS Information Technology<br>
            • BS Computer Science<br>
            • BS Accountancy<br>
            • BS Business Administration<br>
            • BS Tourism Management<br>
            • BS Psychology<br>
            • BS Civil Engineering<br><br>
            You may ask: <b>BSIS flowchart</b>, <b>BSIT flowchart</b>, or <b>BSCS flowchart</b>.
        `;
    }

    else if (message.includes("course flowchart") || message.includes("flowchart list")) {
        return `
            Available Course Flowcharts:<br><br>
            • BSIS Flowchart<br>
            • BSIT Flowchart<br>
            • BSCS Flowchart<br>
            • BSA Flowchart<br>
            • BSBA Flowchart<br>
            • BSTM Flowchart<br>
            • BSPsych Flowchart<br>
            • BSCE Flowchart<br><br>
            Type the course name to view its sample flowchart.
        `;
    }

    else if (message.includes("bsis flowchart") || message.includes("bsis curriculum")) {
        return generateFlowchart("BS Information Systems");
    }

    else if (message.includes("bsit flowchart") || message.includes("bsit curriculum")) {
        return generateFlowchart("BS Information Technology");
    }

    else if (message.includes("bscs flowchart") || message.includes("bscs curriculum")) {
        return generateFlowchart("BS Computer Science");
    }

    else if (message.includes("bsa flowchart") || message.includes("accountancy flowchart")) {
        return generateFlowchart("BS Accountancy");
    }

    else if (message.includes("bsba flowchart") || message.includes("business administration flowchart")) {
        return generateFlowchart("BS Business Administration");
    }

    else if (message.includes("bstm flowchart") || message.includes("tourism flowchart")) {
        return generateFlowchart("BS Tourism Management");
    }

    else if (message.includes("bspsych flowchart") || message.includes("psychology flowchart")) {
        return generateFlowchart("BS Psychology");
    }

    else if (message.includes("bsce flowchart") || message.includes("civil engineering flowchart")) {
        return generateFlowchart("BS Civil Engineering");
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

function generateFlowchart(course) {
    const data = {
        "BS Information Systems": {
            "1st Year": [
                ["GEMMW01X", "GEUTS01X", "GEART01X", "GEFIL02X", "CIENTARL", "GERIZ01X", "BAFINMAX"],
                ["CISECDEL", "CTAPDEVL", "GEETH01X", "GESTS01X", "GEFIL01X", "GERPH01X"],
                ["CCSPEL2X", "GETEWR1X", "CIEVBUPE", "CTSYSADL", "GEACM01X"]
            ],
            "2nd Year": [
                ["MCPED01X", "MCPED02X", "MCPED03X", "GELIT01X", "GECTW01X", "ITINNETE"],
                ["CIMUCOGL", "CISPRMAL", "CCSFEN1L", "CCINCOMX", "CCFUINSY", "CCDATRL"],
                ["CTINFMGL", "CCQUAMET", "CCDATSL", "CIWEBPRL", "CISELE1L"]
            ],
            "3rd Year": [
                ["CISELE2L", "BIZPROC", "SYSANAL", "WEBDEV1", "DATAMAN"],
                ["PROJMAN", "ENTSYS1", "BUSINT1", "ITGOV01"],
                ["CAPSTN1", "RESEARCH", "ELECTV1", "ELECTV2"]
            ],
            "4th Year": [
                ["INTERNSHIP", "CAPSTN2", "PROFETH"],
                ["PRACTICUM"],
                ["ELECTV3", "ELECTV4", "SEMINAR"]
            ]
        },

        "BS Information Technology": {
            "1st Year": [
                ["CCPROG1", "CCCOMPU", "CCDISCR", "GEUTS01X", "GEART01X", "GEMMW01X", "PEPATH1"],
                ["GEFIL01X", "NSTP001", "CCPROG2", "CCNETWR", "CCDBSYS", "GEETH01X"],
                ["PEPATH2", "NSTP002", "GERIZ01X", "CCWEBDV", "CCDSTRU"]
            ],
            "2nd Year": [
                ["ITSOFT1", "ITMOBDV", "ITCYBER", "ITPROJM", "ITSYSAD", "ITNETAD"],
                ["ITELECT1", "ITELECT2", "ITCAPS1", "WEBAPP1", "HCI001", "DATABASE2"],
                ["MOBILE2", "NETADMIN", "SECURITY1", "SYSINTEG", "CLOUD01"]
            ],
            "3rd Year": [
                ["ITINTRN", "ITCAPS2", "ITSEMIN", "ITELECT3", "ITELECT4"],
                ["ITPROF1", "ITRESEA", "ITETHIC", "ITREVIEW"],
                ["DEVOPS1", "APPSEC1", "DATAAN1", "QUALITY1"]
            ],
            "4th Year": [
                ["INTERNSHIP2", "CAPSTONE3", "PORTFOLIO"],
                ["PRACTICUM"],
                ["SEMINAR2", "ELECTV5", "CAREER01"]
            ]
        },

        "BS Computer Science": {
            "1st Year": [
                ["CSPROG1", "CSDISCR", "CSINTRO", "GEUTS01X", "GEART01X", "GEMMW01X", "PEPATH1"],
                ["GEFIL01X", "NSTP001", "CSPROG2", "CSDSTRU", "CSALGOR", "GEETH01X"],
                ["PEPATH2", "NSTP002", "GERIZ01X", "CSARCHI", "CSDBSYS"]
            ],
            "2nd Year": [
                ["CSAIML1", "CSSOFT1", "CSOPERS", "CSNETWR", "CSTHEOR", "CSHCI01"],
                ["CSELECT1", "CSELECT2", "CSTHES1", "COMPMAT", "AUTOMAT", "PROGLANG"],
                ["DATAMIN", "INFOSEC", "SOFTWARE2", "MACHINE1", "RESEARCH1"]
            ],
            "3rd Year": [
                ["CSINTRN", "CSTHES2", "CSSEMIN", "CSELECT3", "CSELECT4"],
                ["CSPROF1", "CSRESEA", "CSETHIC", "CSREVIEW"],
                ["BIGDATA", "CLOUDCS", "AIAPPS", "QUALITYCS"]
            ],
            "4th Year": [
                ["INTERNSHIP2", "THESIS3", "PORTFOLIO"],
                ["PRACTICUM"],
                ["SEMINAR2", "ELECTIVE5", "CAREER01"]
            ]
        },

        "BS Accountancy": {
            "1st Year": [
                ["ACCT001", "BUSMATH", "ECON001", "GEMMW01X", "GEUTS01X", "GEART01X", "PEPATH1"],
                ["ACCT002", "FINACC1", "TAX001", "BUSLAW1", "GEFIL01X", "NSTP001"],
                ["MANACC1", "GEETH01X", "GERIZ01X", "PEPATH2", "NSTP002"]
            ],
            "2nd Year": [
                ["FINACC2", "AUDIT01", "COSTACC", "AIS001", "TAX002", "BUSLAW2"],
                ["ACCELEC1", "ACCELEC2", "ACCREV1", "ADVACC1", "AUDIT02", "ACCTINT"],
                ["ADVACC2", "ACCREV2", "ACCPROF", "ACCRESE", "ACCSEMI"]
            ],
            "3rd Year": [
                ["ACCREV3", "TAXREV1", "AUDREV1", "FINREV1", "LAWREV1"],
                ["GOVACC1", "ETHACC1", "ACCRES2", "ACCSYS2"],
                ["ACCPRAC", "STRACC1", "MANREV1", "AUDPRAC"]
            ],
            "4th Year": [
                ["INTERNSHIP", "BOARDREV1", "BOARDREV2"],
                ["PRACTICUM"],
                ["BOARDREV3", "SEMINAR", "CAREER01"]
            ]
        },

        "BS Business Administration": {
            "1st Year": [
                ["BUSCOM1", "MANPRI1", "ECON001", "GEMMW01X", "GEUTS01X", "GEART01X", "PEPATH1"],
                ["MARKET1", "FINMAN1", "HUMRES1", "GEFIL01X", "NSTP001", "GEETH01X"],
                ["BUSLAW1", "OPMAN01", "GERIZ01X", "PEPATH2", "NSTP002"]
            ],
            "2nd Year": [
                ["STRMAN1", "BUSRES1", "ENTREP1", "BUSPLAN", "PROJMAN", "BUSSTAT"],
                ["BAELEC1", "BAELEC2", "BAPRAC1", "BAINTER", "BASEMIN", "BAELEC3"],
                ["BAELEC4", "BATHES1", "BAPROF1", "BARESEA", "BAETHIC"]
            ],
            "3rd Year": [
                ["BATHES2", "DIGMKT1", "RETAIL1", "FINANA1", "HRDEV01"],
                ["SUPPLY1", "BUSANA1", "LEADER1", "ORGDEV1"],
                ["NEGOT01", "ENTREP2", "QUALITY1", "RISKMAN"]
            ],
            "4th Year": [
                ["INTERNSHIP", "STRATPLAN", "PORTFOLIO"],
                ["PRACTICUM"],
                ["SEMINAR", "ELECTIVE5", "CAREER01"]
            ]
        },

        "BS Tourism Management": {
            "1st Year": [
                ["TOUR001", "PHLTOUR", "HOSP001", "GEMMW01X", "GEUTS01X", "GEART01X", "PEPATH1"],
                ["TOUROPS", "TRVMAN1", "EVENT01", "GEFIL01X", "NSTP001", "GEETH01X"],
                ["FOODSVC", "HOTEL01", "GERIZ01X", "PEPATH2", "NSTP002"]
            ],
            "2nd Year": [
                ["TOURPLAN", "FOREIGN1", "TOURRES", "EVENT02", "TOURMKT", "DESTMAN"],
                ["TMELEC1", "TMELEC2", "TMPRACT", "TMINTRN", "TMSEMIN", "TMELEC3"],
                ["TMELEC4", "TMTHES1", "TMPROF1", "TMRESEA", "TMETHIC"]
            ],
            "3rd Year": [
                ["TMTHES2", "CRUISE1", "AIRLINE1", "RESORT1", "GUIDING"],
                ["ECOTOUR", "CULTURE1", "EVENTMGT", "TOURTECH"],
                ["TOURFIN", "TOURLAW", "CUSTOMER", "RISKTOUR"]
            ],
            "4th Year": [
                ["INTERNSHIP", "PORTFOLIO", "SEMINAR"],
                ["PRACTICUM"],
                ["ELECTIVE5", "CAREER01", "INDUSTRY"]
            ]
        },

        "BS Psychology": {
            "1st Year": [
                ["PSYGEN1", "PSYSTAT", "PSYINTRO", "GEMMW01X", "GEUTS01X", "GEART01X", "PEPATH1"],
                ["DEVPSY1", "PSYASSE", "RESMET1", "GEFIL01X", "NSTP001", "GEETH01X"],
                ["BIOPSY1", "COGPSY1", "GERIZ01X", "PEPATH2", "NSTP002"]
            ],
            "2nd Year": [
                ["ABNPSY1", "INDPSY1", "COUNS01", "SOCPSY1", "EXPPSY1", "PSYTEST"],
                ["PSYELEC1", "PSYELEC2", "PSTHES1", "PSYINTR", "PSTHES2", "PSYSEMI"],
                ["PSYELEC3", "PSYELEC4", "PSYPROF", "PSYRESE", "PSYETHI"]
            ],
            "3rd Year": [
                ["PSYREVI", "CLINPSY", "EDUPSY1", "PERSON1", "PSYLAW1"],
                ["HEALTHP", "ORGPSY1", "PSYDATA", "PSYPRAC"],
                ["GUIDANCE", "FAMILY1", "COMMPSY", "PSYCASE"]
            ],
            "4th Year": [
                ["INTERNSHIP", "BOARDREV1", "PORTFOLIO"],
                ["PRACTICUM"],
                ["BOARDREV2", "SEMINAR", "CAREER01"]
            ]
        },

        "BS Civil Engineering": {
            "1st Year": [
                ["ENGDRAW", "CALCUL1", "PHYS001", "GEMMW01X", "GEUTS01X", "GEART01X", "PEPATH1"],
                ["CALCUL2", "STATICS", "DYNAM01", "GEFIL01X", "NSTP001", "GEETH01X"],
                ["SURVEY1", "ENGMECH", "GERIZ01X", "PEPATH2", "NSTP002"]
            ],
            "2nd Year": [
                ["STRUCT1", "HYDRAU1", "GEOTECH", "TRANSP1", "ENVENG1", "CONMAT1"],
                ["CEELEC1", "CEELEC2", "CEDES01", "CEINTRN", "CEDES02", "CESEMIN"],
                ["CEELEC3", "CEELEC4", "CEPROF1", "CERESEA", "CEETHIC"]
            ],
            "3rd Year": [
                ["CEREVIW", "STEEL01", "REINCON", "HIGHWAY", "WATER01"],
                ["SOILMECH", "FOUND01", "CONSTMAN", "CEESTIM"],
                ["CEPROJECT", "STRUCT2", "HYDRO2", "SURVEY2"]
            ],
            "4th Year": [
                ["INTERNSHIP", "BOARDREV1", "CAPSTONE"],
                ["PRACTICUM"],
                ["BOARDREV2", "SEMINAR", "CAREER01"]
            ]
        }
    };

    const subjects = data[course];
    let termNumber = 1;

    let table = `
        <strong>${course} Flowchart</strong><br>

        <div class="flowchart-wrapper">
            <table class="flowchart-table">
                <tr>
                    <th>Year Level</th>
                    <th>Term</th>
                    <th>Subjects</th>
                    <th>Total Subjects</th>
                </tr>
    `;

    Object.keys(subjects).forEach(year => {
        subjects[year].forEach(termSubjects => {
            table += `
                <tr>
                    <td class="year-cell">${year}</td>
                    <td>Term ${termNumber}</td>
                    <td class="subject-list">${termSubjects.join("<br>")}</td>
                    <td>${termSubjects.length}</td>
                </tr>
            `;

            termNumber++;
        });
    });

    table += `
            </table>
        </div>
    `;

    return table;
}