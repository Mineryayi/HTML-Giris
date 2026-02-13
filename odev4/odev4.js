

document.getElementById('kitapForm').addEventListener('submit', function(e) {
    e.preventDefault(); 


    let kitapAdi = document.getElementById('kitapAdi').value;
    let normalFiyat = parseFloat(document.getElementById('normalFiyat').value);
    let sayfaSayisi = parseInt(document.getElementById('sayfaSayisi').value);
    let uyeMi = document.getElementById('uyeMi').checked; 

    let indirimOrani = 0;
    let indirimAciklama = "";
    

    if (sayfaSayisi > 200) {
        indirimOrani = 0.15; 
        indirimAciklama = "200+ sayfa (%15 indirim)";
    } else if (sayfaSayisi >= 100) {
        indirimOrani = 0.10; 
        indirimAciklama = "100-200 sayfa (%10 indirim)";
    } else {
        indirimOrani = 0;
        indirimAciklama = "100 sayfadan az (İndirim yok)";
    }


    let indirimTutari = normalFiyat * indirimOrani;
    let indirimliFiyat = normalFiyat - indirimTutari;


    let uyeIndirim = 0;
    if (uyeMi === true) { 
        uyeIndirim = indirimliFiyat * 0.05;
        indirimliFiyat = indirimliFiyat - uyeIndirim;
    }


    let sonucHTML = "";
    sonucHTML += "<strong>Kitap:</strong> " + kitapAdi + "<br>";
    sonucHTML += "<strong>Normal Fiyat:</strong> " + normalFiyat + " TL<br>";
    sonucHTML += "<strong>Sayfa Sayısı:</strong> " + sayfaSayisi + "<br>";
    sonucHTML += "<strong>" + indirimAciklama + ":</strong> -" + indirimTutari.toFixed(2) + " TL<br>";

    if (uyeMi) {
        sonucHTML += "<strong>Üye İndirimi:</strong> -" + uyeIndirim.toFixed(2) + " TL<br>";
    }

    sonucHTML += "<hr>";
    sonucHTML += "<strong style='color: #4CAF50; font-size: 18px;'>ÖDENECEK: " + indirimliFiyat.toFixed(2) + " TL</strong>";

    document.getElementById('sonuc').innerHTML = sonucHTML;
    document.getElementById('sonuc').classList.add('goster');
});
