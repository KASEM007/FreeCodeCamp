onload = init;

var is;
var ss;

function init() {
    is = document.querySelectorAll(".i");
    ss =  document.querySelectorAll(".slider");
    
    updateBS();
    addEvents();
}

function updateBS() {    
    var box = document.querySelector(".box");
    box.style.boxShadow = `${is[0].value}px ${is[1].value}px ${is[2].value}px ${is[3].value}px #${is[4].value}`;  
    ss[0].value = is[0].value;
    ss[1].value = is[1].value;
    ss[2].value = is[2].value;
    ss[3].value = is[3].value;
        
}

function updateBS1() {
    is[0].value = ss[0].value;
    is[1].value = ss[1].value;
    is[2].value = ss[2].value;
    is[3].value = ss[3].value;
    updateBS();
}

function addEvents() {
    for(var i of is) {
        i.addEventListener("keyup", updateBS, false);
    }
    
    for(var i of is) {
        i.addEventListener("change", updateBS, false);
    }
    
    
    for(var s of ss) {
        s.addEventListener("input", updateBS1, false);
    }
}
