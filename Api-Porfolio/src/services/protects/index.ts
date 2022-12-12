import { ProyectsEntry } from "./interfaces";
import proyectsData from '../../assets/utils/es-Ar/proyects.json';

const proy: ProyectsEntry[] = proyectsData as ProyectsEntry[];

export const getEntry = (): ProyectsEntry[] => proy;

export const findById = (id : number) : ProyectsEntry | undefined => { 
    const proyectsEntry = proy.find(d => d.id === id)
    return proyectsEntry
  };