$(function () {
    var currentDate = new Date();
    $(".counter").hide();
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "images/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"

    
    });
  
    $("#button").click(function () {
        var futureDate = $('#datepicker').datepicker("getDate");
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
        console.log(diff);
        var eventname = $('#event').val().toUpperCase();
       if (diff > 0 && eventname!="") {
            var clock = $('.clock').FlipClock(diff, {
                clockFace: 'DailyCounter',
                countdown: true
            });
        
        if ($("h2").length<=0  ) {
            var h2 = $('<h2>');
            h2.append(eventname + " CountDown!").css({
                "padding-top": "10px",
                "margin-bottom": "50px",
                "margin-top": "50px",
                "margin-left": "50px",
                "margin-right": "50px",
                "font-size": "50px",
                "font-weight": "bolder",
            });
            $('.countdown').append(h2).css({
                "color": "#FFBB00",
                "font-family": "Segoe Print",
            });
            $('.counter').show();
        }
        }
        else {
            alert("Please fill in the event name and pick a day in the future!")
        }
        });
    
   
});