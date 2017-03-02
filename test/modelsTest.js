const assert = require('assert');
const fileModel = require('../src/models/fileModel.js');

describe("fileModel model",()=>{
    it("Should exists", ()=>{
        assert.doesNotThrow(() => {
            let fileModelExists = require('../src/models/fileModel.js');
        }); 
    });
    it("File model can be created", ()=>{
        assert.doesNotThrow(()=>{
            let from = {
                "server1": "fqdn-1"
            };

            let remote = true

            let newFile = new fileModel.scoreFileStructure(from,remote,"NoCommands");
    
            assert.equal(newFile.from, from);
            assert.equal(newFile.to, true);
            assert.equal(newFile.commands, "NoCommands");
        });
    });
});