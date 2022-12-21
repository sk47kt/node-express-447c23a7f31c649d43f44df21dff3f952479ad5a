var express = require('express');
var router = express.Router();

router.use(express.static('src'));

router.get('/', function(req, res){
    fs.readFile('./src/index.html', (err, data) => {
        if(err) throw err;

        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        .write(data)
        .end();
    });
});

module.exports = router;
