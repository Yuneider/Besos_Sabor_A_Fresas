document.addEventListener('DOMContentLoaded',function () {
    
    const body = document.getElementById("body");
    const header = document.getElementById("header");
    const mission = document.getElementById("mission");
    const vision = document.getElementById("vision");

    mission.addEventListener('mouseenter',EnterMission);
    mission.addEventListener('mouseleave',LeaveMission);
    vision.addEventListener('mouseenter',EnterVision);
    vision.addEventListener('mouseleave',LeaveVision);

    var moveUp, moveDown, head, info;

    const enterColor = "rgba(198, 191, 209, 0.8)";
    const enterBorder = "5px solid #B5AAC7";
    const enterHeight = "60vh";
    const enterWidth = "40vw";
    const leaveColor = "rgba(198, 191, 209, 0.3)";
    const leaveBorder = "5px dashed #BDB7C7";
    const leaveHeight = "40vh";
    const leaveWidth = "30vw";

    function EnterMission() {
        head = 40;
        info = 60;
        moveUp = setInterval(HeaderUp,15);
        mission.style.background = enterColor;
        mission.style.border = enterBorder;
        mission.style.height = enterHeight;
        mission.style.width = enterWidth;
    }

    function LeaveMission() {
        head = 30;
        info = 70;
        moveDown = setInterval(HeaderDown,15);
        mission.style.background = leaveColor;
        mission.style.border = leaveBorder;
        mission.style.height = leaveHeight;
        mission.style.width = leaveWidth;
    }

    function EnterVision() {
        head = 40;
        info = 60;
        moveUp = setInterval(HeaderUp,15);
        vision.style.background = enterColor;
        vision.style.border = enterBorder;
        vision.style.height = enterHeight;
        vision.style.width = enterWidth;
    }

    function LeaveVision() {
        head = 30;
        info = 70;
        moveDown = setInterval(HeaderDown,15);
        vision.style.background = leaveColor;
        vision.style.border = leaveBorder;
        vision.style.height = leaveHeight;
        vision.style.width = leaveWidth;
    }

    function HeaderUp() {
        if(head != 30 && info != 70){
            head = head-0.5;
            info = info+0.5;
            body.style.gridTemplateRows = head+"vh "+info+"vh";
            header.style.gridTemplateRows = head+"vh";
        }else{
            body.style.gridTemplateRows = "30vh 70vh";
            clearInterval(moveUp);
        }
    }

    function HeaderDown() {
        if(head != 40 && info != 60){
            head = head+0.5;
            info = info-0.5;
            body.style.gridTemplateRows = head+"vh "+info+"vh";
            header.style.gridTemplateRows = head+"vh";
        }else{
            body.style.gridTemplateRows = "40vh 60vh";
            clearInterval(moveDown);
        }
    }

});