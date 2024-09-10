//tartalom divben egymás mellett kutyák adatai
import { KUTYAK } from "./adatok.js";
import { egyKiir} from "./fv.js"
import  Kartya  from "./kartya.js";
import Kartyak from "./kartyak.js";
const LISTA = []
const cim = "Minden amit a kutyáról tudni kell"
let nev = "Jenő"

const cimElem =$("header")
console.log(cimElem);
cimElem.append(`<h1>${cim}</h1>`)

/*const kutya1={nev:"Dézi",kor:12,nem:"nőstény"}
kutya1.nev="Morzsa"
console.log(kutya1);*/



/*KUTYAK.forEach((kutya) => {
    egyKiir(kutya)
})*/


