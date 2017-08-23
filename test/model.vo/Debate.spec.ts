import {DebateType} from "../../src/sk/vcicmanec/debatepairer/model/enum/DebateType";
import {Debate} from "../../src/sk/vcicmanec/debatepairer/model/vo/Debate";
import {Team} from "../../src/sk/vcicmanec/debatepairer/model/vo/Team";
import {DebatePosition} from "../../src/sk/vcicmanec/debatepairer/model/enum/DebatePosition";
describe("Debate", function () {
    var debate:Debate = new Debate(DebateType.BRITISH_PARLIAMENTARY);

    beforeEach(function () {
        debate = new Debate(DebateType.BRITISH_PARLIAMENTARY);
    });

    describe('Member count for British parliamentary', function () {
        let dbt:Debate = new Debate(DebateType.BRITISH_PARLIAMENTARY);
        it('Should be 4', ()=>{
            expect(dbt.properties.teamCount).toBe(4);
        })
    });

    describe('addTeam()', function () {

        it('Should throw error when more than allowed number of teams', function () {
            for(let i:number = 0, count = debate.properties.teamCount; i < count; i++){
                debate.addTeam(new Team(DebateType.BRITISH_PARLIAMENTARY));
            }

            expect(()=>{
                debate.addTeam(new Team(DebateType.BRITISH_PARLIAMENTARY))
            }).toThrowError('Cannot add another team, debate is full');
        })

        it('Should throw error when another team with the same position is added', () => {
            debate.addTeam(new Team(DebateType.BRITISH_PARLIAMENTARY), DebatePosition.GOV_1);

            expect(() => {
                debate.addTeam(new Team(DebateType.BRITISH_PARLIAMENTARY), DebatePosition.GOV_1);
            }).toThrowError("Cannot add team to position 1 it is already taken");
        })
    });
});