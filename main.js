window.addEventListener('load', () =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("task")
    
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const task =input.ariaValue;
        if(!task){
           alert("Please fill out the task")
        }else{
            console.log("Success")
        }

        
    })
})