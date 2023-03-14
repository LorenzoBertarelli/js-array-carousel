const imagesArray = ["./img/01.jpg","./img/02.jpg","./img/03.jpg","./img/04.jpg","./img/05.jpg",];

const itemsContainer = document.querySelector("row-items")

for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray [i];

    const rowItem =
        `<div class="item">
            <img src="${currentImage}" alt="">
        </div>`;

        itemsContainer.innerHTML += rowItem;

        console.log(rowItem);
}

//stato di partenza
const itemsArray = document.getElementsByClassName("item")
console.log(itemsArray);

//creo active e imposto su prima img
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

//prendiamo da html row-items
