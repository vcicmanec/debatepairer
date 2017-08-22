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
define("control/CommandBase", ["require", "exports"], function (require, exports) {
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
});
define("model/TournamentModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TournamentModel = (function () {
        function TournamentModel() {
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
});
define("model/enum/DebatePosition", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DebatePosition;
    (function (DebatePosition) {
        DebatePosition[DebatePosition["GOV_1"] = 1] = "GOV_1";
        DebatePosition[DebatePosition["GOV_2"] = 2] = "GOV_2";
        DebatePosition[DebatePosition["OPP_1"] = 3] = "OPP_1";
        DebatePosition[DebatePosition["OPP_2"] = 4] = "OPP_2";
    })(DebatePosition = exports.DebatePosition || (exports.DebatePosition = {}));
});
define("model/enum/DebateType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DebateType;
    (function (DebateType) {
        DebateType[DebateType["BRITISH_PARLIAMENTARY"] = 1] = "BRITISH_PARLIAMENTARY";
    })(DebateType = exports.DebateType || (exports.DebateType = {}));
});
define("model/interface/IDebateProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("model/vo/Debater", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Debater = (function () {
        function Debater() {
        }
        return Debater;
    }());
    exports.Debater = Debater;
});
define("model/vo/debateproperties/DebatePropertiesBase", ["require", "exports"], function (require, exports) {
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
});
define("model/vo/debateproperties/BritishParliamentaryProperties", ["require", "exports", "model/enum/DebateType", "model/vo/debateproperties/DebatePropertiesBase", "model/enum/DebatePosition"], function (require, exports, DebateType_1, DebatePropertiesBase_1, DebatePosition_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("model/vo/debateproperties/DebatePropertiesFactory", ["require", "exports", "model/enum/DebateType", "model/vo/debateproperties/BritishParliamentaryProperties"], function (require, exports, DebateType_2, BritishParliamentaryProperties_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DebatePropertiesFactory = (function () {
        function DebatePropertiesFactory() {
        }
        DebatePropertiesFactory.getPropertiesByType = function (type) {
            switch (type) {
                case DebateType_2.DebateType.BRITISH_PARLIAMENTARY:
                    return new BritishParliamentaryProperties_1.BritishParliamentaryProperties();
                    break;
            }
        };
        return DebatePropertiesFactory;
    }());
    exports.DebatePropertiesFactory = DebatePropertiesFactory;
});
define("model/vo/Team", ["require", "exports", "model/vo/debateproperties/DebatePropertiesFactory"], function (require, exports, DebatePropertiesFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Team = (function () {
        function Team(debateType) {
            this.debateType = debateType;
            this.debateProperties = DebatePropertiesFactory_1.DebatePropertiesFactory.getPropertiesByType(debateType);
        }
        Team.prototype.addMember = function (member) {
            if (this.members.length >= this.debateProperties.teamMemberCount) {
                throw new Error("Cannot add another team member, the team is full");
            }
        };
        Object.defineProperty(Team.prototype, "membersPoints", {
            get: function () {
                var result = 0;
                for (var _i = 0, _a = this.members; _i < _a.length; _i++) {
                    var member = _a[_i];
                    result += member.points;
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        return Team;
    }());
    exports.Team = Team;
});
define("model/vo/Debate", ["require", "exports", "model/vo/debateproperties/DebatePropertiesFactory"], function (require, exports, DebatePropertiesFactory_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Debate = (function () {
        function Debate(debateType) {
            this.debateType = debateType;
            this.properties = DebatePropertiesFactory_2.DebatePropertiesFactory.getPropertiesByType(debateType);
            this.teams = [];
            this.clear();
        }
        Debate.prototype.addTeam = function (team, position) {
            if (!team)
                throw new Error("Cannot add null team");
            if (!position)
                position = this.freePositions[0];
            if (!this.isPositionFree(position))
                throw new Error("Cannot add team to position " + position + " it is already taken");
            if (this.teams.length >= this.properties.teamMemberCount)
                throw new Error("Cannot add another team, debate is full");
            this.teams[position] = team;
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
});
//# sourceMappingURL=debatepairer.js.map