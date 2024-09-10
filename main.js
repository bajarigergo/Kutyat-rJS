import { KUTYAK } from "./adatok.js";
import Kartyak from "./kartyak.js";

const TAROLO_ELEM=$(".tartalom")
const KIVALASZTOTTAK=[]
const KIVALASZTOTT_ELEM=$(".kivalasztott")
new Kartyak(KUTYAK,TAROLO_ELEM)
$(window).on("kivalaszt", (event)=>{
    console.log(event.detail);
    KIVALASZTOTTAK.push(event.detail)
    new Kartyak(KIVALASZTOTTAK,KIVALASZTOTT_ELEM)
})
    