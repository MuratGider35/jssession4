// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

// console.log("****** WHILE *******");

// //? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
// //? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
// //? not girmeye zorlayan kodu while dongusu ile yaziniz.

// const not = prompt("lütfen 0-100 arasında bir not giriniz");
// while (not < 0 || not > 100){
//     console.log(`not 0-100 arasında olmalıdır`);
// not = prompt("lütfen 0-100 arasında not giriniz");
// }

// console.log(`girdiğini not ${not}`);

// if (not < 0 || not > 100){
//     alert("not 0-100 arasında olmalıdır");
// }
//**if ile olmaz!!!!!!!!!! */


//* DO_WHİLE

// let not1;
// do{
//      not1 = prompt("lütfen 0-100 arasında bir not giriniz");
//      if(not1 < 0 || not1 > 100){
//         console.log("girilen not 0-100 arasında olmalıdır")
//      }
// } while (not1 < 0 || not1 > 100)

// console.log(`girdiğini not ${not1}`);

//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.
/* 1- hak =5
//* 2- Raskele sayı tut (0-100)
//* 3- Kullanıcan tahmin iste (tahmın)
//* 4- hak=hak-1
//* 5- eğer (tahmin =?rasgele)
//*        print(Tebrikler Bildiniz)
//*    değilse (tahmin < rasgele)
//*        print(Arttır)
//*    değilse(tahmin > rastgele)
//*        print(Azalt)
//* 6- eğer (hak > 0 )
//*       goto stage-3
//*   değilse
//*       print(üzgünüz)//
let not1;
do {
  not1 = +prompt("Lutfen 0-100 arasinda bir not girniz.");
  if (not1 < 0 || not1 > 100) {
    console.log("Not 0-100 arasinda olmaldir.");
    alert("Not 0-100 arasinda olmaldir.");
  }
} while (not1 < 0 || not1 > 100);

console.log("Giridiginiz Not:", not1);


//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let hak = 5;
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);

let tahmin;
do {
  tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
  hak -= 1;
  if (tahmin === rastgele) {
    console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
    break;
  } else if (tahmin < rastgele) {
    console.log("ARTTIR ⬆️");
  } else {
    console.log("AZALT ⬇️");
  }
} while (hak > 0);

if (tahmin !== rastgele) {
  console.log("Uzgunuz oyunu kaybettiniz 😔😔");
}