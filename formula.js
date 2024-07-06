//adding blur event listener to every cell
// eta korle ekta cell theke onno cell e chole gale
//last cell er valu=jeta type korte korte chole giyechilam

for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        //accesing each cell element(actually div)
        let cell=document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur",(e)=>{
            let address=addressBar.value;
            let[activeCell,cellProp]=getActiveCell(address);
            let enteredValue=activeCell.innerText;
            cellProp.value=enteredValue;
            
        })
    }
}

//formula bar e giye kono expression likhe enter tiple
//oi cell er innertext change hobe
//oi cell er state er value property ar formulaProperty change hobe
let formulaBar=document.querySelector(".formula-bar");

formulaBar.addEventListener("keydown",(e)=>{
    let inputFormula=formulaBar.value;  //formulaBar is a input element
    if(e.key==="Enter" && inputFormula){
        //determining the value of input formula
        let evaluatedValue=evaluateFormula(inputFormula);

        //UI change and Data update :
        setCellUIAndProps(evaluatedValue,inputFormula);
    }
})

//depended expression as well as  numerical expression evaluate korbe
function evaluateFormula(inputFormula){
    //suppose formula : A1 + B1 + C2 we have to convert it in-> 10+20+30 
    //step 1 : space(" ") er basis e string ke split kore array te convert korbo
    //so A1 is a element of array and + is a element of array
    let formulaTokens=inputFormula.split(" ");
    for(let i=0;i<formulaTokens.length;i++){
        let ascii=formulaTokens[i].charCodeAt(0);
        if(ascii>=65 && ascii<=90){
            //formulatoken[i]= "A1" type:
            let[cell , cellProp]=getActiveCell(formulaTokens[i]);
            formulaTokens[i]=cellProp.value;
        }
    }
    let decodedFormula=formulaTokens.join(" ");
    return eval(decodedFormula);
}

//UI change and Data update of the current cell (jar opor formula apply kora hoise)
function setCellUIAndProps(evaluatedValue,inputFormula){
    //address bar theke active cell access kore
    let address=addressBar.value;
    console.log(address)
    let [activeCell,cellProp]=getActiveCell(address);

    //UI update
    activeCell.innerText=evaluatedValue;

    //Cell storage state update
    cellProp.value=evaluatedValue;
    cellProp.formula=inputFormula;
}
