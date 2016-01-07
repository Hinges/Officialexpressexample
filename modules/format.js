var number = require('./random');
var dollar = require('./convert');

var randomAmount = function(){
    return dollar(number(100, 1000000));
};

var response = function(){
    return "Account balance:\n";
};



exports.randomAmount = randomAmount;
exports.response = response;