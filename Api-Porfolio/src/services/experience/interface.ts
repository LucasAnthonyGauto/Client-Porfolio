export interface ExpEntry {
    id: number,
    title: string,
    business: {
      name: string,
      location: string
    },
    date: {
      beginning: string,
      finished: string
    },
    desc: string,
    skills: string[]
  }