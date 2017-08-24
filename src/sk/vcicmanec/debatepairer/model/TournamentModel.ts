import {Debate} from "./vo/Debate";
import {DebateType} from "./enum/DebateType";
import * as Combinatorics from "js-combinatorics";
export class TournamentModel {

    private static _instance: TournamentModel;

    constructor() {
        new Debate(DebateType.BRITISH_PARLIAMENTARY);

        if (TournamentModel._instance)
            throw new Error('Multiple instantiation attempted on class sk.vcicmanec.debatepairer.model.TournamentModel');
    }

    public static getInstance(): TournamentModel {
        if (!TournamentModel._instance)
            TournamentModel._instance = new TournamentModel;

        return TournamentModel._instance;
    }
}
