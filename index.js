const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask()
{
    if(inputBox.value==="")
    {
        alert("you must write something");

    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML=`<img id="cross" src="images/cross.png" alt="cross image" width="8px" height="8px">`;
        li.appendChild(span);

       

    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
     if(e.target.tagName==="SPAN" || e.target.getElementById("cross"))
    {
        
        e.target.parentElement.remove();
        saveData();
    }
    
},false);
function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();