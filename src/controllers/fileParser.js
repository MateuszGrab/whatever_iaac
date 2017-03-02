const Transform = require('stream').Transform;
const process = require('process');
const fs = require('fs');
const path = require('path');

function parser(filePath,fileName){
    let parser = new Transform();
    
    parser._transform = function(data, encoding, done) {
        this.push(data);
        done();
    };
    
    let data = '';
    
    let fileStream = fs.createReadStream(path.join(filePath,fileName));
    fileStream
    .setEncoding('utf8')
    .pipe(parser)
    .pipe(process.stdout)
    .push(data);

    return parser.data;
};

module.exports = {
    parser: parser
}




