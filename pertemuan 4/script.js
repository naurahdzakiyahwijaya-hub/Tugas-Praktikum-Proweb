// Bahasa Pemrograman
// print out
console.log("Hello World")

// variabel
let nama = "Rafa Fabian"; //string
let umur = 19; //integer
let ipk = 3.95; // float
let nilaiHuruf = 'A';// Char
let isActive = true; //boolean

console.log("Nama : " + nama);
console.log("Umur : " + umur);
console.log("ipk : " + ipk);
console.log("Nilai Huruf : " + nilaiHuruf);
console.log("Status Aktif : " + isActive);

//operasi
let angka1 = 67;
let angka2 = 89;
// angka1++;
// console.log(angka1)

//percabangan

if (angka1 === angka2) {
    console.log("angka sama");
} else if(angka1 > angka2){
    console.log("Angka 1 lebih gedek");
} else {
    console.log("Angka 2 Lebih gedek");
}

//loop
//whil
let perulangan = 10;
while (perulangan > 0) {
    console.log("Perulangan ke-" + perulangan);
    perulangan --;
}

//for
for(let perulangan = 0; perulangan <= 10; perulangan ++){
    console.log(perulangan);
}

alert("Ee Haloo");
confirm("lah makan ang?")
prompt("siap untuk uts?")

console.log (Math.floor(Math.random()*10)); 

function