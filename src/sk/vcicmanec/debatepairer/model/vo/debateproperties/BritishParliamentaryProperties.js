"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DebateType_1 = require("../../enum/DebateType");
var DebatePropertiesBase_1 = require("./DebatePropertiesBase");
var DebatePosition_1 = require("../../enum/DebatePosition");
var BritishParliamentaryProperties = (function (_super) {
    __extends(BritishParliamentaryProperties, _super);
    function BritishParliamentaryProperties() {
        var _this = _super.call(this) || this;
        _this.type = DebateType_1.DebateType.BRITISH_PARLIAMENTARY;
        _this.teamMemberCount = 2;
        _this.teamCount = 4;
        _this._positions = [
            DebatePosition_1.DebatePosition.GOV_1,
            DebatePosition_1.DebatePosition.GOV_2,
            DebatePosition_1.DebatePosition.OPP_1,
            DebatePosition_1.DebatePosition.OPP_2
        ];
        return _this;
    }
    return BritishParliamentaryProperties;
}(DebatePropertiesBase_1.DebatePropertiesBase));
exports.BritishParliamentaryProperties = BritishParliamentaryProperties;
