var number = 0;
var number1 = 0;

function addevent(){
    number1 = number1 - 1;
    number = number + 1;

    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var name = document.getElementById("event");
 
    var event = document.createElement("P");
    var but = document.createElement("BUTTON");

    but.setAttribute("class", "todobutton");
    but.setAttribute("id", number1 * 100000);
    but.setAttribute("onclick", "done(this.id)");

    event.innerHTML = name.value + ":" + " " + date.value + ", " + time.value;

    event.setAttribute("id", number * 100000);

    var events = JSON.parse(localStorage.getItem("events")) || [];

    events.push(name.value + ":" + " " + date.value + ", " + time.value);

    localStorage.setItem("events", JSON.stringify(events));

    document.getElementById("potatoes1").appendChild(event);
    document.getElementById("potatoes1").appendChild(but);
}

function done(theid){
    var pnumber1 = theid * 2;
    var pnumber = theid - pnumber1;

    var del1 = document.getElementById(pnumber);
    var del2 = document.getElementById(theid);

    even = JSON.parse(localStorage.getItem("events"));

    even.splice(todolist.indexOf(del2.innerHTML), 1);

    localStorage.setItem("events",JSON.stringify(even));

    del1.remove();
    del2.remove();


}

