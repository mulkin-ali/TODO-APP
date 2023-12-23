const taskinput=document.getElementById('task-input');
const taskform=document.getElementById('task-form');
const tasklist=document.getElementById('task-list');

taskform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskTitle=taskinput.value;
    console.log(taskTitle);
     if(taskTitle==""){
        alert("please enter task");
     }else{

     
    const listitem=document.createElement("li");
    listitem.innerHTML=taskTitle;
    tasklist.append(listitem);
    let span=document.createElement("span");
    span.innerHTML=`&times;`
    listitem.appendChild(span);
    taskinput.value="";
    savelistData();
     }
});
tasklist.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classlist.toggle("checked");
        savelistData();
    }
    if(e.target.tagName=="SPAN"){
        const li=e.target.parentElement;
        li.remove();
        savelistData();
    }
});

function showlistData(){
   tasklist.innerHTML =localStorage.getItem("listitem");
}
function savelistData(){
    localStorage.setItem('lisitem',tasklist.innerHTML);
}
showlistData();