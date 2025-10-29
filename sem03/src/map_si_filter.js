const aniNastere = [2004,2015,2003,2007,2022,2001,1999,2013,2016,1998];

const majori = aniNastere.map((anNastere) => 2025 - anNastere).filter(x => x >= 18);

console.log(majori);
