//Setting my global variables
var currentDayInput = $('#currentDay')
var timeBlockInput = $('.timeBlock')
var saveBtn = $('#saveBtn')

//Here i am setting currentDayDisplay as an empty array. That way the time on the page always runs.
currentDayDisplay()

//This is the function for the clock on the page.
function currentDayDisplay() {
  currentDayInput.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}setInterval(currentDayDisplay, 1000)

//This function is for the time slots on the page. It keeps track of the time to appropreatly change the color of the time slot that way the user knows if it it the present, past, or future.
function hourTracker() {
  var currentHour = moment().hour();

  timeBlockInput.each(function () {
    var blockHour = parseInt($(this).attr('id').split('hour')[1]);

    if (blockHour < currentHour) {
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
    }
    else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
      $(this).removeClass('future');
    }
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
  }
})
}
hourTracker();

//Here I am setting the value of each hour in link with localStorage.
$('#hour7').val(localStorage.getItem('hour7'));
$('#hour8').val(localStorage.getItem('hour8'));
$('#hour9').val(localStorage.getItem('hour9'));
$('#hour10').val(localStorage.getItem('hour10'));
$('#hour11').val(localStorage.getItem('hour11'));
$('#hour12').val(localStorage.getItem('hour12'));
$('#hour13').val(localStorage.getItem('hour13'));
$('#hour14').val(localStorage.getItem('hour14'));
$('#hour15').val(localStorage.getItem('hour15'));

//Last I am tying the saveBtn to the input slot. That way the date in the input slot gets saved to localStorage, and the saveBtn actual works.
$("#saveBtn7, #saveBtn8, #saveBtn9, #saveBtn10, #saveBtn11, #saveBtn12, #saveBtn13, #saveBtn14, #saveBtn15").click(function() {
  var saveButtonHour = this.id.split('saveBtn')[1] 
  console.log(saveButtonHour)
  var textArea = ($(this).siblings('#textArea').val())
  localStorage.setItem('hour' + saveButtonHour, textArea);
});