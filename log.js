const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dailyViewContainer = document.getElementById('daily-view-container');

let daysOfWeek = []
for (let i = 0; i < days.length; i++){
    const day = days[i];

    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;

    dailyViewContainer.appendChild(dayElement);
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

    // clears selected file
    fileInput.value = '';
})

function addNewDailyLog(day){
    const dayIndex = days.indexOf(day);

    const logElement = document.createElement('div');
    logElement.classList.add('log')

    const logHeader = document.createElement('h2');
    logHeader.textContent = 'Scrambled Eggs';
    logElement.appendChild(logHeader);

    const logUL = document.createElement('ul');
    logUL.style.listStyleType = 'none';
    logUL.style.textAlign = 'left';

    const firstItem = document.createElement('li');
    const numCalories = 1520;
    firstItem.textContent = 'Calories: ' + numCalories;
    logUL.appendChild(firstItem);

    logElement.appendChild(logUL);
    daysOfWeek[dayIndex].appendChild(logElement);
}

function toggleDrawer() {
    const drawerContainer = document.getElementById('drawerContainer');
    const openDrawerButton = document.getElementById('openDrawerButton');
    const isOpen = drawerContainer.style.right === '0px';

    drawerContainer.style.right = isOpen ? '-500px' : '0';
    openDrawerButton.style.right = isOpen ? '-50px' : '450px'; /* Adjusted value to keep the button on the screen */
}

function closeDrawer() {
    document.getElementById('drawerContainer').style.right = '-500px';
    document.getElementById('openDrawerButton').style.right = '-50px';
}
