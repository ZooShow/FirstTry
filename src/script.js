let button = document.querySelectorAll('button');
let img_true = document.querySelector('.true');
let img_false = document.querySelector('.false');
for (let buttons of button){
    buttons.onclick = function(){
        if (buttons.classList.contains('yes')){
            img_true.classList.toggle('hidden');
            img_false.classList.add('hidden');
        } else if (buttons.classList.contains('nop')) {
            img_false.classList.toggle('hidden');
            img_true.classList.add('hidden');
        }
    }
    
} 