const path = require('path');
const scoreModel = require('../models/fileModel.js');
const Promise = require('bluebird');
//const fs = Promise.promisifyAll(require('fs'));



function isScore(filePath){
    if(!undefined){
        let fileName = path.basename(filePath);
        if (fileName.includes('.score')){
            return true;
        }
    }
};

async function loadIntoModel(filePath,fileName){
    try {
        let filenNamePath = path.join(filePath,fileName)
        if(isScore(filenNamePath)){
            console.log(`File Found: ${isScore(filenNamePath)}`);
            console.log(`TypeProper Found: ${isScore(filenNamePath)}`);
            try {
                
            } catch(e) {
                console.log(e)
                throw e;
            }
            
        } else {
            throw "File not exists";
        }
    } 
    catch (e){
        throw e;
    }

}

loadIntoModel('test/testData/','simpleFile.score');

module.exports = {
    isScore: isScore,
    loadIntoModel: loadIntoModel
};