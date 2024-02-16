document.addEventListener("DOMContentLoaded", function () {
    const result = document.querySelector("#result");
    const importanceButtons = document.querySelectorAll(".nBtn");
    const sortButton = document.createElement("button");
    sortButton.textContent = "Sort";
    sortButton.classList.add("btn", "btn-primary", "sortBtn");
    document.querySelector("#nav_main p").appendChild(sortButton);

    let tasks = [
        {
            "taskName": "Time for dog agility",
            "description": "Once a week Bruno does his agility workouts",
            "importance": "0",
            "date": "03.05.2024",
            "image": "img/1_dog_agility.jpg"
        },
        {
            "taskName": "Kyra starts Kindergarten",
            "description": "Beginning of a new phase of life: Kyra's 1st day in kindergarten",
            "importance": "0",
            "date": "07.05.2024",
            "image": "img/2_kindergarten.jpg"
    
        },
        {
            "taskName": "Day of Cleaning",
            "description": "Every Wednesday is the day of housework",
            "importance": "0",
            "date": "08.05.2024",
            "image": "img/3_homework.jpg"
    
        }, {
            "taskName": "Thusday is shopping-day",
            "description": "Shop for our weekly groceries at SPAR.",
            "importance": "0",
            "date": "09.05.2024",
            "image": "img/4_shop_weekend.jpg"
    
        }, {
            "taskName": "bruno's veterinarian visit",
            "description": "The rabies vaccination and the tick vaccination are refreshed. He also has to endure dental hygiene.",
            "importance": "0",
            "date": "10.05.2023 afternoon",
            "image": "img/5_dog_doctor.jpg"
    
        }, {
            "taskName": "Restaurant visit",
            "description": "Every two weeks we all visit a restaurant together. Today we go to Melina's favorite burger restaurant.",
            "importance": "0",
            "date": "10.05.2024 evening",
            "image": "img/8_shoping.jpg"
    
        }, {
            "taskName": "Kyra's great love: horses",
            "description": "On Saturday morning Kyra has her riding lesson. Today she has a ride for the first time.",
            "importance": "0",
            "date": "11.05.2023 morning",
            "image": "img/6_riding.jpg"
    
        }, {
            "taskName": "Melina's soccer Tournament",
            "description": "This takes place every year in May. Her goal for this year: top scorer.",
            "importance": "0",
            "date": "11.05.2023 afternoon",
            "image": "img/7_soccer.jpg"
    
        }, {
            "taskName": "Party time",
            "description": "Kyra is celebrating her fourth birthday. Her grandparents, her friends and her uncle will celebrate her.",
            "importance": "0",
            "date": "12.05.2024",
            "image": "img/9_birthday.jpg"
    
        }
    // Add more tasks here...
    ];

    function renderTasks() {
        var taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(function(task) {
            var taskItem = document.createElement('li');
            taskItem.textContent = task.taskName + " (Importance: " + task.importance + ")";
            taskList.appendChild(taskItem);
        });
    }

    importanceButtons.forEach((button, index) => {
        button.addEventListener("click", () => updatePriority(index));
    });

    sortButton.addEventListener("click", () => {
        tasks.sort((a, b) => a.importance - b.importance);
        renderTasks();
    });

    renderTasks();

    function updatePriority(index) {
        if (tasks[index].importance < 5) {
            tasks[index].importance++;
            renderTasks();
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Sample tasks array
    let tasks = [
        { taskName: "Time for dog agility", importance: 2 },
        { taskName: "Kyra starts Kindergarten", importance: 3 },
        { taskName: "Day of Cleaning", importance: 1 }
    ];

    // Function to render tasks
    function renderTasks(tasks) {
        // Assuming tasks is an array of task objects
        var taskList = document.getElementById('task-list');

        // Clear the existing task list
        taskList.innerHTML = '';

        // Loop through the tasks and append them to the task list
        tasks.forEach(function (task) {
            var taskItem = document.createElement('li');
            taskItem.textContent = task.taskName + " (Importance: " + task.importance + ")";
            taskList.appendChild(taskItem);
        });
    }

    // Initial rendering of tasks
    renderTasks(tasks);

    // Button click event handler for sorting tasks
    document.querySelector("button.btn.btn-primary.sortBtn").addEventListener("click", function () {
        // Sort tasks by importance (ascending order)
        tasks.sort(function (a, b) {
            return a.importance - b.importance;
        });

        // Re-render tasks after sorting
        renderTasks(tasks);
    });
});
