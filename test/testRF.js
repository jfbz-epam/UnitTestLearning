const { assert, expect } = require("chai");
describe('rewire test', () => {
  context('test with FS', () => {
    it('test readfile', () => {
      var rewire = require("rewire");
      var myModule = rewire("./RF");
      myModule.__set__({
        path: "/the/disk"
      });
      myModule.readSomethingFromFileSystem(function (err, data) {
        console.log(data); // = Success!
      })
    })
  })
})

