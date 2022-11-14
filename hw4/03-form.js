const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
var path = require('path');

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
    res.end();
});

app.post('/submit', function (req, res) {
    var name = "Name :" +" " +req.body.name;
    var email =   "</br>" + "Email :" + req.body.email ;
    var comments = req.body.comments;
    if(comments == ""){
      var commentsRes = "</br>" + "Comments : N/A";
    }
    else {
    commentsRes = "</br>" + "Comments :" + comments ;
    }    
    var newsletter =  req.body.check;
    if(newsletter == "on"){
        var newsletterRes = "</br>" + "Newsletter :" + "Yes , sign me up for the newsletter.";
    }
    else {
      newsletterRes = "</br>" + "Newsletter :" + "No, thank you."
    }    
    res.send(name + "</br>" + email + "</br>" + commentsRes + "</br>" + newsletterRes);
    
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
