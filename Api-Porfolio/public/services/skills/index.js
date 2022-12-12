"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getEntrySkills = void 0;
const skills_json_1 = __importDefault(require("../../assets/utils/es-Ar/skills.json"));
const skills = skills_json_1.default;
const getEntrySkills = () => skills;
exports.getEntrySkills = getEntrySkills;
const findById = (id) => {
    const SkillsEntry = skills.find(d => d.id === id);
    return SkillsEntry;
};
exports.findById = findById;
