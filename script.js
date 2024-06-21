let app = `<div class='window'><div id='title-bar'></div></div>`
function OpenApp(name) {
    let newWindow = $(CreateWindow(name));
    
    $("body").append(newWindow);
    newWindow.draggable({
        handle: "#title-bar"
    });
    newWindow.css("top", ((Math.floor(Math.random() * 70)) + 5).toString() + '%');
    newWindow.css("left", ((Math.floor(Math.random() * 70)) + 5).toString() + '%');
}

function CreateWindow(name){
    let htmlCode = "<div class='window'><div id='title-bar'>";
    switch (name) {
        case "AboutMe":
            htmlCode += "<h2>About Me</h2>";
            break;
        case "Gallery":
            htmlCode += "<h2>Gallery</h2>";
            break;
        case "Awards":
            htmlCode += "<h2>Awards</h2>";
            break;
        case "Social":
            htmlCode += "<h2>Social</h2>";
            break;
        case "Contact":
            htmlCode += "<h2>Contact</h2>";
            break;
        default:
            break;
    }
    htmlCode += "<h3>-</h3><h3>[]</h3><h3 onclick='$(this).parent().parent().remove();'>X</h3>"
    htmlCode += "</div>";//close title bar
    htmlCode += "<div id='content'>"//open content
    switch (name) {
        case "AboutMe":
            htmlCode += "<p>Hello, My name is Derrick. Writing code and exploring technology has been a strong passion of mine for about 10 years now. At the same time, my interest in robotics, 3D modelling, video editing, and a lot has grown more over my school years. I am always ready and striving to learn new skills and solve advance problems.</p>";
            break;
        case "Gallery":
            htmlCode += "<img class='gallery'src='Gallery/CodePen_InstagramRemake.png'></img>";
            break;
        case "Awards":
            htmlCode += name;
            break;
        case "Social":
            htmlCode += "GitHub: UNF-Derockjr";
            htmlCode += "LinkedIn: Derrick Keith";
            htmlCode += "Instagream: @derockjrdev";
            htmlCode += "Youtube: Derockjr Game Development";

            break;
        case "Contact":
            htmlCode += "<p>You can contact me here for any further questions:</p>";
            htmlCode += "<p>Email: derrickkeithjr@gmail.com</p>";
            break;
        default:
            break;
    }
    htmlCode += "</div>";//close content
    htmlCode += "</div>";//close window
    return htmlCode;
}

document.addEventListener("DOMContentLoaded", function (event) {
    //start();
});