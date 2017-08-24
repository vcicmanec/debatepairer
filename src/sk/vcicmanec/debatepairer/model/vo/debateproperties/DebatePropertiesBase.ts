import {IDebateProperties} from "../../interface/IDebateProperties";
import {DebatePosition} from "../../enum/DebatePosition";
export class DebatePropertiesBase implements IDebateProperties{
    public type:number;
    public teamMemberCount:number;
    public teamCount:number;
    protected _positions:DebatePosition[];

    constructor() {
    }

    public get positions():DebatePosition[]{
        return this._positions.concat();
    }
}