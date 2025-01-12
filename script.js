let string = "";
let buttons = document.querySelectorAll('.buttons')
let inputBox = document.querySelector('.inputBox')

Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '=') {
            string = eval(string);
            inputBox.value = string;
        } else if(e.target.innerHTML == 'CLR') {
            string = '';
            inputBox.value = string;
        } 

        else if(e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string;
        }
        else{
            string += e.target.innerHTML;
            inputBox.value = string;
        }
    });
});