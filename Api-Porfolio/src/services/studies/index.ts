import { StuEntry } from "./interface";
import stuData from '../../assets/utils/es-Ar/studies.json'


const stu: StuEntry[] = stuData as StuEntry[]

export const getEntry = (): StuEntry[] => stu

export const findById = (id : number): StuEntry | undefined => { 
    const entry = stu.find(d => d.id === id)
    return entry
  }