let container = document.getElementById('container')

const box1 = document.createElement("div")


for(let i=1; i<=16; ++i)
    {const box = document.createElement("div")
        box.textContent=`Box ${i}` ;
        box.classList.add('boxes')
        container.appendChild(box)
    }
