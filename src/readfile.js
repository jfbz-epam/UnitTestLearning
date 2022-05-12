var path = "/somewhere/on/the/disk";
function readSomethingFromFileSystem(cb) {
  console.log("Reading from file system ...");
  noIdea(cb)
}
function noIdea(cb) {
  cb(null, "SuccessIdea!");
  console.log("Original noIdea ...");
}
module.exports = { readSomethingFromFileSystem };

