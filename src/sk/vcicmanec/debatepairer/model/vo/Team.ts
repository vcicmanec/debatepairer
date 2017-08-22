import {Debater} from "./Debater";
import {DebateType} from "../enum/DebateType";
import {DebatePropertiesBase} from "./debateproperties/DebatePropertiesBase";
import {DebatePropertiesFactory} from "./debateproperties/DebatePropertiesFactory";
import {DebatePosition} from "../enum/DebatePosition";
export class Team {

    public members:Debater[];
    public name:string;
    public points:number;
    public debateProperties:DebatePropertiesBase;
    public positionsHeld:DebatePosition[];

    constructor(public debateType:DebateType) {
        this.debateProperties = DebatePropertiesFactory.getPropertiesByType(debateType);
    }

    public addMember(member:Debater):void{
        if(this.members.length >= this.debateProperties.teamMemberCount){
            throw new Error("Cannot add another team member, the team is full");
        }
    }

    public get membersPoints():number{
        let result:number = 0;

        for(let member of this.members){
            result += member.points;
        }

        return result;
    }


}
