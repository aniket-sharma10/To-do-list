let input_task = document.querySelector('#input-task')
let list_container = document.querySelector('.list-container')
let error = document.querySelector('.error')

document.querySelector('#addBtn').addEventListener('click', ()=>{
    addtask();
})

function addtask(){
    if(input_task.value === ''){
        error.style.display = "block";
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input_task.value;
        list_container.appendChild(li);
        error.style.display = "none";

        let span = document.createElement('span')
        span.innerHTML = '&#10060;'
        li.appendChild(span)
    }
    input_task.value = '';
    saveData();
}

list_container.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
}
function showData(){
    list_container.innerHTML = localStorage.getItem("data");
}
showData();