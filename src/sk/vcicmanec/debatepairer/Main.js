"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TournamentModel_1 = require("./model/TournamentModel");
var Debate_1 = require("./model/vo/Debate");
var DebateType_1 = require("./model/enum/DebateType");
new TournamentModel_1.TournamentModel();
new Debate_1.Debate(DebateType_1.DebateType.BRITISH_PARLIAMENTARY);
