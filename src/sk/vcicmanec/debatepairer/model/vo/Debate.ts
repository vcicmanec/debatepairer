import {Team} from "./Team";
import {DebatePosition} from "../enum/DebatePosition";
import {DebateType} from "../enum/DebateType";
import {DebatePropertiesBase} from "./debateproperties/DebatePropertiesBase";
import {DebatePropertiesFactory} from "./debateproperties/DebatePropertiesFactory";
import {TournamentModel} from "../TournamentModel";
export class Debate {

    private teams:Team[];

    public properties:DebatePropertiesBase;
    public freePositions:DebatePosition[];

    constructor(public debateType:DebateType) {
        this.properties = DebatePropertiesFactory.getPropertiesByType(debateType);

        this.teams = [];

        this.clear();

        let kokot = 1234;
    }

    public addTeam(team:Team, position?:DebatePosition):void{
        if(!team)
            throw new Error("Cannot add null team");

        if(!position)
            position = this.freePositions[0];

        if(this.teams.length >= this.properties.teamCount)
            throw new Error("Cannot add another team, debate is full");

        if(!this.isPositionFree(position))
            throw new Error("Cannot add team to position " + position + " it is already taken");

        this.teams.push(team);

        let index:number = this.freePositions.indexOf(position);

        this.freePositions.splice(index, 1);
    }

    public clear():void{
        this.teams.length = 0;
        this.freePositions = this.properties.positions;
    }

    public isPositionFree(position:DebatePosition):boolean{
        return this.freePositions.indexOf(position) != -1;
    }
}
