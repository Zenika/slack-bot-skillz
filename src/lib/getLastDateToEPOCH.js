function getLastDateToEPOCH(dateArray) {
    //new Date(2010, 6, 26).getTime() / 1000
    new Date(Math.max.apply(null, a.map(function(e) {
        return new Date(e.dateArray);
    })));
    return "error";
}

module.exports.getLastDateToEPOCH = getLastDateToEPOCH;