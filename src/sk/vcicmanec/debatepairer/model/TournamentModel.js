"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TournamentModel = (function () {
    function TournamentModel() {
        if (TournamentModel._instance)
            throw new Error('Multiple instantiation attempted on class sk.vcicmanec.debatepairer.model.TournamentModel');
    }
    TournamentModel.getInstance = function () {
        if (!TournamentModel._instance)
            TournamentModel._instance = new TournamentModel;
        return TournamentModel._instance;
    };
    return TournamentModel;
}());
exports.TournamentModel = TournamentModel;
