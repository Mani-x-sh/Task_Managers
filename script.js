

const inputBox=document.getElementById('input')
const taskList=document.getElementById('tasks')

function add()
{

if(inputBox.value==""){
    alert("likhne nahi aata hai kya ?");
} else {
    const addList = document.querySelector(".task");
    
    addList.innerHTML = `
    <li>${inputBox.value}<button class="deleteButton">x</button></li>${addList.innerHTML}`;
   
     saveData();
}
 inputBox.value="";
}

function deleteTodo() {
    taskList.addEventListener("click", (e) => {
       if (e.target.classList.contains("deleteButton")) {
          e.target.parentElement.remove(); 
          saveData();
       }
    });
 }

function saveData()
{
    localStorage.setItem("Data",taskList.innerHTML);
}
function showData()
{
    taskList.innerHTML=localStorage.getItem("Data");
}
showData();
deleteTodo();
