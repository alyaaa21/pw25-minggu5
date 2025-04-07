function validasiForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;
  
    if (nama === "" || email === "" || pesan === "") {
      alert("Semua field harus diisi!");
      return false;
    }
  
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Email tidak valid.");
      return false;
    }
  
    alert("Pesan berhasil dikirim!");
    return true;
  }
  