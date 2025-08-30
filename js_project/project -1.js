const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

console.log(buttons)

buttons.forEach( button =>{
    button.addEventListener( 'click', function(e){
        // console.log(e);
        // console.log(e.target.id); //return id of button clicked
        // if(e.target.id ==="grey"){
        //     body.style.backgroundColor = "grey";
        // }
        // if(e.target.id ==="white"){
        //     body.style.backgroundColor = "white";
        // }
        // if(e.target.id ==="blue"){
        //     body.style.backgroundColor = "blue";
        // }
        // if(e.target.id ==="yellow"){
        //     body.style.backgroundColor = "yellow";
        // }

        //switch method
        const color = e.target.id;
        switch(color){
            case "grey":
                body.style.backgroundColor = "grey";
                break;
            case "white":
                body.style.backgroundColor = "white";
                break;
            case "blue":
                body.style.backgroundColor = "blue";
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
            default:
                body.style.backgroundColor = "white";
        }
    })
})

