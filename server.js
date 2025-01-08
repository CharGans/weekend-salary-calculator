const express = require('express');

const app = express();

const port = process.env.PORT || 5001;

app.use(express.static('server/public'));

app.listen(port,() => {
    console.log(`listen to port: ${port}`);
});

//having trouble getting my server to work
//when i open http://localhost:5001 it displays "Cannot GET /"
//i think i might be missing somthing 