var clear = document.getElementById("clearBtn");
clear.onclick = function(){
  document.getElementById("inputTask").value = "";
}

function addTask(){
  var task = document.createElement("li");
  var input = document.getElementById("inputTask").value;
  var txt = document.createTextNode(input);
  
  task.appendChild(txt);
  if(input === ""){
    alert("Please enter a task!");
  }else{
    document.getElementById("taskList").appendChild(task);
   
  }
  document.getElementById("inputTask").value = "";
 
  

  var removeBtn = document.createElement("button");
  var btnText = document.createTextNode("Remove");
  removeBtn.appendChild(btnText);
  task.appendChild(removeBtn);
  removeBtn.className = "remove";
  var remove = document.getElementsByClassName("remove");

  for(var i=0;i<remove.length;i++){
    remove[i].onclick = function(){
      var listItem = this.parentElement;
      listItem.remove();
    }
  }

  var doneBtn = document.createElement("button");
  var doneText = document.createTextNode("Done");
  doneBtn.appendChild(doneText);
  task.appendChild(doneBtn);
  doneBtn.className = "done";
  var done = document.getElementsByClassName("done");

  for(var i=0;i<done.length;i++){
    done[i].onclick = function(){
      var listItem = this.parentElement;
      listItem.style.backgroundColor = "teal";
      listItem.style.textDecoration = "line-through";
    }
  }
}