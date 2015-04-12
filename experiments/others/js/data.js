
$(function () {

    
    var ctx = $("#mychart").get(0).getContext("2d");
  
   
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","Novermber","December"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [65, 59, 90, 81, 56, 55, 40,35,30,27,20,19]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [28, 48, 40, 19, 96, 27, 100,80,56,77,89,90]
            }
        ]
    }
    //This will get the first returned node in the jQuery collection.
    var myChart = new Chart(ctx).Line(data, {
        pointLabelFontSize: 15,
        pointLabelFontColor: "#FF5511",
        pointLabelFontStyle: "bolder",
        scaleLineWidth: 2,
        scaleLineColor: "rgba(0,0,0,.1)"
        
    });
    
  
});