// Current day display
$("#currentDay").append(moment().format("dddd, MMMM Do"));

// console.log(test);

// if textarea value does not equal null append content to textarea and save to local storage
// if time does not equal current time or time in past dark colour & opacity textarea 0.5-75
// if current time opacity 100% and bright colour
//if time in future opacity 100% and dark colour

var rowVal;
var buttonTime;
$(".save-button").on("click", function (e) {
  e.preventDefault();
  buttonTime = $(this).data("time");
  rowVal = $(`#time${buttonTime}`).val();
  localStorage.setItem();
});

var timeNow = parseInt(moment().format("H"));
var rowTime;
$(".block-time").each(function () {
  rowTime = parseInt($(this).data("time"));
  if (rowTime === timeNow) {
    $(`#time${rowTime}`).addClass("present");
  }
  if (rowTime < timeNow) {
    $(`#time${rowTime}`).addClass("past");
  } else if (rowTime > timeNow) {
    $(`#time${rowTime}`).addClass("future");
  }
});
