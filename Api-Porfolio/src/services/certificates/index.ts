import { CertEntry } from "./interface";
import certData from '../../assets/utils/es-Ar/certifictes.json'


const cert: CertEntry[] = certData as CertEntry[]

export const getEntry = (): CertEntry[] => cert

export const findById = (id : number): CertEntry | undefined => { 
    const entry = certData.find(d => d.id === id)
    return entry
  }