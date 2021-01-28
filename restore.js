
    function codeAddress(){
        var numbd1 = 0;
        todolist = JSON.parse(localStorage.getItem("todos"));

        for(x of todolist){       
            numidb = numidb + 1;
            numidp = numidp - 1; 

            var parag = document.createElement("P");
            var button = document.createElement("BUTTON");
            var divd = document.getElementById("potatoes");
            var idstrb = numidb.toString();
            var idstrp = numidp.toString();

            button.setAttribute("onclick", "reply_click(this.id)");
            button.setAttribute("id", idstrb);  
            button.setAttribute("class", 'todobutton');

            parag.setAttribute("id", idstrp);
            parag.setAttribute("class", "todotext");

            parag.innerText = x;

            document.getElementById('potatoes').appendChild(parag);
            document.getElementById('potatoes').appendChild(button);
        }



    }


    window.onload = codeAddress();