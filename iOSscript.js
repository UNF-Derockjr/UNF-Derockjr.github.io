let htmlCode = "";
function OpenApp(app){
    htmlCode = "";
    htmlCode += `
    <div id='application'>
        <span class='material-symbols-outlined' onclick='$(this).parent().parent().remove();'>
            arrow_back_ios
        </span>
    `;
    switch (app) {
        case "AboutMe":
            htmlCode += `
            <div id='app-content'>
                <h3 style='padding: 30px;'>
                    Hello, My name is Derrick. Writing code and exploring technology has been a strong passion of mine for about 10 years now. At the same time, my interest in robotics, 3D modelling, video editing, and a lot has grown more over my school years. I am always ready and striving to learn new skills and solve advance problems.
                </h3>
            </div>
            `;
            break;
        case "Gallery":
            break;
        case "Awards":
            htmlCode += `
            <div id="awards">
                <img src="Awards/FLLAward.jpg"></img>
                <img src="Awards/CIW-Internet-Business-Associate.jpg"></img>
                <img src="Awards/Derrick-Keith-Certificate-of-Completion-_3D-Modeling-with-Maya_-Google-Docs.jpg"></img>
                <img src="Awards/EsportsAward.jpg"></img>
            </div>
            `;
            break;
            
        case "Socials":
            htmlCode += `
                <div class="social-tag>
                    //span tag here
                    <p> @derockjrdev </p>
                </div>
            `;
            break;
        case "Mail":
            htmlCode += `
            <div id="mail">
                <div id="header">
                    <h1>New Message</h1>
                    <span class="material-symbols-outlined" onclick="SendEmail()">
                    arrow_upward
                    </span>
                </div>
                <div id="to">
                    <h3>To: </h3>
                    <h3>derrickkeithjr@gmail.com</h3>
                </div>
                <hr>
                <div id="from">
                    <h3>Cc/Bcc, From:</h3>
                    <input type="text" placeholder="Email here"></input>
                </div>
                <hr>
                <div id="subject">
                    <h3>Subject:</h3>
                    <input type="text" placeholder="Subject here"></input>
                </div>
                <hr>
                <div id="message">
                    <textarea placeholder="Message here"></textarea>
                    <p>Sent form my iPhone</p>
                </div>
            </div>
            `;
            break;
        case "Phone":
            htmlCode += `
            <div id='phone-content'>
                <h1>
                    +1 904-578-0594
                </h1>
            `;
            htmlCode += `
                <div id="numpad">
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                    <h2>4</h2>
                    <h2>5</h2>
                    <h2>6</h2>
                    <h2>7</h2>
                    <h2>8</h2>
                    <h2>9</h2>
                    <h2>*</h2>
                    <h2>0</h2>
                    <h2>#</h2>
                    <span class="material-symbols-outlined">
                    call
                    </span>
                </div
            </div>
            `;
            break;
        default:
            break;
    }
    htmlCode += "</div>";

    document.body.innerHTML += "<div id='application-holder'></div>";
    document.getElementById("application-holder").innerHTML = htmlCode;
}

function SendEmail(){
    alert("Sorry, this doenst work yet. Please use your own emailing app to contact me.");
}