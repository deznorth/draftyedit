const express = require('express');
const app = module.exports = express();
const morgan = require('morgan');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const PORT = dev ? 5000 : process.env.PORT;

app.use(express.static(path.resolve('build')));

if(dev){
    app.use(morgan('dev'));
} else {
    app.disable('x-powered-by');
    app.use(morgan('common'));
}

app.get('*', (req,res) => {
    res.sendFile(path.resolve('build', 'index.html'));
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else if(dev){
        console.log("=== Development ===\nServer successfuly started!\nGOTO http://localhost:%s",PORT);
    } else {
        console.log("=== Production ===\nServer successfuly started\nGOTO http://medit.davidr.info/");
    }
});