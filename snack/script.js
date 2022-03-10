//SNACK1
const str = ['pippo', 'PLUTO', 'Paperino'];
const toLowerCaseStr = str.map(x => x.toLowerCase());
const formattedStr = toLowerCaseStr.map(x => x.charAt(0).toUpperCase() + x.slice(1));

//SNACK2
const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
const mammiferi = [animals.filter(animal => animal.classe == 'mammiferi')];