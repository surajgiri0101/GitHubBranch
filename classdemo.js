"use strict";
exports.__esModule = true;
exports.classdemo = void 0;
var classdemo = /** @class */ (function () {
    function classdemo(ssn) {
        this.ssn = ssn;
    }
    classdemo.prototype.getUsername = function () {
        return this.username; //username property of class
    };
    classdemo.prototype.setUsername = function (username) {
        this.username = username;
    };
    classdemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classdemo;
}());
exports.classdemo = classdemo;
// let cd = new classdemo(153);
// cd.setUsername("suraj");
// console.log(cd.getUsername());
// console.log(cd.getSSN());
