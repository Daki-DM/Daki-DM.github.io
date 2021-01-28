
    var numidb = 0;
    var numidp = 0;
 
function addtodo(){
    numidb = numidb + 1;
    numidp = numidp - 1;
    var todolist = JSON.parse(localStorage.getItem("todos")) || [];
    var divd = document.getElementById("todod");
    var idstrb = numidb.toString();
    var idstrp = numidp.toString();
    var todo = document.getElementById("todo").value;
    var para = document.createElement("P");
    var button = document.createElement("BUTTON");
    var sel = document.getElementById("selector").value;

    todolist.push(sel + todo);

    
    localStorage.setItem("todos", JSON.stringify(todolist));

    button.setAttribute("onclick", "reply_click(this.id)");
    button.setAttribute("id", idstrb);  
    button.setAttribute("class", 'todobutton'); 
    
    para.setAttribute("id", idstrp);
    para.setAttribute("class", "todotext");
    para.innerText = sel + todo;  
    
    document.getElementById('todod').appendChild(para);   
    document.getElementById('todod').appendChild(button);
    
    document.getElementById('todo').value = '';
}

function reply_click(clicked_id){
    var pnum1 = clicked_id * 2;
    var pnum = clicked_id - pnum1; 
    var myobj = document.getElementById(clicked_id);
    var myobj2 = document.getElementById(pnum);


    todolist.splice(todolist.indexOf(myobj2.innerHTML), 1);

    localStorage.setItem('todos',JSON.stringify(todolist));

    myobj.remove();
    myobj2.remove();
    }
