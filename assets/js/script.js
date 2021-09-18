// Current day display
$("#currentDay").append(moment().format("dddd, MMMM Do"));

// if textarea value does not equal null append content to textarea and save to local storage
// if time does not equal current time or time in past dark colour & opacity textarea 0.5-75
// if current time opacity 100% and bright colour
//if time in future opacity 100% and dark colour

var sixPm = $(".6pm").text();
console.log(sixPm);

var currentTime = moment().format("H");
console.log(currentTime);

function momentBlock() {
  if (sixPm !== currentTime) {
    console.log("no");
  }
}

momentBlock();

// onclick
