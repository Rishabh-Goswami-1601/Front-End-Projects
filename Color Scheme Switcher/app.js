let buttons=document.querySelectorAll(".button");
let body=document.querySelector("body");

buttons.forEach(function(button)
    {
        button.addEventListener('click',function(e){
            if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
            }
            if(e.target.id === 'pink'){ 
                body.style.backgroundColor = 'pink';
            }
            if(e.target.id === 'aquamarine'){
            body.style.backgroundColor = 'aquamarine';
            }
            if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
            }
        });
    }) ;