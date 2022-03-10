//SNACK1
const str=['pippo', 'PLUTO', 'Paperino'];
const toLowerCaseStr=str.map(x=>x.toLowerCase());
const formattedStr=toLowerCaseStr.map(x=>x.charAt(0).toUpperCase()+x.slice(1));
