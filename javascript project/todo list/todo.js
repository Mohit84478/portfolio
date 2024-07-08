function add(){
    const inputfeild=document.getElementById("enter")
    const listfeild=document.getElementById("list")
    if(inputfeild==''){
      alert("write")
    }
    else{
      const a=document.createElement("li")
      a.innerHTML=inputfeild.value
      listfeild.appendChild(a)
      let button=document.createElement("button")
      button.setAttribute("id","deleteb")
      button.setAttribute("onclick","removerbtn()")
      button.innerHTML="remove"
      a.appendChild(button)

      
      
    }
    inputfeild.value="";

  }
  function removerbtn(){
    
    const rem=document.getElementById("delereb")
    const listfeild=document.getElementById("list")
    listfeild.remove(rem)
  }
  
  
 