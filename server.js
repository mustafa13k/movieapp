/**
 * Created by mustafa on 13/10/16.
 */
var express = require('express'),
    path    = require('path'),
    app     = express();

app.
    use(express.static(path.join(__dirname,'public'))).
    get('*',function(req,res){
        res.sendfile('public/index.html');
    }).
    listen(5000);