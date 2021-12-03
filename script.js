//variables

//-b
let b = document.querySelectorAll('.b');
//-c
let c = document.querySelectorAll('.c');
//-sum solve
let sum_num1 = document.querySelector('.sum_num1');
let sum_num2 = document.querySelector('.sum_num2');
//-product
let product_num1 = document.querySelector('.product_num1');
let product_num2 = document.querySelector('.product_num2');
//-button solve
let btn_solve = document.querySelector('.solve');
let btn_reset = document.querySelector('.clear');
let btn_help = document.querySelector('.help');
//- val-b
let val_b = document.querySelector('#val-b');
//- val-c
let val_c = document.querySelector('#val-c');
//pair 
let pair1 = document.querySelector('.pair');
let pair2 = document.querySelector('.pair2');
//containers
let error_container = document.querySelector('.error-container');
let solution_container = document.querySelector('.solution');
//functions
function getFactor(b,c){
    let n = -100;
    let i = -100;

    for(let n = -100; n <= 100; n++){
        if(i == 100){
            error_container.style.display = 'flex';
            break;
        }else{
            if(n == 100){
                i++;
                n = -100;
            }
            if(Number(i) * Number(n) == c){
                if(Number(i) + Number(n) == b){
                    sum_num1.textContent = i;
                    sum_num2.textContent = n;
                    product_num1.textContent = i;
                    product_num2.textContent = n;
                    displayEquation(n,i);
                    solution_container.style.display = 'block';
                    break;
                }
            }
            console.log(`Checking : ${i} and ${n}`)
        }
    }

}
function displayEquation(x,y){
    if(x >= 0){
        pair1.textContent = `(x + ${x})`;
    }else{
        pair1.textContent = `(x ${x})`;
    }
    if(y >= 0){
        pair2.textContent = `(x + ${y})`;
    }else{
        pair2.textContent = `(x ${y})`;
    }
}

//events
btn_solve.addEventListener('click', function(){
    solution_container.style.display = 'none';
    error_container.style.display = 'none';

    c.forEach(function(e){
        e.textContent = val_c.value;
    })
    b.forEach(function(e){
        e.textContent = val_b.value;
    })
    getFactor(val_b.value,val_c.value);
});

btn_reset.addEventListener('click', function(){
    solution_container.style.display = 'none';
    error_container.style.display = 'none';
    val_c.value = '0';
    val_b.value = '0';
})
btn_help.addEventListener('click', function(){
    window.open("https://www.youtube.com/watch?v=ddWoxM8P4zc","_blank");
})