"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Debate_1 = require("../src/sk/vcicmanec/debatepairer/model/vo/Debate");
var DebateType_1 = require("../src/sk/vcicmanec/debatepairer/model/enum/DebateType");
var Team_1 = require("../src/sk/vcicmanec/debatepairer/model/vo/Team");
describe("Debate", function () {
    var debate = new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);
    beforeEach(function () {
        console.info('beforeic');
        debate = new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);
    });
    describe('Member count', function () {
        console.info(debate);
        expect(debate.properties.teamCount).toBe(4);
    });
    describe('addTeam()', function () {
        it('Should throw error when more than allowed number of teams', function () {
            for (var i = 0, count = 3; i < count; i++) {
                debate.addTeam(new Team_1.Team(DebateType_1.DebateType.BRITISH_PARLIAMENTARY));
            }
            expect(debate.addTeam(new Team_1.Team(DebateType_1.DebateType.BRITISH_PARLIAMENTARY))).toThrowError('Cannot add another team, debate is full');
        });
    });
});
