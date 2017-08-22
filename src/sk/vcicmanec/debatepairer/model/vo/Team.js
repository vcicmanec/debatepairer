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
