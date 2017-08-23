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

    public get allHeldPositionsWereUnique():boolean{
        for (let i = 0, count = this.positionsHeld.length; i < count; i++) {
            let posi = this.positionsHeld[i];

            for (let j = 0, countj = this.positionsHeld.length; j < countj; j++) {
                if(j == i)
                    continue;

                let  posj = this.positionsHeld[j];

                if(posi == posj)
                    return false;
            }
        }

        return true;
    }

    public get membersPoints():number{
        let result:number = 0;

        for(let member of this.members){
            result += member.points;
        }

        return result;
    }
}
