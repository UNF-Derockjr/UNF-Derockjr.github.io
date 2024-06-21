var md = new MobileDetect(window.navigator.userAgent);

let app = `<div class='window'><div id='title-bar'></div></div>`
function OpenApp(name) {
    let newWindow = $(CreateWindow(name));
    switch (name) {
        case "AboutMe":
            $("body").append(newWindow);
            newWindow.draggable({
                handle: "#title-bar"
            });
            break;
        case "Gallery":
            $("body").append(newWindow);
            newWindow.draggable({
                handle: "#title-bar"
            });
            break;
        case "Awards":
            alert(name);
            break;
        case "Social":
            alert(name);
            break;
        case "Contact":
            alert(name);
            break;
        default:
            break;
    }
}

function CreateWindow(name){
    let htmlCode = "<div class='window'><div id='title-bar'>";
    switch (name) {
        case "AboutMe":
            htmlCode += "<p>About Me</p>";
            break;
        case "Gallery":
            htmlCode += "<p>Gallery</p>";
            break;
        case "Awards":
            htmlCode += name;
            break;
        case "Social":
            htmlCode += name;
            break;
        case "Contact":
            htmlCode += name;
            break;
        default:
            break;
    }
    htmlCode += "<h3>-</h3><h3>[]</h3><h3 onclick='$(this).parent().parent().remove();'>X</h3>"
    htmlCode += "</div>";//close title bar
    switch (name) {
        case "AboutMe":
            htmlCode += "<h2>Hello, My name is Derrick</h2>";
            break;
        case "Gallery":
            //htmlCode += "<div>"
            htmlCode += "<img src='Gallery/CodePen_InstagramRemake.png'></img>";
            break;
        case "Awards":
            htmlCode += name;
            break;
        case "Social":
            htmlCode += name;
            break;
        case "Contact":
            htmlCode += name;
            break;
        default:
            break;
    }

    htmlCode += "</div>";//window
    return htmlCode;
}

document.addEventListener("DOMContentLoaded", function (event) {
    //start();
    alert(md.phone());
});