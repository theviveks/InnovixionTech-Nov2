var inputtxt =document.getElementById('input-txt')
var listcontainer =document.getElementById('list-container')

function AddTask(){
     if(inputtxt.value==''){
        alert("You must add something")
     }
     else{
        var li = document.createElement("li")
        li.innerHTML=inputtxt.value
        listcontainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)

     }
     inputtxt.value=""
     saveTask()
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked")
        saveTask()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveTask()

    }

},false)

function saveTask(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function displayTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
    
}
displayTask()