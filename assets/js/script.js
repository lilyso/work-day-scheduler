// Current day display
$("#currentDay").append(moment().format("dddd, MMMM Do"));

// Save button event & save values into local storage
var rowVal;
var buttonTime;
var saved;
$(".save-button").on("click", function (e) {
  e.preventDefault();
  buttonTime = $(this).data("time");
  rowVal = $(`#time${buttonTime}`).val();
  saved = localStorage.getItem("input");
  if (!saved) {
    saved = [];
  } else {
    saved = JSON.parse(saved);
  }
  saved[parseInt(buttonTime)] = rowVal;
  localStorage.setItem("input", JSON.stringify(saved));
});
var timeNow = parseInt(moment().format("H"));
var rowTime;
saved = localStorage.getItem("input");
if (saved) {
  saved = JSON.parse(saved);
}

/* Timeblock is color coded to indicate whether it is in the past, present, or future.
If user has saved added an note/appointment previously, it will be retrived from local storage */
$(".block-time").each(function () {
  rowTime = parseInt($(this).data("time"));
  if (rowTime === timeNow) {
    $(`#time${rowTime}`).addClass("present");
  } else if (rowTime < timeNow) {
    $(`#time${rowTime}`).addClass("past");
  } else {
    $(`#time${rowTime}`).addClass("future");
  }
  if (saved) {
    if (saved[rowTime]) {
      $(`#time${rowTime}`).val(saved[rowTime]);
    }
  }
});
