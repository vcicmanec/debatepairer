import {Team} from "../../src/sk/vcicmanec/debatepairer/model/vo/Team";
import {DebateType} from "../../src/sk/vcicmanec/debatepairer/model/enum/DebateType";
describe("Team", () => {

    let team:Team;

    beforeEach(() => {
        team = new Team(DebateType.BRITISH_PARLIAMENTARY);
    });

    describe('allHeldPositionsWereUnique', () => {
        it('Should be false', () => {
            team.positionsHeld = [1,1,2,2];

            expect(team.allHeldPositionsWereUnique).toBe(false);

            team.positionsHeld = [2,0,1,2];

            expect(team.allHeldPositionsWereUnique).toBe(false);
        })

        it('Should be true', () => {
            team.positionsHeld = [0,1,2,3];

            expect(team.allHeldPositionsWereUnique).toBe(true);
        })
    })
});