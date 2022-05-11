var fs = require("fs"),
    path = "/somewhere/on/the/disk";

function readSomethingFromFileSystem(cb) {
    console.log("Reading from file system ...");
    fs.readFile(path, "utf8", cb);
    noIdea(cb)
}

function noIdea(cb) {
    cb(null, "SuccessIdea!");
    console.log("Original noIdea ...");
}

module.exports = { readSomethingFromFileSystem };