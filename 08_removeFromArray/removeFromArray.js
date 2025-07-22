const removeFromArray = function(arr, ...remove) {
    // remove is turned into an array
    const filtered = arr.filter(arrItem => !remove.includes(arrItem));
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
