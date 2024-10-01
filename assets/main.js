function cekKhodam(event){
      event.preventDefault();
      let nama = $('#search').val();
      if(nama === ''){
            alert('Nama Tidak Boleh Kosong!');
      }else{
            let status = [
                  'isi',
                  'kosong'
            ]
            const randomStatus = Math.floor(Math.random() * status.length);
            if(randomStatus == 0){
                  let khodam = [
                        'mio karbu',
                        'tuyul mulet',
                        'kuntilanak',
                        'Sikil Tugel',
                        'Laptop Bodol',
                        'genderuwo',
                        'Toa Majid',
                        'Batu Bata', 'Ayam culling', 'Ubur-ubur', 'harimau', 'macan putih', 
                        'Macan kumbang', 'Kandang ayam', 'Sekam Teles', 'Tembelek Lancung',
                        'Endog Kuwuk', 'Ula Wangur', ''
                  ];
                  const random = Math.floor(Math.random() * khodam.length);
                  $('#result').html(`${nama.toUpperCase()} - khodam kamu (${khodam[random]})`);
                  $('#search').val('');
            }else{
                  $('#result').html(`${nama.toUpperCase()} - Kosong`);
                  $('#search').val('');
            }
      }
}
$(document).ready(function (){
      $('#btn-search').click(cekKhodam);
})