const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dailyViewContainer = document.getElementById('daily-view-container');
const listOfNutrition = ['Calories', 'Saturated fats', 'Protein', 'Added Sugars']
const listOfFoods = ['Scrambled Eggs', 'Ribeye Steak', 'Pasta and Meatballs', 'Fried rice', 'Salmon', 'Cereal', 'Curry', 'Sandwich', 'Ham and Eggs'];

let daysOfWeek = []
for (let i = 0; i < days.length; i++){
    const day = days[i];

    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    // dayElement.textContent = day;

    const textDiv = document.createElement('div');
    textDiv.style.flex = '1';
    textDiv.textContent = day;

    // const daySummaryDiv = document.createElement('div'){
    //     day.
    // }

    const outterDayContainer = document.createElement('div')
    outterDayContainer.classList.add('outer-day')
    outterDayContainer.appendChild(textDiv);
    outterDayContainer.appendChild(dayElement);
    if (i % 2 === 0){
        outterDayContainer.style.backgroundColor = 'floralwhite';
        dayElement.style.backgroundColor = 'floralwhite';
    }

    dailyViewContainer.appendChild(outterDayContainer);
    daysOfWeek.push(dayElement);
}

const fileInput = document.getElementById('fileInput');

document.querySelector('.custom-file-upload').addEventListener('click', function() {
    fileInput.change();
});
fileInput.addEventListener('change', function (event){
    const file = event.target.files[0];
    if (!file){
        return;
    }

    addNewDailyLog("Monday");
    addNewDailyLog("Tuesday");

    // clears selected file
    fileInput.value = '';
})

function addNewDailyLog(day){
    const dayIndex = days.indexOf(day);

    const logElement = document.createElement('div');
    logElement.classList.add('log')

    const logHeader = document.createElement('h3');
    logHeader.textContent = listOfFoods[Math.floor(Math.random() * listOfFoods.length)];
    logElement.appendChild(logHeader);

    const logUL = document.createElement('ul');
    logUL.style.listStyleType = 'none';
    logUL.style.textAlign = 'left';

    for (let i = 0; i < listOfNutrition.length; i++) {
        const item = document.createElement('li');
        item.textContent = listOfNutrition[i] + ': ' + Math.floor(Math.random() * 1000);
        logUL.appendChild(item);
    }

    logElement.appendChild(logUL);
    daysOfWeek[dayIndex].appendChild(logElement);
}

function addNewWeek(weekName){
    const weekContainer = document.getElementById('weekly-bar');
    const weekElement = document.createElement('button');
    weekElement.classList.add('week-log');
    weekElement.textContent = 'Week of ' + weekName;
    weekContainer.appendChild(weekElement);
}

function toggleDrawer() {
    const drawerContainer = document.getElementById('drawerContainer');
    const openDrawerButton = document.getElementById('openDrawerButton');
    const isOpen = drawerContainer.style.right === '0px';

    drawerContainer.style.right = isOpen ? '-500px' : '0';
    openDrawerButton.style.right = isOpen ? '-65px' : '435px'; /* Adjusted value to keep the button on the screen */
}

function closeDrawer() {
    document.getElementById('drawerContainer').style.right = '-500px';
    document.getElementById('openDrawerButton').style.right = '-65px';
}

// make some sample data
function initializeSampleData(){
    const sampleWeeksList = ['10/13/23', '10/20/23', '10/27/23', '11/2/23', '11/9/23', '11/16/23', '11/23/23', '11/30/23', '12/6/23', '12/13/23', '12/20/23'];
    for (let i = 0; i < days.length; i ++){
        for (let j = 0; j < (Math.floor(Math.random() * 5) + 3); j++){
            addNewDailyLog(days[i]);
        }
    }
    for (let i = 0; i < sampleWeeksList.length; i++){
        addNewWeek(sampleWeeksList[i]);
    }
}
initializeSampleData();