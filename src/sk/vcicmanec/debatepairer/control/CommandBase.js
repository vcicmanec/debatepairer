"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandBase = (function () {
    function CommandBase(type) {
        this.type = type;
    }
    CommandBase.prototype.dispatch = function () {
        this.execute();
    };
    CommandBase.prototype.execute = function () {
    };
    return CommandBase;
}());
exports.CommandBase = CommandBase;
