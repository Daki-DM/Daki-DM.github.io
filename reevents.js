window.onload = codeAddress3();
function codeAddress3(){
    var reevents = JSON.parse(localStorage.getItem("events"));

    for(y of reevents){
        number = number + 1;
        var pag = document.createElement("P");
        pag.innerHTML = y;
        pag.setAttribute("id", number);
        document.getElementById("potatoes1").appendChild(pag);
    }

}
