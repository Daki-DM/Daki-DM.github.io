
function codeAddress2(){

    var i = -1;
    links = JSON.parse(localStorage.getItem("links"));
    titles = JSON.parse(localStorage.getItem("titles"));
    for(x of links){
        i = i + 1;

        var button1 = document.createElement("BUTTON");
        button1.setAttribute("onclick", "window.open(" + "'" + titles[i] + "'" + ")");
        button1.setAttribute("class", "linkbutton");
        button1.setAttribute("id", "linkbut")
        button1.textContent = x;

        document.getElementById("linki").appendChild(button1);
    }
}


window.onload = codeAddress2();



var links = [];
var titles = [];
function addbutton(){

    var link = document.getElementById("link").value;
    var title = document.getElementById("linkname").value;    
    var button = document.createElement("BUTTON");


    links.push(link);
    titles.push(title);

    button.setAttribute("onclick", "window.open( " + "'" + title + "'" + ")");
    button.setAttribute("class", "linkbutton");
    button.setAttribute("id", "linkbut")
    button.textContent = link;
    document.getElementById("linki").appendChild(button);

    localStorage.setItem("links", JSON.stringify(links))
    localStorage.setItem("titles", JSON.stringify(titles))
}