let tutulanSayı = Math.floor(Math.random() * 20 + 1);
let enYüksekSkor = 0;
console.log(tutulanSayı);
let skor = document.querySelector('.skor').textContent;
document.querySelector('.kontrol').addEventListener('click', () =>{
    const tahmin = document.querySelector('.tahmin').value;
    const mesaj = document.querySelector('.mesaj');
    if (!tahmin){
        mesaj.innerHTML = "Bir Sayı Giriniz.."
        mesaj.style.color = 'white'
        document.querySelector('body').style.backgroundColor = 'red'
        
    }else if (tutulanSayı == tahmin && skor > 0){
        mesaj.innerHTML = "Tebrikler Bildiniz..";
        document.querySelector('.soru-isareti').innerHTML = tutulanSayı;
        document.querySelector('body').style.backgroundColor = 'green';
        if (skor > enYüksekSkor){
            enYüksekSkor = skor
            document.querySelector('.en-skor').innerHTML = skor;
        }
    }else {
        if(skor >= 1){
            document.querySelector('.skor').innerHTML = --skor;
            tutulanSayı > tahmin ? mesaj.innerHTML = "Arttırınız. ↑" : mesaj.innerHTML = "Azaltınız. ↓"
            if (skor == 0){
                mesaj.innerHTML = "Üzgünüz Kaybettiniz :("
                document.querySelector("body").style.backgroundColor = 'red'
            }
        }
    }
})
document.querySelector('.tekrar').onclick = function(){
    document.querySelector('.soru-isareti').innerHTML = "?";
    document.querySelector('body').style.backgroundColor = '#2d3436'
    document.querySelector('.tahmin').value = "";
    document.querySelector('.mesaj').innerHTML = "Tahmine Başlanıyor.."
    document.querySelector('.skor').innerHTML = "10";
    skor = 10
    document.querySelector('.skor').textContent = skor;
}