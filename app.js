let result = window.result;
let generateBtn = window.generate;
let container = window.container


generateBtn.addEventListener('click', () =>{
    let color = Math.random().toString(16).slice(2, 8);
    color = "#" + color;
    result.innerText = color;
    //result.style.color = color;
    result.style.fontWeight = "800";
    container.style.backgroundColor = color;  
})

console.log(Math.random())
