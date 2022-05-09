function add(a,b) {
    return a+b;
}

function addCallback(a, b, callback ) {
    setTimeout(() => {
        return callback(null, a+b);
    }, 500);
    
}

function addPromise(a, b) {
    //return Promise.reject(new Error('fake'));
    return Promise.resolve(a+b);
}

module.exports = { add, addCallback, addPromise };