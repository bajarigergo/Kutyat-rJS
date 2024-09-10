export function egyKiir(kutya) {
    const taroloElem=$(".tartalom")
    taroloElem.append(`
  <div class="card-body col-lg-3 col-md-6">
    <h5 class="card-title">${kutya.nev}</h5>
    <p class="card-text">${kutya.kor}</p>
    <p class="card-text">${kutya.nem}</p>
  </div>
`)
}
function szovegAlkot() {
    let txt=""
    for (let index = 0; index < KUTYAK.length; index++) {
        txt+=""+ egyKiir(index)+"\n"
    }
    return txt}