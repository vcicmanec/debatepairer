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
