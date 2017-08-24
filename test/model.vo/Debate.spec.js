"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebateType_1 = require("../../src/sk/vcicmanec/debatepairer/model/enum/DebateType");
var Debate_1 = require("../../src/sk/vcicmanec/debatepairer/model/vo/Debate");
var Team_1 = require("../../src/sk/vcicmanec/debatepairer/model/vo/Team");
var DebatePosition_1 = require("../../src/sk/vcicmanec/debatepairer/model/enum/DebatePosition");
describe("Debate", function () {
    var debate = new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);
    beforeEach(function () {
        debate = new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);
    });
    describe('Member count for British parliamentary', function () {
        var dbt = new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);
        it('Should be 4', function () {
            expect(dbt.properties.teamCount).toBe(4);
        });
    });
    describe('addTeam()', function () {
        it('Should throw error when more than allowed number of teams', function () {
            for (var i = 0, count = debate.properties.teamCount; i < count; i++) {
                debate.addTeam(new Team_1.Team(DebateType_1.DebateType.BRITISH_PARLIAMENTARY));
            }
            expect(function () {
                debate.addTeam(new Team_1.Team(DebateType_1.DebateType.BRITISH_PARLIAMENTARY));
            }).toThrowError('Cannot add another team, debate is full');
        });
        it('Should throw error when another team with the same position is added', function () {
            debate.addTeam(new Team_1.Team(DebateType_1.DebateType.BRITISH_PARLIAMENTARY), DebatePosition_1.DebatePosition.GOV_1);
            expect(function () {
                debate.addTeam(new Team_1.Team(DebateType_1.DebateType.BRITISH_PARLIAMENTARY), DebatePosition_1.DebatePosition.GOV_1);
            }).toThrowError("Cannot add team to position 1 it is already taken");
        });
    });
});
