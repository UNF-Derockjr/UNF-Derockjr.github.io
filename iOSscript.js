let htmlCode = "";
function OpenApp(app){
    htmlCode = "";
    htmlCode += `
    <div id='application'>
        <div id="back" onclick='$(this).parent().parent().remove();'>
            <span class='material-symbols-outlined'>
                arrow_back_ios
            </span>
            <h3>Back</h3>
        </div>
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
            htmlCode += `
            <div id="gallery"></div
            `;
            loadImages();
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
                <div class="social-tag" onClick="window.location.assign('https://github.com/UNF-Derockjr');">
                    <i class="fa-brands fa-github" ></i>
                    <p> @UNF-Derockjr </p>
                </div>
                <div class="social-tag" onClick="window.location.assign('https://www.linkedin.com/in/derrick-keith-504a9a17b/');">
                    <i class="fa-brands fa-linkedin" ></i>
                    <p> @DerrickKeith </p>
                </div>
                <div class="social-tag" onClick="window.location.assign('https://www.instagram.com/derockjrdev/');">
                    <i class="fa-brands fa-instagram" ></i>
                    <p> @derockjrdev </p>
                </div>
                <div class="social-tag" onClick="window.location.assign('https://www.youtube.com/channel/UC1FxA4iH6VMKdEVPYml4s0A');">
                    <i class="fa-brands fa-youtube" ></i>
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
                    <input id="from-text" type="text" placeholder="Email here"></input>
                </div>
                <hr>
                <div id="subject">
                    <h3>Subject:</h3>
                    <input id="subject-text" type="text" placeholder="Subject here"></input>
                </div>
                <hr>
                <div id="message">
                    <textarea id="message-text" placeholder="Message here"></textarea>
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
                    <span class="material-symbols-outlined" onClick="Call()">
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
    const subject = document.getElementById("subject-text").value;
    const message = document.getElementById("message-text").value;
    console.log(subject);
    console.log(message);
    window.open('mailto:derrickkeithjr@gmail.com?subject=' + subject + '&body=' + message);
    //alert("Sorry, this doenst work yet. Please use your own emailing app to contact me.");
}
function Call(){
    window.open('tel:9045780594');
    //alert("Sorry, this doenst work yet. Please use your own phone app to contact me.");
}
async function loadImages() {
    try {
      const response = await fetch('/images.json');
      const images = await response.json();
      const gallery = document.getElementById('gallery');

      images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `gallery/${image}`;
        gallery.appendChild(imgElement);
      });
    } catch (error) {
      console.error('Error loading images:', error);
    }
  }