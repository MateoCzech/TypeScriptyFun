"use strict";
function filterByTerm(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}
var obj1 = { url: "string1" };
var obj2 = { url: "string2" };
var obj3 = { url: "string3" };
var arrOfLinks = [obj1, obj2, obj3];
var term = "java";
var link1 = { description: "Blablabla typescript tutorial is good for newbie like me",
    id: 1,
    url: "www.tvojemamaneumilyzovat.cz",
    language: "cz"
};
filterByTerm([{ url: "string1" }, { url: "string2" }, { url: "string3" }], "java");
