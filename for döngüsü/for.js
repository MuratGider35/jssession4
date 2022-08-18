// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

// console.log("****** FOR *******");

//? Ornek: 1 den n kadar sayiları toplayan kodu yaziniz.

// const n = Number(prompt("Bir sayi girniz:"));

// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   // toplam = toplam + i;
//   toplam += i;
//   console.log(toplam, i);
// }

// console.log("SONUC:", toplam);

//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

// for (let i = 1; i <= 10; i++) {
//   const rasgele = Math.round(Math.random() * 100);
//   console.log(rasgele);
// }

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

const sayi = prompt("pozitif sayı giriniz");
let asal = true;

if (sayi<=1){
  alert("sayı 1'den büyük olmalıdır")
}else{
  for (let i =2 ; i<sayi ; i++){
    if(sayi % i == 0) {
      asal = false;
      break;
    }    
  }
  const sonuc = asal ===true ? "ASALDIR" : "ASAL DEĞİLDİR";
  console.log(`${sayi} ${sonuc}`);
}

