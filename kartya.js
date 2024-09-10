export default class Kartya {
    #obj={}
    #szuloElem;
    constructor(obj, szuloElem) {
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kiir()
        this.gombElem=$(".kivalaszt:last")
        console.log(this.gombElem);
        this.gombKezelo()

    }
    kiir() {
        
        let txt=`
      <div class="card-body col-lg-3 col-md-6">
        <h5 class="card-title">${this.#obj.nev}</h5>
        <p class="card-text">${this.#obj.kor}</p>
        <p class="card-text">${this.#obj.nem}</p>
        <button type="button" class="btn btn-secondary kivalaszt">Kiválaszt</button>
      </div>
    `
    this.#szuloElem.append(txt)
    }
    gombKezelo(){
        this.gombElem.on("click", ()=>{
            console.log(this);

            const e=new CustomEvent("kivalaszt", {detail:this.#obj})
            window.dispatchEvent(e)
            
        })
    }
}
