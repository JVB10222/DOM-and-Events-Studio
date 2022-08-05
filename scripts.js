// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
   let takeoff = document.getElementById("takeoff");
   let flightStatus = document.getElementById("flightStatus");
   let shuttleBackground = document.getElementById("shuttleBackground");
   let shuttleHeight = document.getElementById("spaceShuttleHeight");
   let land = document.getElementById("landing");
   let missionAbort = document.getElementById("missionAbort");
   let rocket = document.getElementById("rocket");

   let rocketY = document.getElementById("rocket").offsetTop;
   let rocketX = document.getElementById("rocket").offsetLeft;
   let up = document.getElementById("up");
   let down = document.getElementById("down");
   let left = document.getElementById("left");
   let right = document.getElementById("right");

   //finding borders of the shuttleBackground
   let rect = shuttleBackground.getBoundingClientRect();
   let rocketPosition = rocket.getBoundingClientRect();
   let rocketPositionX = rocketPosition.x;
   let rocketPositionY = rocketPosition.y;
   

   takeoff.addEventListener("click", event => {
    let response = confirm("Confirm that the shuttle is ready for takeoff");
        if(response){
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "#18324B";
            shuttleHeight.innerHTML = '10,000';
        }
    });

    land.addEventListener("click", event => {
        this.alert("Shuttle is landing, landing gear engaged");
        flightStatus.innerHTML = "Shuttle is landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";

    });

    missionAbort.addEventListener("click", event => {
        let response = this.confirm("Are you sure you want to abort?");
        if(response){
        flightStatus.innerHTML = "Mission aborted";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
        }
    });

    up.addEventListener("click", event => {
        let currentHeight = Number(shuttleHeight.innerHTML.replace(/,/g, ''));
        let newHeight = currentHeight + 10000;
        shuttleHeight.innerHTML = newHeight.toLocaleString("en-US");
        if(rocketY > 0){
            rocketY = rocketY -10;
            this.document.getElementById("rocket").style.top = rocketY + "px";
        }
        
    });

    down.addEventListener("click", event => {
        let currentHeight = Number(shuttleHeight.innerHTML.replace(/,/g, ''));
        let newHeight = currentHeight - 10000;
        shuttleHeight.innerHTML = newHeight.toLocaleString("en-US");

        if(rocketY <= shuttleBackground.clientHeight - rocket.clientHeight){
            rocketY = rocketY + 10;
            this.document.getElementById("rocket").style.top = rocketY + "px";
        }  
        
    });

    left.addEventListener("click", event => {
        if(rocketX > 0){
            rocketX = rocketX - 10;
            this.document.getElementById("rocket").style.left = rocketX + "px";
        }
    });

    right.addEventListener("click", event => {
        if(rocketX < shuttleBackground.clientWidth - rocket.clientWidth){
            rocketX = rocketX + 10;
            this.document.getElementById("rocket").style.left = rocketX + "px";
        }
    });


})