"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getEntryCert = void 0;
const proyects_json_1 = __importDefault(require("../../assets/utils/es-Ar/proyects.json"));
const proy = proyects_json_1.default;
const getEntryCert = () => proy;
exports.getEntryCert = getEntryCert;
const findById = (id) => {
    const proyectsEntry = proy.find(d => d.id === id);
    return proyectsEntry;
};
exports.findById = findById;
