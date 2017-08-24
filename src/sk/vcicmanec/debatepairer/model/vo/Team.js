"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebatePropertiesFactory_1 = require("./debateproperties/DebatePropertiesFactory");
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
    Object.defineProperty(Team.prototype, "allHeldPositionsWereUnique", {
        get: function () {
            for (var i = 0, count = this.positionsHeld.length; i < count; i++) {
                var posi = this.positionsHeld[i];
                for (var j = 0, countj = this.positionsHeld.length; j < countj; j++) {
                    if (j == i)
                        continue;
                    var posj = this.positionsHeld[j];
                    if (posi == posj)
                        return false;
                }
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
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
