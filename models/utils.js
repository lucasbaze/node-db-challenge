module.exports = {
    intToBool,
    convertCompleted,
};

function intToBool(int) {
    return int == 1 ? true : false;
}

function convertCompleted(obj, name) {
    return {
        ...obj,
        [name]: intToBool(obj[name]),
    };
}
