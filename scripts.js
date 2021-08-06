// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function () {
    const takeOffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing')

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground')
    const shuttleHeight = document.getElementById('spaceShuttleHeight')


    takeOffButton.addEventListener('click', function() {
        const result = window.confirm('Confirm that the shuttle is ready for take off.'); 
        if (result) {
            flightStatus.innerHTML = 'Shuttle in flight!';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = "10,000"

        }

    })

    landButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerText = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = '#34ff70';
        shuttleHeight.innerHTML = "0"
    })
});