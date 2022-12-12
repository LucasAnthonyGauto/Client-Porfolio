"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Focus = exports.Type = exports.State = void 0;
var State;
(function (State) {
    State["Finished"] = "Finished";
    State["Paused"] = "Paused";
    State["InProcess"] = "In Process";
    State["Terminada"] = "Terminada";
    State["Pausada"] = "Pausada";
    State["EnProceso"] = "EnProceso";
})(State = exports.State || (exports.State = {}));
var Type;
(function (Type) {
    Type["Practice"] = "Practice";
    Type["Project"] = "Project";
    Type["Practica"] = "Practica";
    Type["Proyecto"] = "Proyecto";
})(Type = exports.Type || (exports.Type = {}));
var Focus;
(function (Focus) {
    Focus["FrontEnd"] = "FrontEnd";
    Focus["BackEnd"] = "BackEnd";
    Focus["Api"] = "Api";
})(Focus = exports.Focus || (exports.Focus = {}));
