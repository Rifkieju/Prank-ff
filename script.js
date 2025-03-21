function validateID() {
    var userID = document.getElementById("userID").value;
    if (userID.trim() === "") {
        alert("Harap masukkan ID Free Fire Anda!");
        return;
    }
    document.getElementById("spinSection").classList.remove("hidden");
}

function spinWheel() {
    document.getElementById("diamondSection").classList.remove("hidden");
}

function claimDiamond(amount) {
    alert("Anda memilih " + amount + " Diamond. Klik 'Ambil' untuk melanjutkan.");
    setTimeout(function() {
        window.location.href = "prank.html";
    }, 1000);
}

    