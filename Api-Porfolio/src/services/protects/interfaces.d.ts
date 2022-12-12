import { State, Type, Focus } from "./enuns";

export interface ProyectsEntry {
  id: number,
  title: string,
  descPer: string,
  descTech: string,
  date: string,
  labels:{
    state : State,
    type : Type,
    focus : Focus
  },
  imgsCarousel: string[],
  imgLarge: string,
  links : {
    page : string,
    github : string
  },
  keyWords: string
}