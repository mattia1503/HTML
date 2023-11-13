

function Acquista() {
    ProtoddiAcquistati = "";
    if (document.getElementById("cb1").checked)
    ProtoddiAcquistati = document.getElementById("td1").innerHTML + "|";
    if (document.getElementById("cb2").checked)
    ProtoddiAcquistati =
        ProtoddiAcquistati + document.getElementById("td2").innerHTML + "|";
    if (document.getElementById("cb3").checked)
    ProtoddiAcquistati =
        ProtoddiAcquistati + document.getElementById("td3").innerHTML + "|";

    alert(ProtoddiAcquistati);
}

function gestisciCheckbox() {
    var checkbox = document.getElementById("cb1");
    var pulsantePagamento = document.getElementById("pagamento");

    checkbox.addEventListener("change", function() {
    pulsantePagamento.disabled = !checkbox.checked;
    });
}