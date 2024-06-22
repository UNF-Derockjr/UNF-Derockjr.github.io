let htmlCode = "";
function openApp(){
    htmlCode += "<div id='application'><span class='material-symbols-outlined' onclick='$(this).parent().remove();'>arrow_back_ios</span></div>";
    document.body.innerHTML += htmlCode;
}