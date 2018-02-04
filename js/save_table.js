var fs = require('fs');
var table = require('./parsing_table.js')

fs.writeFile("test.txt", JSON.stringify(table.bigTable()), function(err) {
    if(err) {
        return console.log(err);
    }
});