const container = document.querySelector("#container");
const buttonPress = document.querySelector("#butt");

// container.appendChild(squares);

function createSquares()
{
    const parent = document.getElementById("container")

    while(parent.firstChild)
    {
        parent.removeChild(parent.lastChild)
    }


    let gridSize = parseInt(prompt("Choose Gridsize between 1 and 100"));
    if(gridSize < 1 || gridSize > 100)
    {
        gridSize = parseInt(prompt("Choose Gridsize between 1 and 100"))
    }
    console.log(gridSize);
    let squareCount = gridSize * gridSize;
    let percentage = 100/gridSize;
    let squareSize = 1000/gridSize;
    console.log(squareCount);
    for(let i = 0; i < squareCount;i++)
    {
        let opacityNumber = 0;
        const squares = document.createElement("div");
        container.appendChild(squares);
        squares.classList.add("squares");
        squares.setAttribute("style","display:flex; flex:"+percentage+"%")
        
        squares.setAttribute("id", "squares");
        // squares.setAttribute("flex","1,1, " + percentage+"%")
        squares.addEventListener("mouseover", colors);
        // container.appendChild(squares)
            
        // function black()
        // {
            // console.log("meow")
            // squares.setAttribute("style","background-color:black")
            // 
        // }
        function colors()
        {
            let r = Math.floor(Math.random()* 255);
            let g = Math.floor(Math.random()* 255);
            let b = Math.floor(Math.random()* 255);

            let backColor = "rgb(" + r + " " + g + " " + b + "/" + opacityNumber +"% )";
            if(opacityNumber < 100)
                {
                    opacityNumber = opacityNumber + 10;
                }
            
            
            
            squares.style.backgroundColor = backColor;
        }


    }

}   
// color.addEventListener("mouseover", black )

buttonPress.addEventListener("click", createSquares);
