const assert = require('assert');
const Promise = require('bluebird');
const scoreController = require('../src/controllers/fileModelController.js');


describe("File Model Controller", ()=> {
    it("Exists", ()=>{
        assert.doesNotThrow(()=>{
            let fileModelController = require('../src/controllers/fileModelController.js');
        });
    });
    it("Validates type of file to match 'score'",()=>{
        assert.equal(scoreController.isScore('../test/testData/simpleFile.score'), true);
    });
    it("Loads file into Model",()=>{
        let createdObjectFileModel = scoreController.loadIntoModel('../test/testData/simpleFile.score');
        assert.equal(createdObjectFileModel.from, 'local');
        assert.equal(createdObjectFileModel.command, 'ps -aux');
        assert.equal(createdObjectFileModel.to, 'server1');
    });
});