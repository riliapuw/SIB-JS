class Kendaraan {
    constructor(merk, tipe, jenis) {
        this.merk = merk;
        this.tipe = tipe;
        this.jenis = jenis;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    menyewa(kendaraan) {   //metode untuk penyewaan kendaraan
        this.kendaraanDisewa = kendaraan;
    }
}

class Penyewaan {
    constructor() {
        this.daftarPenyewa = [];   //menggunakan list untuk menyimpan daftar penyewa
    }

    tambahPenyewa(penyewa) {
        this.daftarPenyewa.push(penyewa);
        this.newTabel();
    }

    newTabel() {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; 

        this.daftarPenyewa.forEach(penyewa => {
            if (penyewa.kendaraanDisewa) {
                const kendaraan = penyewa.kendaraanDisewa;
                let row = 
                `<tr>
                    <td>${penyewa.nama}</td>
                    <td>${penyewa.nomorTelepon}</td>
                    <td>${kendaraan.jenis}</td>
                    <td>${kendaraan.merk}</td>
                    <td>${kendaraan.tipe}</td>
                </tr>`;
                tbody.innerHTML += row;
            }
        });
    }
}

const sewa = new Penyewaan();

document.getElementById("InputBaru").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nama = document.getElementById("Nama").value;
    let nomorTelepon = document.getElementById("NoTelepon").value;
    let jenisKendaraan = document.getElementById("JenisKendaraan").value;
    let merk = document.getElementById("Merk").value;
    let tipe = document.getElementById("Tipe").value;

    let kendaraanBaru = new Kendaraan(merk, tipe, jenisKendaraan);
    let penyewaBaru = new Pelanggan(nama, nomorTelepon);
    penyewaBaru.menyewa(kendaraanBaru);

    sewa.tambahPenyewa(penyewaBaru);

    // Reset input form setelah submit
    document.getElementById("InputBaru").reset();
});