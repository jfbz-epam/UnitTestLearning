const chai = require("chai")
const expect = require('chai').expect;
const { add, addCallback, addPromise } = require('../demo');
const chaiAsPromised = require ('chai-as-promised');
chai.use(chaiAsPromised);


describe('chai test', () => {
    it('it should compare some values', () => {
        expect(1).to.not.equal(2);
    });
    it('should test some other stuff', () => {
        expect({name : 'foo'}).to.deep.equal({name: 'foo'});
        expect({name : 'foo'}).to.have.property('name').to.equal('foo');
        expect(5 > 8).to.be.false;
        expect({}).to.be.a('object');
        expect({}).to.be.empty;
        expect('foo').to.be.a('string');
        expect(3).to.be.a('number');
        expect('bar').to.be.a('string').with.lengthOf(3);
        expect([1,2,3].length).to.equal(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist;
    });
    it('should print current environment', () => {
        process.stdout.write(`ennvironment: ${process.env.NODE_ENV}\n`); 
        let myOutput='';
        process.env.NODE_ENV==='development' ? myOutput=0 : myOutput=1;
        process.stdout.write(`ennvironment: ${myOutput}\n`); 
    });
    
});

describe('demo', ()=>{
    context('add two valid numbers', () => {
        it(' add with 1 and 2', () => {
            expect(add(2,1)).to.equal(3);
        })

    })
    context('callback add', () => {
        it('add 2 numbers with a timeout of 500 ms', (done) => {
            addCallback(2,1, (err, result) => {
                expect(err).to.not.exist;
                expect(result).to.equal(3);
                done();
            })
        })
    })
    context('promise add', () => {
        it('add 2 numbers with a promise', (done) => {
            addPromise(2, 1).then((result)=>{
                expect(result).to.equal(3);
                done();
            }).catch((err)=>{
                process.stdout.write('there was an error\n');
                process.stdout.write(`${err}\n`);
                done();
            })
        })
        it('test a promise with a return', () => {
            return addPromise(2, 1).then((result)=>{
                expect(result).to.equal(3);
            }).catch((err)=>{
                process.stdout.write(`${err}\n`);
                process.stdout.write('there was an error\n');
            })
        })
        it('test a promise with async', async () => {
            
            let result = await addPromise(2, 1);
            expect(result).to.equal(3);
        })
        it('test promise with chai-as-promised', async () => {
            await expect(addPromise(2,1)).to.eventually.equal(3);
        })
    })
    describe('rewire test', () => {
        context('test with FS', () => {
            it('test readfile', () => {
                var rewire = require("rewire");
                var myModule = rewire("../readfile");
                var fsMock = {
                    readFile: function (path, encoding, cb) {
                        expect(path).to.equal("/somewhere/on/the/disk");
                        cb(null, "Success!");
                    }
                };
                var rsffs = (cb) =>{
                    cb(null, "Success!");
                    console.log("me perdi ...");
                }
                myModule.__set__({
                    noIdea: rsffs,
                    fs: fsMock,
                    //path: "/dev/null"
                    path: "/somewhere/on/the/disk"
                });
                
                
                myModule.readSomethingFromFileSystem(function (err, data) {
                    console.log(data); // = Success!
                });
            })
        })
    });
})