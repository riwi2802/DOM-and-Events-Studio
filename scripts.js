// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function () {
    const flightStatus = document.getElementById('flightStatus');
    const takeOffButton = document.getElementById('takeoff');
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
});