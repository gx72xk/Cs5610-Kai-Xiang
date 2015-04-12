$(function () {
    $("#newNote").click(function () {
        newNote();
    })
    $("#save").click(save);
    $("#load").click(load);
    $("#clear").click(clear);
    $("#removeAll").click(removeall);
});
function load() {
    var note = localStorage.getItem("newnotes");
    if (note == null) {
        alert("Nothing");
    }
    else {
        note = JSON.parse(note);
        console.log(note);
        for (var n in note) {
            var newnote = note[n];
            var text = newnote.text;
            newNote(text);
        }
    }
}
function save() {
    var allli = $("li");
    var newNote = [];
    allli.each(function (index, item) {
        var li = $(item);
        var text = li.text();
        var Obj = {
            text: text,
        };
        newNote.push(Obj);
    });
    pStr = JSON.stringify(newNote);
    localStorage.setItem("newnotes", pStr);
}
function newNote(text) {
    var li = $("<li>");
    var content = $("input").val()
    if (content == "") {
        alert("No content!")
    }
    else {
        var text = content
        li
            .html(text)
           // .draggable({ grid: [20, 20] })
        $("ul").append(li)
       
    }
}
function removeall() {
    $("li").remove();
}
function clear() {
    localStorage.removeItem("newnotes");
    $("input").val("");
}
$(function () {

    $("#sortable").sortable();

    $("#sortable").disableSelection();

});

