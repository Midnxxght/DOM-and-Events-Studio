// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load',function(){
    

    let upButtom = this.document.getElementById("up");
    let downButtom = this.document.getElementById("down");
    let leftButtom = this.document.getElementById("left");
    let rightButton = this.document.getElementById("right");

    let takeoffButtom = this.document.getElementById("takeoff")

    takeoffButtom.addEventListener("click",function(){
        if(window.confirm("Confirm that the shuttle is ready for takeoff")) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        
        }
    });



    upButtom.addEventListener("click", function(){
    });

});