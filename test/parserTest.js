const assert = require('assert');
const fileParser = require('../src/controllers/fileParser.js');

describe('Parser',()=>{
    it('Exists',()=>{
        assert.doesNotThrow(()=>{
            let parserFile = require('../src/controllers/fileParser.js');
        });
    });
    it('Accepts input stream',()=>{
        assert.doesNotThrow(()=>{
            let parsedData = fileParser.parser('testData/','simpleFile.score');
            console.log(parsedData)
            testFileContent =   `FROM local
                                COMMANDS ps -aux
                                TO server1`;
            
            assert.equal(parsedData, testFileContent);
        });
    });
});