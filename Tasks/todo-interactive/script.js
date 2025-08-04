
const completedTask = document.querySelectorAll('#todo-list > li');

completedTask.forEach(item=>(
    item.addEventListener('click', ()=>{
        // console.log(item)
        item.classList.toggle('completed')
    })
));

// completedTask.forEach(task=>{
//     task.onclick =  ()=>{
//         task.classList.toggle('completed')
//     }
// })