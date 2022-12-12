import { State } from "./enuns"

export interface StuEntry{
    id: number,
    title: string,
    entity: string,
    date: {
      beginning: string,
      finished: string
    },
    state: string,
    focus: string,
    desc: string,
    skills: string[]
}