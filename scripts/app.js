const nonImpIcon ="fas fa-battery-full";
const impIcon = "fas fa-battery-empty";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
    if(isImportant){
        $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
        isImportant=false;
    } else {  
        $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
        isImportant=true;
    }
}

function togglePanel(){
    if(isVisible){
        $("#pnlForm").fadeOut();
        isVisible= false
    }else {  
        $("#pnlForm").fadeIn()
        isVisible=true;
    }
}

function init(){
    console.log("task manager");

    // load data

    //hook events
    $("#iImportant").click(toggleImportant);
    $("#btnShowHide").click(togglePanel)
}

window.onload=init;
//
