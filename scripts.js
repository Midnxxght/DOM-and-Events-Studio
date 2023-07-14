// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load',function(){
    let status = this.document.getElementById("flightStatus");

    let upButtom = this.document.getElementById("up");
    let downButtom = this.document.getElementById("down");
    let leftButtom = this.document.getElementById("left");
    let rightButton = this.document.getElementById("right");

    let takeoffButtom = this.document.getElementById("takeoff")

    takeoffButtom.addEventListener("click",function(){
        if(window.confirm("Confirm that the shuttle is ready for takeoff")) {
        status = "Shuttle in Flight";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        }
    });



    upButtom.addEventListener("click", function(){
    });

});