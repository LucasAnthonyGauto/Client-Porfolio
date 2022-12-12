"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getEntryCert = void 0;
const certifictes_json_1 = __importDefault(require("../../assets/utils/es-Ar/certifictes.json"));
console.log(certifictes_json_1.default);
const cert = certifictes_json_1.default;
const getEntryCert = () => cert;
exports.getEntryCert = getEntryCert;
const findById = (id) => {
    const entry = certifictes_json_1.default.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
