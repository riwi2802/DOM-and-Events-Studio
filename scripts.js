// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function () {
    const takeOffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing')

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const abortMission = document.getElementById('missionAbort');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');

    const rocket = document.getElementById('rocket');


    takeOffButton.addEventListener('click', function() {
        const result = window.confirm('Confirm that the shuttle is ready for take off.'); 
        if (result) {
            flightStatus.innerHTML = 'Shuttle in flight!';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = "10000"

        }

    })

    landButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerText = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = '#34ff70';
        shuttleHeight.innerHTML = "0"
    })

    abortMission.addEventListener("click", function() {
        const result = window.confirm('Confirm that you want to abort the mission.'); 
        if (result) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = "0";
        }
    })

    left.addEventListener("click", function() {
        rocket.style.left += '-10px';
    })

    right.addEventListener("click", function() {
        rocket.style.right += '+10px';
    })

    up.addEventListener("click", function() {
        const newHeight = (parseInt(shuttleHeight.innerText) + 10000);
        shuttleHeight.innerText = newHeight;
    })
    down.addEventListener("click", function() {
        const newHeight = (parseInt(shuttleHeight.innerText) - 10000);
        shuttleHeight.innerText = newHeight;
    })


});