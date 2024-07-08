function add(){
    const listfeild=document.getElementById("list");
    const inputfeild=document.getElementById("inputf")
    if(inputfeild.value==''){
        alert("you have to write something!")
        
    }
    else{
        const a=document.createElement("li")
        a.innerHTML=inputfeild.value;
        a.className="flex  justify-between mt-1 "
        const removebtn=document.createElement("button")
        removebtn.innerHTML="delete"
        removebtn.className="hover:bg-slate-600 rounded-xl"
        removebtn.setAttribute("onclick","deleteli()")
        a.id="hello"
        a.appendChild(removebtn)
        
        //const editbtn=document.createElement("button")
       // editbtn.innerHTML="edit"
        //editbtn.setAttribute("onclick","editli()")
        //a.appendChild(editbtn)
        listfeild.appendChild(a)
 
    }
    inputfeild.value="";
    savedata();
    
}

function deleteli(){
    const a=document.createElement("li")
    const liid=document.getElementById("hello")
    liid.appendChild(a)
    liid.remove() 
    savedata();
}


function savedata()

{ 
    const listfeild=document.getElementById("list")
    
    
    localStorage.setItem("data",listfeild.innerHTML);
  
}
window.onload = function() {
    const listField = document.getElementById("list");
    listField.innerHTML = localStorage.getItem("data") || "";
}

