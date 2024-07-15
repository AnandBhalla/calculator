let str = "";
let buttons = document.querySelectorAll('.key');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        handleinput(e.target.innerText);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleinput('=');
    } else if (e.key === 'Escape') {
        handleinput('C');
    } else if (e.key === 'Backspace') {
        str = str.slice(0, -1);
        document.querySelector('.disp').value = str;
    } else {
        const allowedKeys = "0123456789+-*/.()";
        if (allowedKeys.includes(e.key)) {
            handleinput(e.key);
        }
    }
});

function handleinput(input) {
    if (input === '=') {
        try {
            str = eval(str).toString();
        } catch {
            str = "Error";
        }
    } else if (input === 'C') {
        str = "";
    } 
    else if (input === '+/-') {
        if (str.startsWith('-')) {
            str = str.slice(1);
        } else {
            str = '-' + str;
        }
    }
    else {
        str += input;
    }
    document.querySelector('.disp').value = str;
}
let back=document.querySelector('#backspace')
back.addEventListener("click",()=>{
        str=str.substring(0,str.length-1)
        if(str[0]=='-'&&str.length==1)   str=""
        document.querySelector('.disp').value = str;
})