window.onload = codeAddress3();
function codeAddress3(){
    var reevents = JSON.parse(localStorage.getItem("events"));

    for(y of reevents){
        number = number + 1;
        number1 = number1 - 1;
        var pag = document.createElement("P");
        var butter = document.createElement("BUTTON");
        butter.setAttribute("class", "todobutton");
        butter.setAttribute("id", number1 * 100000);
        pag.innerHTML = y;
        butter.setAttribute("onclick", "done(this.id)");
        pag.setAttribute("id", number * 100000);
        document.getElementById("potatoes1").appendChild(pag);
        document.getElementById("potatoes1").appendChild(butter);
    }

}
