import {Debate} from "../src/sk/vcicmanec/debatepairer/model/vo/Debate";
import {DebateType} from "../src/sk/vcicmanec/debatepairer/model/enum/DebateType";
import {Team} from "../src/sk/vcicmanec/debatepairer/model/vo/Team";
describe("Debate", function () {
    var debate:Debate = new Debate(DebateType.BRITISH_PARLIAMENTARY);
    beforeEach(function () {
        console.info('beforeic');
        debate = new Debate(DebateType.BRITISH_PARLIAMENTARY);
    });

    describe('Member count', function () {
        console.info(debate)
        expect(debate.properties.teamCount).toBe(4);
    })

    describe('addTeam()', function () {

        it('Should throw error when more than allowed number of teams', function () {
            for(let i:number = 0, count = 3; i < count; i++){
                debate.addTeam(new Team(DebateType.BRITISH_PARLIAMENTARY));
            }

            expect(debate.addTeam(new Team(DebateType.BRITISH_PARLIAMENTARY))).toThrowError('Cannot add another team, debate is full');
        })
    })
})