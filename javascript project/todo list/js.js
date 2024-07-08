
function add(){
  const a= document.getElementById("enter")
  var myList = document.getElementById("list");
  
  
  
  
  if(a == ''){
    alert("write something in todo list")
  }
  else{
    const c=document.createElement("li")
    c.innerHTML=a.value
    myList.appendChild(c)
    c.className="flex  justify-between"
  }
  
  const newdiv=document.createElement('div');
  newdiv.classList="flex gap-1"
  const editbtn=document.createElement("button");
  editbtn.textContent='edit/';
  newdiv.appendChild(editbtn)
  editbtn.setAttribute("id","editb")
  editbtn.setAttribute("onclick","edit()")
  const removebtn=document.createElement("button");
  removebtn.textContent='remove';
  newdiv.appendChild(removebtn)
  removebtn.setAttribute("id","removeb")
  removebtn.setAttribute("onclick","removebt()")
  myList.appendChild(newdiv) 
}

function removebt(){
  var myList = document.getElementById("list");
  var listItemToRemove = myList.getElementsByTagName("li");
  myList.remove(listItemToRemove);
  
  
}
 

