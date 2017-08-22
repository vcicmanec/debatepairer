export class TournamentModel {

    private static _instance: TournamentModel;

    constructor() {
        if (TournamentModel._instance)
            throw new Error('Multiple instantiation attempted on class sk.vcicmanec.debatepairer.model.TournamentModel');
    }

    public static getInstance(): TournamentModel {
        if (!TournamentModel._instance)
            TournamentModel._instance = new TournamentModel;

        return TournamentModel._instance;
    }
}
