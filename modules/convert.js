var dollarTotal = function(randomNumber){
    var dollar = Number(randomNumber).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
     return "$" + dollar;
};

module.exports = dollarTotal;

