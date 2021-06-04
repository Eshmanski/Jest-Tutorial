function map(array, callback) {
    let results = [];

    for(let i = 0; i < array.length; i++) {
        results.push(callback(array[i]));
    };

    return results;
}

module.exports = { map };