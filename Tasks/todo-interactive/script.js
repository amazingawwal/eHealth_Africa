
const completedTask = document.querySelectorAll('#todo-list > li');

completedTask.forEach(item=>(
    item.addEventListener('click', ()=>{
        // console.log(item)
        item.style.backgroundColor = 'teal'
    })

    // console.log(item)
));

// const h = document.getElementsByTagName('li')

// const images = h.querySelectorAll('img')

// console.log(images)

// const ul = document.getElementById("todo-list");
// const images = ul.getElementsByTagName('img');

// console.log(images.length);