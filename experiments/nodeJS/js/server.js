var express = require('express');
var app = express();


var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(__dirname + '/public'));

var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/experiments'
mongoose.connect(connectionString);

var PeopleSchema =new mongoose.Schema({
    conference: String,
    city: String,
    team: String,
    name:String,


}, { collection: 'People' });

var PeopleModel = mongoose.model("PeopleModel", PeopleSchema);





var kobe = 
    {
        name: "Kobe Bryant", picUrl: "https://media.licdn.com/mpr/mpr/p/8/005/095/35f/24f22a9.jpg",
        stats: [
            { season: "08-09", PTS: "26.8", AST: "4.9", REB: "5.2", FG: "46.7%" },
        { season: "09-10", PTS: "27.0", AST: "5.0", REB: "5.4", FG: "45.6%" },
{ season: "10-11", PTS: "25.3", AST: "4.7", REB: "5.1", FG: "45.1%" }


        ],
        video: ""
    }

// method for kobe.html//
app.post("/api/kobe/stats", function (req, res) {
    var obj = req.body;
    kobe.stats.push(obj);
    res.json(kobe);
});

app.put("/api/kobe/stats/:id", function (req, res) {
    kobe.stats[req.params.id] = req.body;
    res.json(kobe);
});

app.get("/api/kobe", function (req, res) {
    res.json(kobe);
});

//method for mongodb.html//

app.get("/api/people", function (req, res) {
    PeopleModel.find(function (err, data) {
        res.json(data);
    });

});

app.get("/api/people/:id", function (req, res) {
    PeopleModel.findById(req.params.id, function (err, data) {
        res.json(data);
    })

});

app.post("/api/people", function (req, res) {
    var people1 = new PeopleModel(req.body);
    people1.save(function(err,doc) {
        PeopleModel.find(function (err, data) {
            res.json(data);
        });
    });
    });

app.delete("/api/people/:id", function (req, res) {
    PeopleModel.findById(req.params.id, function (err, doc) {
        doc.remove() ;
        PeopleModel.find(function (err, data) {
            res.json(data);

        });

    });
});

app.put('/api/people/:id', function (req, res) {
    return PeopleModel.findById(req.params.id, function (err, people) {
        people.conference = req.body.conference;
        people.city = req.body.city;
        people.team = req.body.team;
        people.name = req.body.name;    
        return people.save(function (err) { 
            if (!err) {
                console.log("updated");
                PeopleModel.find(function (err, data) {
                    res.json(data);
                });
            } else {
                console.log(err);
            }
           
        });
    });
});

//app.put('/api/people/:id', function (req, res) {
//    var updateData = new PeopleModel(req.body);
//    var upsertData = updateData.toObject();
//    delete upsertData._id;
//    PeopleModel.update({ _id: updateData.id }, upsertData, { upsert: true }, function (err) {
//        if (!err) {
//            console.log('updated');
//            PeopleModel.find(function (err, data) {
//                res.json(data);

//            });
//        }
//        else {
//            console.log(err);
//        }

//    })
//});



app.get("/process", function (req, res) {
    res.json(process.env);
});


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ipaddress);

