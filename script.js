
$(document).ready(function () {

$("#currentDay").text(dayjs().format("hh:mm:ss"));



$(".time-block").each(function (){

  var hours = $(this).attr("id").split("-")[1];
  var currentHour = dayjs().format("hh");

  if(currentHour == hours){
    $(this).addClass("present");
  }
  if(currentHour < hours){
    $(this).addClass("future");
  }
  if(currentHour > hours){
    $(this).addClass("past");
  }
})



function storeEvent(){
  $(".saveBtn").on("click", function(){
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val()); 
  })
}


function loadEvents(){
  $("textarea").each(function(){
    var timebloackID = $(this).parent().attr("id");
    var savedEvent = localStorage.getItem(timebloackID);

    if(savedEvent !== null){
      $(this).val(savedEvent);
    }
  });
}

storeEvent();
loadEvents();


});
