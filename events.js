var number = 0;

function addevent(){

    number = number + 1;

    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var name = document.getElementById("event");
 
    var event = document.createElement("P");

    event.innerHTML = name.value + ":" + " " + date.value + ", " + time.value;

    event.setAttribute("id", number);

    var events = JSON.parse(localStorage.getItem("events")) || [];

    events.push(name.value + ":" + " " + date.value + ", " + time.value);

    localStorage.setItem("events", JSON.stringify(events));

    document.getElementById("potatoes1").appendChild(event);
}

