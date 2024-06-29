let container = document.getElementById('container')

const box1 = document.createElement("div")


//higher level fucntion? that makes another row once the column cells
//are filled up
const createGrid = function(rows,columns){
  for (let u=1; u<=rows; ++u){
//making columns
for(let i=1; i<=columns; ++i)
    {const box = document.createElement("div")
        
        box.classList.add('squareDiv')
        box.classList.add(`column${i}`)
        box.classList.add(`row${u}`)
        let relativeHeight = (100/rows)
        let relativeWidth = (100/columns)
        box.style.height = relativeHeight + '%'
        box.style.width = relativeWidth + '%'
        
        container.appendChild(box)
    }
}  container.style.


createGrid(16,16)


const removeAllSquareDivs = function (){
    container.innerHTML = '';
}
const redoGrid = function(){
    let num = prompt("how many squares per side?")
    if (num>=100){alert("too large!")
        return;
    }
    removeAllSquareDivs()
    createGrid(num,num)

}
let btn = document.querySelector('button')

btn.addEventListener("click", redoGrid
)


//figure out how to show the border for the container