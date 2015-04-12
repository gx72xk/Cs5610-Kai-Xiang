var timer = function () {
    var utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
    var mytime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    var london = new Date(utc + (3600000 * 1)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    var boston = new Date(utc + (3600000 * -4)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    var beijing = new Date(utc + (3600000 * 8)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    // var hours = date.getHours();
    //  var mins = date.getMinutes;
    // console.log(hours,mins)
    $("#current-time").text(mytime);
    $("#beijing-time").text(beijing);
    $("#london-time").text(london)
    $("#boston-time").text(boston)


};


setInterval(timer);