let produktoko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Function Declaration
function tambahProduk(nama, harga, stok) {
    let iniId = produktoko.length > 0 ? produktoko[produktoko.length - 1].id + 1 : 1;
    produktoko.push({ id: iniId, nama, harga, stok }); //metod menambah value diakhir
    console.log("Yey! Produk " + nama + " kini tersedia");
}

// Function Expression
const hapusProduk = function(id) {
    let indeks = produktoko.findIndex(produk => produk.id === id);  //mencari elemen atau value indeks
    if (indeks !== -1) {
        let ProdukDihapus = produktoko.splice(indeks, 1);
        console.log("Produk " + ProdukDihapus[0].nama + " dihapus dari daftar");
    } else {
        console.log("Oops! Tidak ada produk dengan ID " + id);
    }
};

// Arrow Function
const tampilkanProduk = () => {
    console.log("\n-------------------- Daftar Produk Tersedia -------------------\n");
    console.log("ID".padEnd(5) + "Nama".padEnd(15) + "Harga".padEnd(15) + "Stok");  // memberi jarak atau spasi diakhir
    produktoko.forEach(produk => {
        console.log(
            String(produk.id).padEnd(5) 
            +produk.nama.padEnd(15) 
            +String(produk.harga).padEnd(15) 
            +String(produk.stok)
        );
    });
    console.log("\n----------------------------------------------------------------");
};

//mencoba tampilan awal
tampilkanProduk();

//menghapus id yang tidak ada
hapusProduk(4);

//hapus id dan tampilkan
hapusProduk(3);
tampilkanProduk();

//tambah produk dan tampilkan
tambahProduk("Tablet", 1000000, 8);
tampilkanProduk();