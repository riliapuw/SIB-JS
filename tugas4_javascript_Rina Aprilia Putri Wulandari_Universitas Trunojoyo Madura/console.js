class Kendaraan{
    constructor(merk, tipe, jenis){
        this.merk = merk;
        this.tipe = tipe;
        this.jenis = jenis;
    }
}

class Pelanggan{
    constructor(nama, nomorTelepon){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null; //karena belum melakukan penyewaan
    }

    Menyewa(kendaraan){   //metode untuk penyewaan kendaraan
        this.kendaraanDisewa = kendaraan;
        console.log(`- Selamat ${this.nama} dengan nomor telepon ${this.nomorTelepon} berhasil menyewa ${kendaraan.jenis} dengan merk ${kendaraan.merk} dan tipe ${kendaraan.tipe}`);
    }
}

class Penyewaan{
    constructor(){
        this.daftarPenyewa = [];  //menggunakan list untuk menyimpan daftar penyewa
    }

    tambahPenyewa(penyewa){
        this.daftarPenyewa.push(penyewa);
    }

    tampilkanPenyewa(){
        console.log("\n----------------------- Daftar Penyewa Kendaraan ---------------------------\n");
        console.log("Nama".padEnd(15) + "| " + "Nomor Telepon".padEnd(15) + "| " + "Jenis".padEnd(15) + "| " + "Merk".padEnd(15) + "| " + "Tipe".padEnd(15));
        console.log("----------------------------------------------------------------------------");
        this.daftarPenyewa.forEach(penyewa => {
            if (penyewa.kendaraanDisewa){
                const kendaraan = penyewa.kendaraanDisewa;
                console.log(
                    `${penyewa.nama.padEnd(15)}| ${penyewa.nomorTelepon.padEnd(15)}| ${kendaraan.jenis.padEnd(15)}| ${kendaraan.merk.padEnd(15)}| ${kendaraan.tipe.padEnd(15)}`
                );
            }
        });
        console.log("----------------------------------------------------------------------------");
    }
}

//menambahkan kendaraan atau value baru
const kendaraan1 = new Kendaraan("Honda", "Brio", "Mobil");

//menambahkan penyewa baru
const penyewa1 = new Pelanggan("Nana", "085524633119");

//melakukan penyewaan pertama
penyewa1.Menyewa(kendaraan1);

//objek baru
const sewa = new Penyewaan();

//menambahkan pada daftar
sewa.tambahPenyewa(penyewa1);

//tampilkan daftarnya 
sewa.tampilkanPenyewa();