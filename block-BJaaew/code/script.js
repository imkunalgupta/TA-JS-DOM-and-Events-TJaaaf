console.log(got);

let parentElm = document.querySelector(".mainbox");

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let cardsHTML = allPeople.map(person => {
  return `<li class="box">
    <div class="flex justify">
      <img src=${person.image}
      alt=${person.name}
      />
      <h2>${person.name}</h2>
    </div>
    <p>
     ${person.description}
    </p>
    <a class="a" href=${person.wikilink}>Learn More!</a>
  </li>`;
});
parentElm.innerHTML = cardsHTML.join("");

console.log(allPeople);
console.log(cardsHTML);