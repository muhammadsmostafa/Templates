function getEgpSar(amount){
    fetch(
      "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=d978298d18fc4372aabda3d06ebfc938"
    )
      .then((result) => {
        let data = result.json();
        return data;
      })
      .then((myData) => {
        let egp = `${myData.rates["EGP"]* amount}`;
        let sar = `${myData.rates["SAR"]* amount}`;
        egpSpan.innerHTML = `${(+egp).toFixed(3)} EGP`;
        sarSpan.innerHTML = `${(+sar).toFixed(3)} SAR`;
      });
}

    let amount = document.querySelector(".usd");
    let button = document.querySelector("button");
    let div = document.querySelector(".price");
    let egpSpan = document.querySelector(".price .egp");
    let sarSpan = document.querySelector(".price .sar");
    button.onclick = ()=>{
        getEgpSar(amount.value);
    }
