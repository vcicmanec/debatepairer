"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebatePropertiesBase = (function () {
    function DebatePropertiesBase() {
    }
    Object.defineProperty(DebatePropertiesBase.prototype, "positions", {
        get: function () {
            return this._positions.concat();
        },
        enumerable: true,
        configurable: true
    });
    return DebatePropertiesBase;
}());
exports.DebatePropertiesBase = DebatePropertiesBase;
