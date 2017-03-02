const assert = require('assert');
const main = require('../app.js');

describe("Main Function Tests", function(){
    it("Should existis in main context", function(){
        assert.doesNotThrow(() => {
            let mainExists = require('../app.js');
        });    
    });
    it("Should return welcome message when called", function(){
        let name = 'Mateusz';
        let result = main.welcome(name);

        assert.equal(result, "Hello Mateusz");
    });
});