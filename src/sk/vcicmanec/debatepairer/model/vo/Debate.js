"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebatePropertiesFactory_1 = require("./debateproperties/DebatePropertiesFactory");
var Debate = (function () {
    function Debate(debateType) {
        this.debateType = debateType;
        this.properties = DebatePropertiesFactory_1.DebatePropertiesFactory.getPropertiesByType(debateType);
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
