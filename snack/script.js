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

//SNACK3
const people=[
    {
        nome:"Giuseppe",
        cognome:"Mirizzi",
        età:27
    },
    {
        nome:"Giuseppe",
        cognome:"Loiotila",
        età:26
    },
    {
        nome:"Domingo",
        cognome:"Leccese",
        età:26
    },
    {
        nome:"Andrea",
        cognome:"Navarra",
        età:26
    },
    {
        nome:"Leonardo",
        cognome:"Daddato",
        età:1
    },
    {
        nome:"Giada",
        cognome:"Gentile",
        età:17
    },
    {
        nome:"Martina",
        cognome:"Dentico",
        età:17
    }
]
const canDrive=people.map(x=>x.età>=18?x.nome+" "+x.cognome+" può guidare":x.nome+" "+x.cognome+" non può guidare");