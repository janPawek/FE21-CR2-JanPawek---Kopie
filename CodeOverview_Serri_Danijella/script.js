let people = [
    {
        name: "John 1",
        likes: 1,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },{
        name: "John 2",
        likes: 2,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },{
        name: "John 3",
        likes: 3,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },{
        name: "John 4",
        likes: 4,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },{
        name: "John 5",
        likes: 5,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },{
        name: "John 6",
        likes: 32,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },{
        name: "John 7",
        likes: 34,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },{
        name: "John 8",
        likes: 45,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },{
        name: "John 9",
        likes: 65,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_960_720.jpg"
    },
];

// Mein Arrayname ist people und hat Objekte drinnen:
for(let val of people){
    document.getElementById("result").innerHTML += `
    <div class="my-2">
    <img src="${val.img}" width="100%">
    <p>${val.name}</p>
    <p class="likes">${val.likes}</p>
    <button class="btn btn-danger mybtn">Like</button>
    </div>
    `;
}

// Kein Event auf alle gleichzeitig möglich, daher lieber eine Class geben und darauf beziehen

let btns = document.querySelectorAll(".mybtn"); // ich wähle alle Elemente, die in mybtn sind und speichere sie in der variable btns
// ist nicht im Loop drinnen! Die Buttons wurden nämlich im Loop noch nicht kreiert bzw werden erst kreiert.
// console.log(btns);

btns.forEach((element, i) => { // element ist lt console log der button, ist der Value - anzahl der likes
    element.addEventListener("click", function () {
        // index of object is matching the index of the button (index element matching index of object)
        if (people[i].likes < 10) {
        people[i].likes++; // oder people[i].likes += 1;
        document.querySelectorAll(".likes")[i].innerHTML = people[i].likes;
        } 
    })
});

function sortByLikes(){
    let sortedArray = people.sort((b, a) => b.likes - a.likes);
    
}