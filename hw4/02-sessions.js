const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Add your code below

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    
}));

app.get('*', (req, res) => {
    // Add your code below
    var urls = req.session.route;
    var response;
    if(!urls) {
        req.session.route = [req.originalUrl];
        response  = "Currently on route :" +" " +  req.originalUrl + "<br/>";
        response += "Welcome to "+req.protocol + " " + "://" + req.get('host') + req.originalUrl ;
        
    }
    else {
        response  = "Currently on route :" +  req.originalUrl + "</br>" + "</br>Previously Visited :" + " ";
        req.session.route.push(req.originalUrl);
    }   

    for(routeurl in urls) {
        response += "<br/>" + urls[routeurl];
    }

    res.send(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
