var path = "/somewhere/on/the/disk";
function readSomethingFromFileSystem(cb) {
  console.log("Reading from file system ...")
  noIdea(cb)
}
function noIdea(cb) {
  cb(null, "SuccessIdea!")
  console.log(`RF noIdea path ${path}`)
}
readSomethingFromFileSystem(function (err, data) {
  console.log(data); // = Success!
})
module.exports = { readSomethingFromFileSystem }
