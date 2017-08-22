import {DebateType} from "../enum/DebateType";
import {DebatePosition} from "../enum/DebatePosition";
export interface IDebateProperties {
    type:DebateType;
    teamMemberCount:number;
    teamCount:number;
    positions:DebatePosition[];
}
