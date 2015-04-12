
$(function () {

    
    var ctx = $("#mychart").get(0).getContext("2d");
  
   
    var data = {
        labels: ["Pace", "Shooting", "Passing", "Dribbling", "Defending", "Heading"],
        datasets: [
            {
                label: "C.Ronaldo",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "white",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [98, 97, 87, 98, 54, 92]
            },
            {
                label: "Lionel.Messi",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "#AA0000",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [97, 96, 92, 99, 52, 77]
            }
        ]
    }
    //This will get the first returned node in the jQuery collection.
    var myChart = new Chart(ctx).Radar(data, {
        pointLabelFontSize: 15,
        pointLabelFontColor: "#FF5511",
        pointLabelFontStyle: "bolder",
        scaleLineWidth: 2,
        scaleLineColor: "rgba(0,0,0,.1)"
        
    });
    
    console.log("123");

});