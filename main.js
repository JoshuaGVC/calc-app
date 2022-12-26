const boxGreen = [];
const spaceGreen = document.querySelector(".calc__result");
const ul = document.querySelector(".calc__buttons");


const add = (value) =>{
  boxGreen.push(value);
  const juntado = boxGreen.join("");
  spaceGreen.textContent = juntado
}

const operar = ()=>{
  const operation = boxGreen.map((item)=>{
    if(typeof item === "string" && item !== "."){
      return ` ${item} `
    }else{
      return item
    }
  }).join("");
  try{
    spaceGreen.textContent = eval(operation);
  }catch(err){
    alert("pon una operacion valida");
  }
}

ul.addEventListener("click",(event)=>{
  const target = event.target;
  const isButton = target.classList.contains("calc__buttons__button");
  if(isButton){
    const dataNumber = target.dataset.number;
    if(dataNumber === undefined){
      const dataSymbol = target.dataset.symbol;
      if(dataSymbol === "="){
        operar();
      }else {
        add(dataSymbol);
      }
    }else{
      const convertionNumber = Number(dataNumber);
      add(convertionNumber);
    }
  }

} )


