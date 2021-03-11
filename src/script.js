function copyEmail() {
    var fullLink = document.createElement('input');
    document.body.appendChild(fullLink);
    fullLink.value = "huzaifa.ilyas.kaka@gmail.com";
    fullLink.select();
    fullLink.setSelectionRange(0, 99999);
    document.execCommand("copy", false);
    fullLink.remove();
    var txt = "Copied! \nEmail Address: " + fullLink.value;
    alert(txt);
    if (window.confirm("Do you want to open mail?\nIf yes, press 'OK' else press 'Cancel'.")) {
        return true;
    }
    return false;

}

function copyContactNo() {
    var fullLink = document.createElement('input');
    document.body.appendChild(fullLink);
    fullLink.value = "+923353773803";
    fullLink.select();
    fullLink.setSelectionRange(0, 99999);
    document.execCommand("copy", false);
    fullLink.remove();
    document.getElementById("ttc").style.visibility = "visible";

    if (window.confirm("Do you really want to call?\nIf yes, press 'OK' else press 'Cancel'.")) {
        setTimeout(function() { document.getElementById("ttc").style.visibility = "hidden"; }, 2500);
        return true;
    } else {
        setTimeout(function() { document.getElementById("ttc").style.visibility = "hidden"; }, 2500);
        return false;
    }
}


function show() {
    document.getElementById("tta").style.visibility = "visible";
    setTimeout(function() { document.getElementById("tta").style.visibility = "hidden"; }, 1500);

}

function mapC() {
    document.getElementById("tta").style.visibility = "visible";
    if (window.confirm("Do you really want to open location?\nIf yes, press 'OK' else press 'Cancel'.")) {
        setTimeout(function() { document.getElementById("tta").style.visibility = "hidden"; }, 1500);
        return true;
    } else {
        setTimeout(function() { document.getElementById("tta").style.visibility = "hidden"; }, 1500);
        return false;
    }

}