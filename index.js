function convert_hex_to_dec(hex){

    if(hex === ""){
        let result = document.getElementById("result-dec");
        result.innerText = "";
        return;
    }

    hex = "0x" + hex;

    let decimal;
    try{
        decimal = BigInt(hex);
        var input_hex = document.getElementById("hex");
        input_hex.classList.remove("is-invalid");
        let result = document.getElementById("result-dec");
        result.style.color = "black";
    }catch{
        console.log("err");
        var input_hex = document.getElementById("hex");
        input_hex.classList.add("is-invalid");
        let result = document.getElementById("result-dec");
        result.style.color = "red";
        return;
    }

    
    let result = document.getElementById("result-dec");
    result.innerText = decimal;

    document.getElementById("dec").value = decimal;
}

function convert_dec_to_hex(decimal){

    if(decimal === ""){
        let result = document.getElementById("result-hex");
        result.innerText = "";
        return;
    }

    try{
        decimal = BigInt(decimal);
        var input_dec = document.getElementById("dec");
        input_dec.classList.remove("is-invalid");
        let result = document.getElementById("result-hex");
        result.style.color = "black";

    }catch{
        console.log("err");
        var input_dec = document.getElementById("dec");
        input_dec.classList.add("is-invalid");
        let result = document.getElementById("result-hex");
        result.style.color = "red";
        return;
    }

    decimal = BigInt(decimal);
    let hex = decimal.toString(16).toUpperCase();
    let result = document.getElementById("result-hex");
    result.innerText = "0x" + hex;

    document.getElementById("hex").value = hex;
}

function convert_bin_to_dec(binary){
    
}

function convert_dec_to_bin(decimal){
    if(decimal === ""){
        let result = document.getElementById("result-hex");
        result.innerText = "";
        return;
    }

    try{
        decimal = BigInt(decimal);
        var input_dec = document.getElementById("dec");
        input_dec.classList.remove("is-invalid");
        let result = document.getElementById("result-hex");
        result.style.color = "black";

    }catch{
        console.log("err");
        var input_dec = document.getElementById("dec");
        input_dec.classList.add("is-invalid");
        let result = document.getElementById("result-hex");
        result.style.color = "red";
        return;
    }

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


