import {DebateType} from "../../enum/DebateType";
import {DebatePropertiesBase} from "./DebatePropertiesBase";
import {BritishParliamentaryProperties} from "./BritishParliamentaryProperties";
export class DebatePropertiesFactory {
    constructor() {

    }

    public static getPropertiesByType(type:DebateType):DebatePropertiesBase{
        switch (type){
            case DebateType.BRITISH_PARLIAMENTARY:
                return new BritishParliamentaryProperties();
                break;
        }
    }
}
