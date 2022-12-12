import { ExpEntry } from "./interface";
import ExpData from '../../assets/utils/es-Ar/experience.json'


const cert: ExpEntry[] = ExpData as ExpEntry[]

export const getEntry = (): ExpEntry[] => cert

export const findById = (id : number): ExpEntry | undefined => { 
    const entry = cert.find(d => d.id === id)
    return entry
  }