function formvalidasi() {
  var nama = document.getElementById('nama').value;
  var email = document.getElementById('email').value;
  var nohp = document.getElementById('nohp').value;
  var kelas = document.getElementById('kelas').value;
  var alasan = document.getElementById('alasan').value;
  console.log(nama);
  console.log(nohp);
  if (nama == "" && email =="" && nohp == "") {
    console.log("Form Tidak Valid");
    alert('Anda harus mengisi data dengan lengkap !');
  }else{
    console.log("Form Valid");
    document.getElementById('tampil_title').innerHTML = "Form Valid!";
    document.getElementById('tampil_nama').innerHTML = ("Nama : " + nama);
    document.getElementById('tampil_email').innerHTML = ("E-mail : " + email);
    document.getElementById('tampil_nohp').innerHTML = ("NO Telepon : " + nohp);
    document.getElementById('tampil_kelas').innerHTML = ("Kelas yang dipilih : " + kelas);
    document.getElementById('tampil_alasan').innerHTML = ("alasan : " + alasan);
  }
}
