let hello = document.createElement('h1')
hello.innerText="Welcome to Calculate Me!!";

// function for add sub and mul
let firstValue ="";
let memory = 0; // Initialize memory value

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == "="){
            firstValue= eval(firstValue);
            document.querySelector('input').value = firstValue;
        }else if(e.target.innerHTML=="C"){
            firstValue= ""
            document.querySelector("input").value = firstValue;
        }else if (e.target.innerHTML == "M+") {
            // Add to memory
            memory += parseFloat(firstValue || 0); // Add current value to memory
            document.querySelector('input').value = "Memory: " + memory; // Display memory value
        } else if (e.target.innerHTML == "M-") {
            // Subtract from memory
            memory -= parseFloat(firstValue || 0); // Subtract current value from memory
            document.querySelector('input').value = "Memory: " + memory; // Display memory value
        }
        
        else{
            console.log(e.target)
            firstValue= firstValue + e.target.innerHTML;
            document.querySelector('input').value = firstValue;
        }
    })

})