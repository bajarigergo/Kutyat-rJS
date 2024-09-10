import Kartya from "./kartya.js"
export default class Kartyak {
    #lista=[]
    #tartoloElem
    constructor(lista, tartoloElem){
        this.#lista=lista
        this.#tartoloElem=tartoloElem
        this.kutyakKiir() 
        

        
    }
    kutyakKiir(){
        this.#lista.forEach((elem) =>{
            console.log(elem);
            new Kartya(elem, this.#tartoloElem)
            
        }
        )
    }

}