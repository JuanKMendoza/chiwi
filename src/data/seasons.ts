export interface Season {
  id: string;
  name: string;
  startMonth: number; // 1-12
  startDay: number;
  endMonth: number;
  endDay: number;
  productSlugs: string[];
}

export const seasons: Season[] = [
  {
    id: "halloween",
    name: "Halloween",
    startMonth: 10, startDay: 1,
    endMonth: 10,   endDay: 31,
    productSlugs: ["fantasma-gatito-halloween", "fantasma-perrito-halloween"],
  },
  {
    id: "navidad",
    name: "Navidad",
    startMonth: 11, startDay: 15,
    endMonth: 12,   endDay: 31,
    productSlugs: ["farolitos-navideños", "pack-bolitas-navideñas"],
  },
  {
    id: "dia-ninos",
    name: "Día del Niño",
    startMonth: 4, startDay: 1,
    endMonth: 4,   endDay: 30,
    productSlugs: ["capibara-mood-relax", "capibara-cute", "familia-de-ositos"],
  },
  {
    id: "dia-madres",
    name: "Día de las Madres",
    startMonth: 5, startDay: 1,
    endMonth: 5,   endDay: 31,
    productSlugs: ["cajita-recuerdame", "gatito-personalizado", "perrito-cocker"],
  },
];

export function getActiveSeason(month: number, day: number): Season | null {
  return seasons.find(s => {
    const afterStart = month > s.startMonth || (month === s.startMonth && day >= s.startDay);
    const beforeEnd  = month < s.endMonth  || (month === s.endMonth  && day <= s.endDay);
    return afterStart && beforeEnd;
  }) ?? null;
}
