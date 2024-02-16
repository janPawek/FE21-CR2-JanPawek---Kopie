let people =[
    {
        name: "test 1",
        likes: 1, 
        img: ""
    },
    {
        name: "test 2",
        likes: 1, 
        img: ""
    },
    {
        name: "test 3",
        likes: 1, 
        img: ""
    },    {
        name: "test 4",
        likes: 1, 
        img: ""
    },    {
        name: "test 5",
        likes: 1, 
        img: ""
    },    {
        name: "test 6",
        likes: 1, 
        img: ""
    },    {
        name: "test 7",
        likes: 1, 
        img: ""
    },    {
        name: "test 8",
        likes: 1, 
        img: ""
    },    {
        name: "test 9",
        likes: 1, 
        img: ""
    }
];

for(let val of people){
    document.getElementById("result").innerHTML += `
    <div class="margin-top: -2" style="border: 2px solid black">
        <img src="${val.img}" width="100%"></img>
            <p>${val.name}</p>
            <p>${val.likes}</p>
            <button class="btn background-color: red mybtn">Like</button>
    </div>
    `;
}

let btns = document.querySelectorAll(".mybtn");

btns.forEach((val, i) => {
    console.log(val, i);
});