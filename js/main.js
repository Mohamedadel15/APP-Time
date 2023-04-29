let divHours = document.querySelector(".hours");
let divSecond = document.querySelector(".seconds");
let divMinute = document.querySelector(".minutes");
let divNavOfTimer = document.querySelector(".logo-nav-timer");
let textOfNavTimer = document.querySelectorAll(".logo-nav-timer ul li p");
let navTimer = document.querySelector(".nav-timer");
let strToFinish = document.querySelector(".strToFinish");
let cardOfType = document.querySelector(".timerCard");
let listOfTypeCard = document.querySelectorAll(".timerCard p");
let input = 1;
let countDownDate = new Date().getTime() + input * 24 * 60 * 60 * 1000;
let startTime = document.getElementById("strTimeInput");
let startDate = document.getElementById("strDateInput");
let endDate = document.getElementById("endDateInput");
let endTime = document.getElementById("endTimeInput");
let dateNow = new Date();
let timerContainerHours = document.getElementById("allTimeSecond");
let timerContainerMinute = document.getElementById("allTimeMinute");
let timerContainerSeconds = document.getElementById("allTimeHours");
let timerContainerDays = document.getElementById("allTimeDays");
let textAreaValue = document.querySelector("#textarea");
let messageAboveTimer = document.querySelector(".message");
let positionBAsic = document.getElementById("radioPosition");
let positionTop = document.getElementById("radio-static");
let positionBottom = document.getElementById("radioFloating");
let divOfContainerTimeSection = document.querySelector(
  ".container-timer-section"
);

// set interval
setInterval(timeNow, 1000);
setInterval(changeRemineNumber, 1000);

// button to scroll up

let btn = document.querySelector("#scrollTop");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`the main hight equall ${window.innerHeight}`);
  if (window.scrollY > 560) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// --------------------------------------------------------
function timeNow() {
  let timeNow = new Date();
  let hours = (divHours.innerHTML = timeNow.getHours());
  divMinute.innerHTML = timeNow.getMinutes();
  divSecond.innerHTML = timeNow.getSeconds();
  if (hours >= 12) {
    document.querySelector(".moment").innerHTML = "bm";
  } else {
    document.querySelector(".moment").innerHTML = "am";
  }

  returnReminder(timeNow);
  changeTitleTimer();
}

divNavOfTimer.addEventListener("mouseover", () => {
  textOfNavTimer.forEach((e) => {
    e.classList.toggle("activehidden");
  });
});
divNavOfTimer.addEventListener("mouseout", () => {
  textOfNavTimer.forEach((e) => {
    e.classList.toggle("activehidden");
  });
});
strToFinish.addEventListener("click", () => {
  cardOfType.classList.toggle("activeNone");
  navTimer.classList.toggle("overVisisble");
});



function returnReminder(timeNow) {
  let digitalTime = new Date(`${endDate.value} ${endTime.value}`);
  let milisecondTime = digitalTime.getTime();
  let resultOfTime = milisecondTime - timeNow;
  timerContainerSeconds.innerHTML = (resultOfTime / 1000).toFixed(0) - 1;
  timerContainerMinute.innerHTML = (resultOfTime / 1000 / 60).toFixed(0) - 1;
  timerContainerHours.innerHTML =
    (resultOfTime / 1000 / 60 / 60).toFixed(0) - 1;
  timerContainerDays.innerHTML =
    (resultOfTime / 1000 / 60 / 60 / 24).toFixed(0) - 1;
}

function changeTitleTimer() {
  messageAboveTimer.innerHTML = textAreaValue.value;
}

function deletePosition() {
  // divOfContainerTimeSection.style.position="absolute"
  divOfContainerTimeSection.classList.remove("top botton");
}
positionBAsic.addEventListener("click", () => {
  divOfContainerTimeSection.classList.remove("botton");
  divOfContainerTimeSection.classList.remove("top");
});

positionTop.addEventListener("click", () => {
  divOfContainerTimeSection.classList.remove("botton");
  divOfContainerTimeSection.classList.add("top");

  // divOfContainerTimeSection.classList.
});
positionBottom.addEventListener("click", () => {
  divOfContainerTimeSection.classList.remove("top");
  divOfContainerTimeSection.classList.add("botton");
});

listOfTypeCard.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".timerCard").classList.add("activeNone")
    document.querySelector(
      ".mainSpanOfTimer"
    ).innerHTML = `${e.textContent}<span class="dropDown">▽</span>`;
    
    // e.classList.add("active")
    console.log(e.classList);
    switch (e.id) {
      case "Start_To_Finish_Timer_Section":
        document
          .querySelector(".remainingTimeCounter")
          .classList.add("activeNone");
          document.querySelector(".startToFinishNumberCounter").classList.add("activeNone")
        // document.querySelector(".remainingTimeCounter").classList.add("")
        document.querySelector(".calcTime").classList.remove("activeNone");
        document
          .querySelector(".container-ramaining-period-div")
          .classList.add("activeNone");
          document.querySelector(".container-count-down-div").classList.add("activeNone")
          
        document
          .querySelector(".container-start-to-finish-div")
          .classList.remove("activeNone");

        break;
      case "Remaining_Time_Counter":
        // document.querySelector(".remainingTimeCounter").classList.add("")
        document.querySelector(".calcTime").classList.add("activeNone");
        document.querySelector(".startToFinishNumberCounter").classList.add("activeNone")

        document
          .querySelector(".remainingTimeCounter")
          .classList.remove("activeNone");
        document
          .querySelector(".container-start-to-finish-div")
          .classList.add("activeNone");
          document.querySelector(".container-count-down-div").classList.add("activeNone")
        document
          .querySelector(".container-ramaining-period-div")
          .classList.remove("activeNone");

        break;
      case "Start_To_Finish_number_counter":
        document.querySelector(".calcTime").classList.add("activeNone");
        document.querySelector(".remainingTimeCounter").classList.add("activeNone")
        
        document
          .querySelector(".startToFinishNumberCounter")
          .classList.remove("activeNone");
        document
          .querySelector(".container-start-to-finish-div")
          .classList.add("activeNone");
          document
          .querySelector(".container-ramaining-period-div")
          .classList.add("activeNone");
          document.querySelector(".container-count-down-div").classList.remove("activeNone")
      break
      default:
        break;
    }
  });
});

document.getElementById("remainingNUmber").addEventListener("input", (e) => {
  input = e.target.value; //10
  let milsecondForInputValue = input * 24 * 60 * 60 * 1000;
  countDownDate = new Date().getTime() + milsecondForInputValue;
});
function changeRemineNumber() {
  let timeleft = countDownDate - new Date();
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  document.getElementById("allTimeHours1").textContent = seconds;
  document.getElementById("allTimeDays1").textContent = days;
  document.getElementById("allTimeSecond1").textContent = hours;
  document.getElementById("allTimeMinute1").textContent = minutes;
  document.querySelector(
    ".container-ramaining-period-div .message"
  ).textContent = textAreaValue.value;
}

document.getElementById("listTime").addEventListener("change", (e) => {
  document.querySelectorAll(".altimeRemain div").forEach((e) => {
    e.classList.remove("activehidden");
  });
  switch (e.target.value) {
    case "Hours":
      document
        .querySelector(".altimeRemain .days")
        .classList.add("activehidden");
      break;
    case "Minutes":
      document
        .querySelector(".altimeRemain .days")
        .classList.add("activehidden");
      document
        .querySelector(".altimeRemain .hours")
        .classList.add("activehidden");
      break;
    case "Seconds":
      document
        .querySelector(".altimeRemain .days")
        .classList.add("activehidden");
      document
        .querySelector(".altimeRemain .hours")
        .classList.add("activehidden");
      document
        .querySelector(".altimeRemain .minutes")
        .classList.add("activehidden");

      break;
  }
});


let startCounter = document.getElementById("stRcounterNUmber")
startCounter.addEventListener("input",()=>{
  seconds = startCounter.value
})
let seconds = startCounter.value;


let timer = setInterval(upTimer, 1000);

function upTimer() {
++seconds;
if(seconds>document.getElementById("enDcounterNUmber").value){
  document.querySelector(".countFalse").classList.remove("activeNone")
  return;
}else{
  document.querySelector(".countFalse").classList.add("activeNone")

}
document.querySelector(".container-count-down-div .message").innerHTML=textAreaValue.value
document.getElementById("counterNumber").innerHTML = seconds;
}