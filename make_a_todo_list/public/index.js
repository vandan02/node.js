const post = async (data) => {
        let req = await fetch(`http://localhost:8816`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });      
}
const givedata=(e)=>{
    e.preventDefault();
    let todo_data = {
        taskname: document.getElementById("taskname").value,
        description: document.getElementById("description").value,
        status: document.getElementById("status").value,
    };   
    post(todo_data);
    window.location.reload();
}
const upadatedata=(ele)=>{
    let updatedData = {
        taskname: document.getElementById("taskname").value,
        description: document.getElementById("description").value,
        status: document.getElementById("status").value,
    }
    return updatedData;
}
document.getElementById("todolist").addEventListener("submit", givedata);
const get=async()=>{
    let req = await fetch(`http://localhost:8816`);
    let res = await req.json();
    return res;
}
let data=await get()
data.map((ele) => {
    let h2 = document.createElement("h2");
    h2.innerHTML = ele.taskname; 
    let h3 = document.createElement("h3");
    h3.innerHTML = ele.description; 
    let p = document.createElement("p");
    p.innerHTML = ele.status; 
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", async () => {
        let req = await fetch(`http://localhost:8816/${ele._id}`, { method: "DELETE" });
        let res = await req.json();
        console.log(res);
        location.reload();
    });
 
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", async () => {
        document.getElementById("taskname").value = ele.taskname;
        document.getElementById("description").value = ele.description;
        document.getElementById("status").value = ele.status;
        document.getElementById("todolist").onsubmit = async (e) => {
            e.preventDefault();  
            let updatedData = updatedata();  
            let req = await fetch(`http://localhost:8816/${ele._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            let res = await req.json();
            console.log(res);
            location.reload(); 
        };
    });
    let container = document.createElement("div");
    container.appendChild(h2);
    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(button);
    container.appendChild(editButton);
  
    document.getElementById("show").appendChild(container); 
});
