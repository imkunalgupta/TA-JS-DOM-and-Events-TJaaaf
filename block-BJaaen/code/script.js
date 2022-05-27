let user = document.querySelector(".usericon");
let computer = document.querySelector(".computericon");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");


let dataSet = [
    {
        name: "rock",
        beats: "scissors",
    },
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },
];
let userSelected = {}, computerSelected = {};

function getWinner(user, computer) {
    if(user.name === computer.name){
        result.innerText = "It's a Tie";
    } else if(user.beats === computer.name){
        result.innerText = " 🎁🎁 User Wins 🎁🎁";
    } else {
        result.innerText = " ⚔️⚔️ Computer Wins ⚔️⚔️";
    }
}

function getRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}


function layoutUser() {
    user.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `fa fa-hand-${icon.name}-o`;

        if(userSelected.name === icon.name){
            li.classList.add("selected");
        }
        

        li.addEventListener("click", () => {
            userSelected = icon;

            computerSelected = dataSet[getRandomNumber()];

            getWinner(userSelected, computerSelected);
            
            rerender();
            console.log(userSelected, computerSelected);
        });
        li.append(i);
        user.append(li); 
    });
}

layoutUser();


function layoutComputer() {
    computer.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        
        i.className = `fa fa-hand-${icon.name}-o`;
        if(computerSelected.name === icon.name){
            li.classList.add("selected");
        }

        li.append(i);
        computer.append(li); 
    });
}

layoutComputer();

reset.addEventListener("click", () => {
     userSelected = {};
     computerSelected = {};
     rerender();
})

function rerender () {
    layoutComputer();
     layoutUser();
}