// controller.js
import data from './data.js';

const index = () => {
    console.log("Daftar Pengguna");
    data.map(({nama, umur, alamat, email}) => {
        console.log(`Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${email}`)
    });
};

const store = (newDataUser) => {
    data.push(newDataUser);
    console.log("Berhasil menambahkan data!");
};

const destroy = (index) => {
    if (index >= 0 && index < data.length) {
        data.splice(index, 1);
        console.log("Berhasil menghapus data!");
    } else {
        console.log("Index tidak valid!");
    };
};

export { index, store, destroy };