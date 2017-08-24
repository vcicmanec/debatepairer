import {DebateType} from "../../enum/DebateType";
import {DebatePropertiesBase} from "./DebatePropertiesBase";
import {DebatePosition} from "../../enum/DebatePosition";
export class BritishParliamentaryProperties extends DebatePropertiesBase{

    constructor() {
        super();
        this.type = DebateType.BRITISH_PARLIAMENTARY;
        this.teamMemberCount = 2;
        this.teamCount = 4;
        this._positions = [
            DebatePosition.GOV_1,
            DebatePosition.GOV_2,
            DebatePosition.OPP_1,
            DebatePosition.OPP_2
        ]
    }
}
