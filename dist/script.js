const room = document.getElementById("room");
const btns = document.querySelectorAll("button");
let isStandard = false;
let isUpRight = false;
let isUpLeft = false;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const classBtn = btn.className;
    switch (classBtn) {
      case "up-right":
        isStandard = false;
        isUpRight = true;
        isUpLeft = false;
        room.style.transformOrigin = "left";
        setTimeout(() => {
          room.style.transform = "translatey(12%) rotate(-4deg)";
        }, 100);
        break;
      case "down-right":
        isStandard = false;
        isUpRight = false;
         if (isUpLeft) {
          return;
        }
        room.style.transform = "translatey(11%) rotate(0)";
        break;
      case "up-left":
        isStandard = false;
        isUpLeft = true;
        isUpRight = false;
        room.style.transformOrigin = "right";
        setTimeout(() => {
          room.style.transform = "translatey(11%) rotate(3deg)";
        }, 100);
        break;
      case "down-left":
        isUpLeft = false;
        if (isUpRight) {
          return;
        }
        if (isStandard) {
           room.style.transformOrigin = "right";
          room.style.transform = "translatey(-7%) rotate(-3deg)";
        }
        isStandard = false;
        room.style.transform = "translatey(11%) rotate(0)";
        break;
      case "standard":
        isStandard = true;
        isUpLeft = false;
        isUpRight = false;
         room.style.transform = "translatey(-3%) rotate(0)";
        break;
      case "down-all":
        isStandard = false;
        room.style.transform = "translatey(11%) rotate(0)";
        break;
    }
  });
})