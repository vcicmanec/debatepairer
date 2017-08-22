"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebateType_1 = require("../../enum/DebateType");
var BritishParliamentaryProperties_1 = require("./BritishParliamentaryProperties");
var DebatePropertiesFactory = (function () {
    function DebatePropertiesFactory() {
    }
    DebatePropertiesFactory.getPropertiesByType = function (type) {
        switch (type) {
            case DebateType_1.DebateType.BRITISH_PARLIAMENTARY:
                return new BritishParliamentaryProperties_1.BritishParliamentaryProperties();
                break;
        }
    };
    return DebatePropertiesFactory;
}());
exports.DebatePropertiesFactory = DebatePropertiesFactory;
