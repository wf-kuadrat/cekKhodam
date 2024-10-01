// document.querySelector('.nav-link').forEach(item => {
//       item.addEventListener('click', function(){
//             document.querySelector('.nav-link').forEach(e => e.classList.remove('active'));
//             this.classList.add('active');
//       })
// })

// tampilkan lebih banyak/sedikit
function lebihBanyak(){
      var testimonis = document.querySelectorAll(".drop-produk");
      for (var i = 0; i < testimonis.length; i++) {
            testimonis[i].style.display = 'block';
            testimonis[i].style.transition = "0.3s";
      }
      
      document.getElementById("tampilkan-lebih-banyak").style.display = "none";
      document.getElementById("tampilkan-lebih-sedikit").style.display = "block";
}
function lebihSedikit(){
      var testimonis  = document.querySelectorAll(".drop-produk");
      for (var i=1; i< testimonis.length; i++) {
            testimonis[i].style.display = "none";
            testimonis[i].style.transition = "0.3s";
      }
      document.getElementById("tampilkan-lebih-banyak").style.display = "block";
      document.getElementById("tampilkan-lebih-sedikit").style.display = "none";
}
// akhir tampilkan lebih banyak/sedikit

// penambahan otomatis total pembelian 
document.getElementById('jumlah-pembelian').addEventListener('input', function () {  
      var jumlahPembelian = document.getElementById('jumlah-pembelian').value;

      var total = 6000 * jumlahPembelian;
      document.getElementById('total').value = `${total}`;
})
// akhir penambahan otomatis total pembelian 

// fungsi pembelian via whatsapp
function sendToWhatsapp(){
      let number = "+6285713133074";

      let nama = document.getElementById("nama").value;
      let alamat = document.getElementById("alamat").value;
      let namaProduk = document.getElementById("namaProduk").value;
      let harga = document.getElementById("harga").value;
      let jumlahPembelian = document.getElementById("jumlah-pembelian").value;
      let keterangan = document.getElementById("keterangan").value;
      let total = document.getElementById("total").value;

      var url = "https://wa.me/" + number + "?text=" +
                  "Nama saya : " + nama + "%0a" +
                  "Alamat saya : " + alamat + "%0a" +
                  "Nama produk : " + namaProduk + "%0a" +
                  "Dengan harga : " + harga + "%0a" +
                  "Jumlah pembelian : " + jumlahPembelian + "%0a" +
                  "Keterangan : " + keterangan + "%0a" +
                  "*Totalnya* : " + "Rp " + total + "%0a%0a";
      
      window.open(url, "_blank").focus();

}
// akhir fungsi pembelian via whatsapp

document.getElementById('jumlah-pembelian2').addEventListener('input', function () {  
      var jumlahPembelian2 = document.getElementById('jumlah-pembelian2').value;

      var total2 = 8000 * jumlahPembelian2;
      document.getElementById('total2').value = `${total2}`;
})

function sendToWhatsapp2(){
      let number2 = "+6285713133074";

      let nama2 = document.getElementById("nama2").value;
      let alamat2 = document.getElementById("alamat2").value;
      let namaProduk2 = document.getElementById("namaProduk2").value;
      let harga2 = document.getElementById("harga2").value;
      let jumlahPembelian2 = document.getElementById("jumlah-pembelian2").value;
      let keterangan2 = document.getElementById("keterangan2").value;
      let total2 = document.getElementById("total2").value;

      var url2 = "https://wa.me/" + number2 + "?text=" +
                  "Nama saya : " + nama2 + "%0a" +
                  "Alamat saya : " + alamat2 + "%0a" +
                  "Nama produk : " + namaProduk2 + "%0a" +
                  "Dengan harga : " + harga2 + "%0a" +
                  "Jumlah pembelian : " + jumlahPembelian2 + "%0a" +
                  "Keterangan : " + keterangan2 + "%0a" +
                  "*Totalnya* : " + "Rp " + total2 + "%0a%0a";
      
      window.open(url2, "_blank").focus();

}


// penambahan otomatis total pembelian 
document.getElementById('jumlah-pembelian3').addEventListener('input', function () {  
      var jumlahPembelian3 = document.getElementById('jumlah-pembelian3').value;

      var total3 = 10000 * jumlahPembelian3;
      document.getElementById('total3').value = `${total3}`;
})
// akhir penambahan otomatis total pembelian 

// fungsi pembelian via whatsapp
function sendToWhatsapp3(){
      let number3 = "+6285713133074";

      let nama3 = document.getElementById("nama3").value;
      let alamat3 = document.getElementById("alamat3").value;
      let namaProduk3 = document.getElementById("namaProduk3").value;
      let harga3 = document.getElementById("harga3").value;
      let jumlahPembelian3 = document.getElementById("jumlah-pembelian3").value;
      let keterangan3 = document.getElementById("keterangan3").value;
      let total3 = document.getElementById("total3").value;

      var url3 = "https://wa.me/" + number3 + "?text=" +
                  "Nama saya : " + nama3 + "%0a" +
                  "Alamat saya : " + alamat3 + "%0a" +
                  "Nama produk : " + namaProduk3 + "%0a" +
                  "Dengan harga : " + harga3 + "%0a" +
                  "Jumlah pembelian : " + jumlahPembelian3 + "%0a" +
                  "Keterangan : " + keterangan3 + "%0a" +
                  "*Totalnya* : " + "Rp " + total3 + "%0a%0a";
      
      window.open(url3, "_blank").focus();

}


// penambahan otomatis total pembelian 
document.getElementById('jumlah-pembelian4').addEventListener('input', function () {  
      var jumlahPembelian4 = document.getElementById('jumlah-pembelian4').value;

      var total4 = 12000 * jumlahPembelian4;
      document.getElementById('total4').value = `${total4}`;
})
// akhir penambahan otomatis total pembelian 

// fungsi pembelian via whatsapp
function sendToWhatsappEmpat(){
      let number4 = "+6285713133074";

      let nama4 = document.getElementById("nama4").value;
      let alamat4 = document.getElementById("alamat4").value;
      let namaProduk4 = document.getElementById("namaProduk4").value;
      let harga4 = document.getElementById("harga4").value;
      let jumlahPembelian4 = document.getElementById("jumlah-pembelian4").value;
      let keterangan4 = document.getElementById("keterangan4").value;
      let total4 = document.getElementById("total4").value;

      var url4 = "https://wa.me/" + number4 + "?text=" +
                  "Nama saya : " + nama4 + "%0a" +
                  "Alamat saya : " + alamat4 + "%0a" +
                  "Nama produk : " + namaProduk4 + "%0a" +
                  "Dengan harga : " + harga4 + "%0a" +
                  "Jumlah pembelian : " + jumlahPembelian4 + "%0a" +
                  "Keterangan : " + keterangan4 + "%0a" +
                  "*Totalnya* : " + "Rp " + total4 + "%0a%0a";
      
      window.open(url4, "_blank").focus();

}


// penambahan otomatis total pembelian 
document.getElementById('jumlah-pembelian5').addEventListener('input', function () {  
      var jumlahPembelian5 = document.getElementById('jumlah-pembelian5').value;

      var total5 = 7000 * jumlahPembelian5;
      document.getElementById('total5').value = `${total5}`;
})
// akhir penambahan otomatis total pembelian 

// fungsi pembelian via whatsapp
function sendToWhatsapp5(){
      let number5 = "+6285713133074";

      let nama5 = document.getElementById("nama5").value;
      let alamat5 = document.getElementById("alamat5").value;
      let namaProduk5 = document.getElementById("namaProduk5").value;
      let harga5 = document.getElementById("harga5").value;
      let jumlahPembelian5 = document.getElementById("jumlah-pembelian5").value;
      let keterangan5 = document.getElementById("keterangan5").value;
      let total5 = document.getElementById("total5").value;

      var url5 = "https://wa.me/" + number5 + "?text=" +
                  "Nama saya : " + nama5 + "%0a" +
                  "Alamat saya : " + alamat5 + "%0a" +
                  "Nama produk : " + namaProduk5 + "%0a" +
                  "Dengan harga : " + harga5 + "%0a" +
                  "Jumlah pembelian : " + jumlahPembelian5 + "%0a" +
                  "Keterangan : " + keterangan5 + "%0a" +
                  "*Totalnya* : " + "Rp " + total5 + "%0a%0a";
      
      window.open(url5, "_blank").focus();

}


// penambahan otomatis total pembelian 
document.getElementById('jumlah-pembelian6').addEventListener('input', function () {  
      var jumlahPembelian6 = document.getElementById('jumlah-pembelian6').value;

      var total6 = 10000 * jumlahPembelian6;
      document.getElementById('total6').value = `${total6}`;
})
// akhir penambahan otomatis total pembelian 

// fungsi pembelian via whatsapp
function sendToWhatsappEnam(){
      let number6 = "+6285713133074";

      let nama6 = document.getElementById("nama6").value;
      let alamat6 = document.getElementById("alamat6").value;
      let namaProduk6 = document.getElementById("namaProduk6").value;
      let harga6 = document.getElementById("harga6").value;
      let jumlahPembelian6 = document.getElementById("jumlah-pembelian6").value;
      let keterangan6 = document.getElementById("keterangan6").value;
      let total6 = document.getElementById("total6").value;

      var url6 = "https://wa.me/" + number6 + "?text=" +
                  "Nama saya : " + nama6 + "%0a" +
                  "Alamat saya : " + alamat6 + "%0a" +
                  "Nama produk : " + namaProduk6 + "%0a" +
                  "Dengan harga : " + harga6+ "%0a" +
                  "Jumlah pembelian : " + jumlahPembelian6 + "%0a" +
                  "Keterangan : " + keterangan6 + "%0a" +
                  "*Totalnya* : " + "Rp " + total6 + "%0a%0a";
      
      window.open(url6, "_blank").focus();

}



// penambahan otomatis total pembelian 
document.getElementById('jumlah-pembelian7').addEventListener('input', function () {  
      var jumlahPembelian7 = document.getElementById('jumlah-pembelian7').value;

      var total7 = 12000 * jumlahPembelian7;
      document.getElementById('total7').value = `${total7}`;
})
// akhir penambahan otomatis total pembelian 

// fungsi pembelian via whatsapp
function sendToWhatsappTujuh(){
      let number7 = "+6285713133074";

      let nama7 = document.getElementById("nama7").value;
      let alamat7 = document.getElementById("alamat7").value;
      let namaProduk7 = document.getElementById("namaProduk7").value;
      let harga7 = document.getElementById("harga7").value;
      let jumlahPembelian7 = document.getElementById("jumlah-pembelian7").value;
      let keterangan7 = document.getElementById("keterangan7").value;
      let total7 = document.getElementById("total7").value;

      var url7 = "https://wa.me/" + number7 + "?text=" +
                  "Nama saya : " + nama7 + "%0a" +
                  "Alamat saya : " + alamat7 + "%0a" +
                  "Nama produk : " + namaProduk7 + "%0a" +
                  "Dengan harga : " + harga7+ "%0a" +
                  "Jumlah pembelian : " + jumlahPembelian7 + "%0a" +
                  "Keterangan : " + keterangan7 + "%0a" +
                  "*Totalnya* : " + "Rp " + total7 + "%0a%0a";
      
      window.open(url7, "_blank").focus();

}

