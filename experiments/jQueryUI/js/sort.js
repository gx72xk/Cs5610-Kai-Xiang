var stats = [
 { "name": "Lebron James", "MIN": "36.8", "PTS": 26.0, "FG%": 49.2, "3P%": 34.5, "REB": 5.5, "AST": 7.4, "STL": 1.5 },
{ "name": "James Harden", "MIN": "36.6", "PTS": 27.7, "FG%": 45.7, "3P%": 39.0, "REB": 5.7, "AST": 6.8, "STL": 2.0 },
{ "name": "Stephen Curry", "MIN": "33.2", "PTS": 23.6, "FG%": 48.1, "3P%": 39.9, "REB": 4.7, "AST": 7.9, "STL": 2.2 },
{ "name": "Anthony Davis", "MIN": "35.8", "PTS": 24.5, "FG%": 55.1, "3P%": 11.1, "REB": 10.3, "AST": 1.7, "STL": 1.5 },
{ "name": "Marc Gasol", "MIN": "33.9", "PTS": 18.3, "FG%": 49.1, "3P%": 16.7, "REB": 8.1, "AST": 3.7, "STL": 0.9 },
]
var flag = false;
function sortbyname(key) {
    $("#tbody").empty();
    
    if (flag == false) {
        flag = true;
    }
    else {
        flag = false;
    }
    stats.sort(function (a, b) {
       
        if (a[key]> b[key]) {
            return flag ? 1 : -1;
        }
        if (a[key] < b[key]) {
            return flag ? -1 : 1;
        }
        else { return 0;}

    })
    load();

}  


function load() {
    for (i in stats) {
        var tr = $("<tr>")
        for (j in stats[i]) {
            var td = $("<td>");
            td.append(stats[i][j]);
            tr.append(td);
        }
        var tb = $("#tbody");
        tb.append(tr);
    }
}
load()