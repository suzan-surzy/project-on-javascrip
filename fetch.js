
const url = 'https://jsonplaceholder.typicode.com/posts'
const container = document.getElementById('container')

fetch(url)
.then((response)=>{
    return response.json()
})

.then((data) => {
    const getData = data.slice(0, 100);

    getData.forEach((item, index) => {
      const div = document.createElement('div');
      div.classList.add('item');
    //   div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
      div.id = `item${index + 1}`;
      container.appendChild(div);

      div.style.border = '5px solid #ddd';
      
      div.addEventListener('click', () => {
        const blogId = item.id;
        const blogTitle = item.title;
        location.href = `fetchid.html?id=${blogId}&title=${blogTitle}`
      });
    });
  });

// const boxdiv = [

//        "text task 1",

//        "text task 2",

//        "text task 3",

//        "text task 4",

//        "text task 5",

//        "text task 6"
// ]
// console.log()
// const container = document.createElement("div")
// container.style.display = "flex"
// container.style.flexWrap = "wrap"
// boxdiv.forEach((text)=>{
//     const div = document.createElement("div")
//     div.style.width = "10%"
//     div.style.border = "1px solid #ddd"
//     div.style.padding = "5px"
//     div.style.backgroundColor = "blue"
//     console.log(div)
//     const part = document.createElement("p")
//     part.innerText = text
//     div.appendChild('p')
//     container.appendChild(div)
// })
// document.body.appendChild(container)
// const Containers = document.getElementsByClassName("container") 
// Containers = document.querySelector(".container")
// const divNmber = 100;
// for(let i = 0;i < 100; i++){
//     const div = document.createElement("div")
//     div.classList.add("item")
//     Containers.appendchild("div")
// }
