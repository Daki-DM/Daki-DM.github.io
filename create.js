window.onload = function createeverything() {


    if (localStorage.getItem("firsttime") == "false"){


    }
    else{
        localStorage.setItem("firsttodo", "true");
        localStorage.setItem("todos", JSON.stringify(""));
        localStorage.setItem("links", JSON.stringify(""));
        localStorage.setItem("titles", JSON.stringify(""));
        localStorage.setItem("events", JSON.stringify(""));
        localStorage.setItem("firsttime", "false");
        location.reload(true);
    }
}