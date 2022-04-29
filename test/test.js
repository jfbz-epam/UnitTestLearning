const { assert } = require("chai");

describe('file to be tested', () => {
  context('function to be tested', () => {
/*     before(() => {
        process.stdout.write(`======before\n`); 
    });
    after(() => {
        process.stdout.write(`======after\n`); 
    });
    beforeEach(() => {
        process.stdout.write(`======beforeEach\n`); 
    });
    afterEach(() => {
        process.stdout.write(`======afterEach\n`); 
    }); */
    it('should do something', () => {
      assert.equal(1,1);
    })
    it('should do something else', () => {
      assert.deepEqual({ name : 'joe' },{ name : 'joe'} );
    });
    it('this is a pending test');
  })
  context('another function', () => {
    it('should do something');
  });
});