import { SkillsEntry } from "./interfaces";
import skillsEntry from '../../assets/utils/es-Ar/skills.json';


const skills: SkillsEntry[] = skillsEntry as SkillsEntry[];

export const getEntry = (): SkillsEntry[] => skills;

export const findById = (id : number) : SkillsEntry | undefined => { 
    const SkillsEntry = skills.find(d => d.id === id)
    return SkillsEntry
  };