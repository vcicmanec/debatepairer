(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TournamentModel_1 = require("./model/TournamentModel");
var Debate_1 = require("./model/vo/Debate");
var DebateType_1 = require("./model/enum/DebateType");
new TournamentModel_1.TournamentModel();
new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);

},{"./model/TournamentModel":2,"./model/enum/DebateType":4,"./model/vo/Debate":5}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Debate_1 = require("./vo/Debate");
var DebateType_1 = require("./enum/DebateType");
var TournamentModel = (function () {
    function TournamentModel() {
        new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);
        if (TournamentModel._instance)
            throw new Error('Multiple instantiation attempted on class sk.vcicmanec.debatepairer.model.TournamentModel');
    }
    TournamentModel.getInstance = function () {
        if (!TournamentModel._instance)
            TournamentModel._instance = new TournamentModel;
        return TournamentModel._instance;
    };
    return TournamentModel;
}());
exports.TournamentModel = TournamentModel;

},{"./enum/DebateType":4,"./vo/Debate":5}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebatePosition;
(function (DebatePosition) {
    DebatePosition[DebatePosition["GOV_1"] = 1] = "GOV_1";
    DebatePosition[DebatePosition["GOV_2"] = 2] = "GOV_2";
    DebatePosition[DebatePosition["OPP_1"] = 3] = "OPP_1";
    DebatePosition[DebatePosition["OPP_2"] = 4] = "OPP_2";
})(DebatePosition = exports.DebatePosition || (exports.DebatePosition = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebateType;
(function (DebateType) {
    DebateType[DebateType["BRITISH_PARLIAMENTARY"] = 1] = "BRITISH_PARLIAMENTARY";
})(DebateType = exports.DebateType || (exports.DebateType = {}));

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebatePropertiesFactory_1 = require("./debateproperties/DebatePropertiesFactory");
var Debate = (function () {
    function Debate(debateType) {
        this.debateType = debateType;
        this.properties = DebatePropertiesFactory_1.DebatePropertiesFactory.getPropertiesByType(debateType);
        this.teams = [];
        this.clear();
        var kokot = 1234;
    }
    Debate.prototype.addTeam = function (team, position) {
        if (!team)
            throw new Error("Cannot add null team");
        if (!position)
            position = this.freePositions[0];
        if (this.teams.length >= this.properties.teamCount)
            throw new Error("Cannot add another team, debate is full");
        if (!this.isPositionFree(position))
            throw new Error("Cannot add team to position " + position + " it is already taken");
        this.teams.push(team);
        var index = this.freePositions.indexOf(position);
        this.freePositions.splice(index, 1);
    };
    Debate.prototype.clear = function () {
        this.teams.length = 0;
        this.freePositions = this.properties.positions;
    };
    Debate.prototype.isPositionFree = function (position) {
        return this.freePositions.indexOf(position) != -1;
    };
    return Debate;
}());
exports.Debate = Debate;

},{"./debateproperties/DebatePropertiesFactory":8}],6:[function(require,module,exports){
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

},{"../../enum/DebatePosition":3,"../../enum/DebateType":4,"./DebatePropertiesBase":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"../../enum/DebateType":4,"./BritishParliamentaryProperties":6}]},{},[1]);
