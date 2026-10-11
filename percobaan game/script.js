// Variabel untuk menyimpan jenis permainan yang aktif
let jenisPermainan = "bgs"; 

// Fungsi untuk mengganti jenis suit saat dropdown diubah
function gantiSuit() {
    jenisPermainan = document.getElementById("pilihan-suit").value;
    buatTombol();
}

// Fungsi untuk menampilkan tombol pilihan berdasarkan jenis game
function buatTombol() {
    const areaTombol = document.getElementById("area-tombol");
    areaTombol.innerHTML = ""; // Bersihkan tombol lama

    let daftarPilihan = [];

    if (jenisPermainan === "bgs") {
        daftarPilihan = ["Batu", "Gunting", "Kertas"];
    } else {
        daftarPilihan = ["Gajah", "Orang", "Semut"];
    }

    // Buat tombol secara otomatis untuk setiap pilihan
    daftarPilihan.forEach(function(item) {
        let btn = document.createElement("button");
        btn.innerText = item;
        // Saat tombol diklik, jalankan fungsi main dengan membawa pilihan pemain
        btn.onclick = function() {
            mainkanGame(item, daftarPilihan);
        };
        areaTombol.appendChild(btn);
    });
}

// Logika Utama (Menggunakan If-Else yang mudah dibaca)
function mainkanGame(pilihanPemain, daftarPilihan) {
    // Komputer memilih secara acak dari daftar pilihan
    let pilihanKomputer = daftarPilihan[Math.floor(Math.random() * daftarPilihan.length)];
    let hasil = "";

    // 1. Cek Kondisi SERI
    if (pilihanPemain === pilihanKomputer) {
        hasil = "SERI!";
    } 
    // 2. Cek Kondisi PEMAIN MENANG (Aturan Batu-Gunting-Kertas)
    else if (jenisPermainan === "bgs") {
        if (pilihanPemain === "Batu" && pilihanKomputer === "Gunting") {
            hasil = "KAMU MENANG!";
        } else if (pilihanPemain === "Gunting" && pilihanKomputer === "Kertas") {
            hasil = "KAMU MENANG!";
        } else if (pilihanPemain === "Kertas" && pilihanKomputer === "Batu") {
            hasil = "KAMU MENANG!";
        } else {
            hasil = "KAMU KALAH!";
        }
    } 
    // 3. Cek Kondisi PEMAIN MENANG (Aturan Gajah-Orang-Semut)
    else if (jenisPermainan === "gos") {
        if (pilihanPemain === "Gajah" && pilihanKomputer === "Orang") {
            hasil = "KAMU MENANG!";
        } else if (pilihanPemain === "Orang" && pilihanKomputer === "Semut") {
            hasil = "KAMU MENANG!";
        } else if (pilihanPemain === "Semut" && pilihanKomputer === "Gajah") {
            hasil = "KAMU MENANG!";
        } else {
            hasil = "KAMU KALAH!";
        }
    }

    // Tampilkan hasil ke layar HTML
    document.getElementById("info-pilihan").innerText = "Pilihanmu: " + pilihanPemain + " | Komputer: " + pilihanKomputer;
    document.getElementById("info-hasil").innerText = hasil;
}

// Jalankan fungsi ini saat pertama kali halaman dibuka
buatTombol();