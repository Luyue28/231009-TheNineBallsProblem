const ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const userInput = window.prompt('Select the oddball [0-8]', 3);
ballArray[userInput] = 1.2;
displayBalls();
firstWeighting();
secondWeighting();
addBorder();

/**
 * Display 9 balls on the screen
 */
function displayBalls() {
    for (let i = 0; i < ballArray.length; i++) {
        const ball = document.createElement('div');
        ball.innerHTML = i;
        if (i != userInput) {
            ball.className = 'ball column box m-4 has-background-primary-light';
        } else {
            ball.className = 'ball column box m-4 has-background-primary';
        }
        document.getElementById('ball-list').appendChild(ball);
    }
}

/**
 * First Weighting
 * @returns an array with oddball inside
 */
function firstWeighting() {
    document.getElementById('left-1').innerHTML = '[0, 1, 2]';
    document.getElementById('right-1').innerHTML = '[3, 4, 5]';
    const groupOne = ballArray[0] + ballArray[1] + ballArray[2];
    const groupTwo = ballArray[3] + ballArray[4] + ballArray[5];
    let oddArray = [];
    if (groupOne == groupTwo) {
        document.getElementById('result-1').innerHTML = 'balanced';
        document.getElementById('conclusion-1').innerHTML = 'oddball must be in [6, 7, 8]';
        oddArray = [6, 7, 8];
    } else if (groupOne > groupTwo) {
        document.getElementById('result-1').innerHTML = 'left is heavier';
        document.getElementById('conclusion-1').innerHTML = 'oddball must be in [0, 1, 2]';
        oddArray = [0, 1, 2];
    } else {
        document.getElementById('result-1').innerHTML = 'right is heavier';
        document.getElementById('conclusion-1').innerHTML = 'oddball must be in [3, 4, 5]';
        oddArray = [3, 4, 5];
    }
    return oddArray;
}

/**
 * Second Weighting
 * @returns the index of the heaviest ball
 */
function secondWeighting(){
    const oddArr = firstWeighting();
    let heaviest = 0;
    document.getElementById('left-2').innerHTML = `[${oddArr[0]}]`;
    document.getElementById('right-2').innerHTML = `[${oddArr[1]}]`;
    if(ballArray[oddArr[0]] == ballArray[oddArr[1]]){
        document.getElementById('result-2').innerHTML = 'balanced';
        document.getElementById('conclusion-2').innerHTML = `oddball is [${oddArr[2]}]`;
        heaviest = oddArr[2];
    }else if(ballArray[oddArr[0]] > ballArray[oddArr[1]]){
        document.getElementById('result-2').innerHTML = 'left is heavier';
        document.getElementById('conclusion-2').innerHTML = `oddball is [${oddArr[0]}]`;
        heaviest = oddArr[0];
    }else{
        document.getElementById('result-2').innerHTML = 'right is heavier';
        document.getElementById('conclusion-2').innerHTML = `oddball is [${oddArr[1]}]`;
        heaviest = oddArr[1];
    }
    return heaviest;
}

/**
 * Add a border to the heaviest ball
 */
function addBorder(){
    const theBall = secondWeighting();
    const balls = document.getElementById('ball-list').children;
    for(let i = 0; i < balls.length; i++){
        if(theBall == i){
            balls[i].className += ' has-border-primary-dark';
        }
    }
}
