const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3001;

app.use(express.static(__dirname + "/public"));
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
routes(app);

app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});
