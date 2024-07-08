let addSheetBtn=document.querySelector(".sheet-add-icon");
let sheetsFolderCont=document.querySelector(".sheets-folder-cont");
addSheetBtn.addEventListener("click",(e)=>{

    //create sheet icon 
    let sheet=document.createElement("div");
    sheet.setAttribute("class","sheet-folder");
    
    //unique id for each sheet
    let allSheetFolders=document.querySelectorAll(".sheet-folder");
    sheet.setAttribute("id",allSheetFolders.length); //len+1 korchi na coz 0 based index
    sheet.innerHTML=
    `<div class="sheet-content">Sheet${allSheetFolders.length+1}</div>`

    sheetsFolderCont.appendChild(sheet);
});