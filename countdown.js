//BRINGINGING IN ALL THE SEMI-CIRCLES//
const semicircles = document.querySelectorAll(".semi-circle");
//BRINGING IN THE TIMER//
const timer = document.querySelector(".timer")
//TIME INPUT//
const hr = 0;
const min = 0;
const sec = 10;
//CONVERTING OUR TIME INPUT INTO MILLISECONDS//
const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
//SET TIME//
const setTime = hours + minutes + seconds;
//START TIME//
const startTime = Date.now();
//FUTURE TIME//
const futureTime = startTime + setTime;

//LOOPING THE FUNCTION ON LINE 20//
const timerLoop = setInterval(countDownTimer);
//ENVOKING THE FUNCTION//
countDownTimer();
//CREATING THE TIMER FUNCTION//
function countDownTimer() {
    //SETTING THE CURRENT TIME//
    const currentTime = Date.now();
    //SETTING THE REMAINING TIME
    const remainingTime = futureTime - currentTime
    //CREATING OUR ANGLE EQUATION//
    const angle = (remainingTime / setTime) * 360
    //PROGRESS INDICATOR//
    if (angle > 180) {
        semicircles[2].style.display = 'none';
        semicircles[0].style.transform = 'rotate(180deg)';
        semicircles[1].style.transform = `rotate(${angle}deg)`;
        /*IN THIS IF STATEMENT WE ARE SAYING IF THE ANGLE IS GREATER THAN 180 DO NOT DISPLAY THE
        WHITE SEMI-CIRCLE(line 32), ROTATE THE RED SEMI-CIRCLE 180 DEGREES(line 33),
        AND ROTATE THE BLUE SEMI-CIRCLE TO THE VALUE OF THE ANGLE CONST(line 29),
        THAT WE CALCULATED(line 34).*/
    } else {
        semicircles[2].style.display = 'block';
        semicircles[0].style.transform = `rotate(${angle}deg)`;
        semicircles[1].style.transform = `rotate(${angle}deg)`;
        /*IF THE ANGLE IS LESS THAN OR EQUAL TO 180 DEGRESS, 
        THEN WE'LL DISPLAY THE WHITE SEMI-CIRCLE(line 40), 
        THEN WE'LL ALSO ROTATE BLUE(line 41) AND RED(line 42) SEMI-CIRCLES TO
        WHAT EVER VALUE OF THE ANGLED CONST WAS CALCULATED(lines 41 and 42)*/
    }
    //TIMER//
    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    const secs = Math.floor((remainingTime / (1000)) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    timer.innerHTML = `
    <div>${hrs}</div>
    <div class = colon>:</div>
    <div>${mins}</div>
    <div class = colon>:</div>
    <div>${secs}</div>`;
    //5SEC CONDITION//
    if (remainingTime <= 6000) {
        /*IF THE INDICATOR IS LESS THAN OR EQUAL TO 5 SECONDS THEN THE COLOR WILL CHANGE TO RED*/
        semicircles[0].style.backgroundColor = 'red';
        semicircles[1].style.backgroundColor = 'red';
        timer.style.color = 'red';
    }
    //END//
    if (remainingTime < 0) {
        /*TO STOP THE INDICATOR ROTATING WE INVOKE THE CLEAR INTERVAL METHOD,
        BY SAYING IF THE REMAINING TIME IS LESS THAN 0 (line 52), THEN IT MUST STOP WHEN IT REACHES 0 DEGREES
        line 56*/
        clearInterval(timerLoop);
        semicircles[0].style.display = 'none';
        semicircles[1].style.display = 'none';
        semicircles[2].style.display = 'none';
        /*ONCE THE INDICATOR HITS 0 DEGREES AND STOPS, THEN NO SEMI-CIRCLES WILL SHOW(lines 57-59)*/
        timer.innerHTML = `
    <div>00</div>
    <div class = colon>:</div>
    <div>00</div>
    <div class = colon>:</div>
    <div>00</div>`;

        timer.style.color = 'lightgrey';
    }
}