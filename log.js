const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dailyViewContainer = document.getElementById('daily-view-container');

let daysOfWeek = []
for (let i = 0; i < days.length; i++){
    const day = days[i];

    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    // dayElement.textContent = day;

    const textDiv = document.createElement('div');
    textDiv.style.flex = '1';
    textDiv.textContent = day;

    const outterDayContainer = document.createElement('div')
    outterDayContainer.classList.add('outer-day')
    outterDayContainer.appendChild(textDiv);
    outterDayContainer.appendChild(dayElement);

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
    logHeader.textContent = 'Scrambled Eggs';
    logElement.appendChild(logHeader);

    const logUL = document.createElement('ul');
    logUL.style.listStyleType = 'none';
    logUL.style.textAlign = 'left';

    const firstItem = document.createElement('li');
    firstItem.textContent = 'Calories: ' + 1520;
    logUL.appendChild(firstItem);
    const secondItem = document.createElement('li');
    secondItem.textContent = 'Protein: ' + 68;
    logUL.appendChild(secondItem);

    logElement.appendChild(logUL);
    daysOfWeek[dayIndex].appendChild(logElement);


    // test code for now to add week log
    const date = Date()
    const weekContainer = document.getElementById('weekly-bar');
    const weekElement = document.createElement('button');
    weekElement.classList.add('week-log');
    weekElement.textContent = 'Week of 11/18/23';
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
