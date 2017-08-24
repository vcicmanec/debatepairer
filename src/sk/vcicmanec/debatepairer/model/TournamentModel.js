"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Debate_1 = require("./vo/Debate");
var DebateType_1 = require("./enum/DebateType");
var TournamentModel = (function () {
    function TournamentModel() {
        new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);
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
