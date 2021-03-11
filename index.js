function convert_hex_to_dec(hex){


    hex = "0x" + hex;
    let decimal = BigInt(hex);
    let result = document.getElementById("result-dec");
    result.innerText = decimal;

    document.getElementById("dec").value = decimal;
}

function convert_dec_to_hex(decimal){



    decimal = BigInt(decimal);
    let hex = decimal.toString(16).toUpperCase();
    let result = document.getElementById("result-hex");
    result.innerText = "0x" + hex;

    document.getElementById("hex").value = hex;
}

function copy_to_clipboard(result_div){
    var textToCopy = document.getElementById("result-" + result_div).innerText;

    if(textToCopy[1] === "x") 
        textToCopy = textToCopy.substring(2);

    var textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    //alert(textToCopy + " copied to the clipboard!");
    pop_up("pop-" + result_div);

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

function pop_up(pop_id) {
    var popup = document.getElementById(pop_id);
    popup.classList.toggle("show");
}


