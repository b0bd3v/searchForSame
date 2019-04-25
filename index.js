'use strict';
var compare = function (item, collection) {
    for (var index in collection) {
        if (collection[index] == item) {
            console.log(collection[index], item);
            return true;
        }
    }
    return false;
};
var string = "40|50|60|70|90|100|110|120|130|150|160|170|200|210|220|230|240|250|260|270|280|290|300|310|320|330|340|350|360|370|380|390|400|410|420|430|440|450|460|470|480|490|500|510|520|530|540|550|560|570|590|600|660|670|680|690|700|710|720|730|740|750|760|770|810|840|850|860|870|880|890|900|950|980|30|60|70|80|90|100|110|120|130|140|150|160|170|180|190|200|210|220|240|250|260|270|280|290|300|310|320|330|340|350|360|370|380|390|400|410|420|430|440|450|460|470|480|490|500|510|520|530|610|620|630|650|670|690|710";
var main = function (data) {
    var collectionToCheck = [];
    var collection = data.split('|');
    var reaptedItens = 0;
    for (var index in collection) {
        if (!compare(collection[index], collectionToCheck)) {
            collectionToCheck.push(collection[index]);
        }
        else {
            reaptedItens++;
        }
    }
    console.log(reaptedItens);
};
main(string);
