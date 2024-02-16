let obj = JSON.parse(JSONobj);


const result = document.querySelector(".result");


function createElements(){
    let color;


    result.innerHTML = '';
    obj.forEach((element, index) => {

        if(element.importance < 2){
            color = 'bg-success'
        }else if (element.importance < 4){
            color = 'bg-warning'
        }else{
            color = 'bg-danger'
        }

        result.innerHTML += `
         <div class="mb-4">
            <div class="card" style="background-color: ${element.done? 'green' : 'white'}">
                <div class="d-flex justify-content-between">
                    <span class="btn btn-small btn-info">Task</span>
                    <div class="m-2">
                        <i class="fa-regular fa-bookmark px-2"></i>
                        <i class="fa-solid fa-ellipsis-vertical px-2"></i>
                    </div>
                </div>
                <img src="${element.image}" class="card-img-top img-thumbnail myImg mx-auto" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title ">${element.taskName}</h5>
                    <p class="card-text">${element.description}</p>

                </div>
                <ul class="list-group">
                    <p>Priority Level: <span class="prio btn ${color}">${element.importance}</span> </p>
                    <p>Date: <span class="date">${element.deadline}</span></p>

                </ul>
                <div class="d-flex justify-content-end p-3">
                    <button class="btn btn-danger delete">Delete</button>
                    <button class="btn btn-success ms-3 done">Done</button>
                </div>
            </div>
        </div>
    ` // set event listeners on priority btns
        let priorityBtns = document.querySelectorAll(".prio");
        priorityBtns.forEach((btn, index) =>{
            btn.addEventListener('click', ()=>{
                obj[index].importance < 5 ?  obj[index].importance ++ : obj[index].importance = 0;

                console.log( obj[index].importance)
                createElements();
            })


        })

        //event listeners for done btns

        let doneBtns = document.querySelectorAll('.done');
        doneBtns.forEach((btn, index) => {
            btn.addEventListener('click', ()=>{
                obj[index].done = !obj[index].done
                console.log( obj[index].done);
                createElements()
            })



        })
        let deleteBtns = document.querySelectorAll('.delete');
        deleteBtns.forEach((btn, index) => {
            btn.addEventListener('click', ()=>{
                obj.splice(index, 1);

                createElements()
            })



        })


    })

    //NOTIFICATIONS

    let notification = document.querySelector(".notifications");
    notification.innerHTML = obj.length



}
createElements();

//sorting array

const sortBtn = document.querySelector('.sort');
sortBtn.addEventListener('click', ()=>{
    console.log("hello")
    obj.sort((a, b)=>{
       return b.importance - a.importance
    })
    createElements();
})