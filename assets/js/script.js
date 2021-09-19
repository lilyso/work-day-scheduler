// Current day display
$("#currentDay").append(moment().format("dddd, MMMM Do"));

var rowVal;
var buttonTime;
var saved;
$(".save-button").on("click", function (e) {
  e.preventDefault();
  buttonTime = $(this).data("time");
  rowVal = $(`#time${buttonTime}`).val();
  console.log(rowVal, buttonTime);

  saved = localStorage.getItem("input");
  if (!saved) {
    saved = [];
  } else {
    saved = JSON.parse(saved);
  }
  saved[parseInt(buttonTime)] = rowVal;
  console.log(saved);
  localStorage.setItem("input", JSON.stringify(saved));
});

var timeNow = parseInt(moment().format("H"));
var rowTime;
saved = localStorage.getItem("input");
if (saved) {
  saved = JSON.parse(saved);
}
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
  if (saved) {
    if (saved[rowTime]) {
      $(`#time${rowTime}`).val(saved[rowTime]);
    }
  }
});
