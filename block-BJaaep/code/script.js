let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let root = document.querySelector('ul');
let root2 = document.querySelector('.two');

numbers.forEach((number) => {
    let li = document.createElement('li');
    li.classList.add('box');
    let h2 = document.createElement('h2');
    h2.innerText = number;
    h2.style.visibility = "hidden";
    li.addEventListener("click", function() {
        h2.style.visibility = "visible"; 
        setTimeout(() => {
            h2.innerText = "";
        }, 5000);
    });
    li.append(h2);
    root.append(li);
});


root2.addEventListener('click', (num) => {
    let text = num.target.dataset.text;
    num.target.innerText = text;
    setTimeout(() => {
        num.target.innerText = "";
    }, 5000);
});