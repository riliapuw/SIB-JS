        let pegawai = "Dodi Prayodi";
        let umur = 25;
        let jabatan = "Manajer";
        let status = "Menikah";

        let gapok= "";
        if (jabatan == "Manajer") {
            gapok = 15000000;
        } 
        else if(jabatan == "Asisten Manajer"){
            gapok = 10000000;
        }
        else if(jabatan == "Staff"){
            gapok = 5000000;
        }
        else {
            gapok = 0;
        }
        
        let tunjangan_jabatan = 0.15 * gapok;
        let bpjs = 0.10 * gapok;
        let tunjangan_keluarga = (status === "Menikah") ? 0.20 * gapok : 0; //ternary
        let total_gaji = gapok + tunjangan_jabatan + bpjs + tunjangan_keluarga;

        document.getElementById('pegawai').innerHTML = pegawai;
        document.getElementById('umur').innerHTML = umur;
        document.getElementById('jabatan').innerHTML = jabatan;
        document.getElementById('status').innerHTML = status;
        document.getElementById('gapok').innerHTML = gapok;
        document.getElementById('tunjab').innerHTML = tunjangan_jabatan;
        document.getElementById('bpjs').innerHTML = bpjs;
        document.getElementById('tunkel').innerHTML = tunjangan_keluarga;
        document.getElementById('totgaj').innerHTML = total_gaji;

        let totalGajiKeseluruhan = "";
        document.addEventListener("DOMContentLoaded", function () {
            updateTotalGaji();
        });
        
        function updateTotalGaji() {
            let totalCell = document.getElementById("total");
            let total = 0;
            let rows = document.querySelectorAll("tbody tr");
            
            rows.forEach(row => {
                let totalGajiCell = row.cells[8];
                if (totalGajiCell) {
                    total += parseFloat(totalGajiCell.innerText) || 0;
                }
            });
            
            totalGajiKeseluruhan = total;
            totalCell.innerHTML = totalGajiKeseluruhan;
        }
        
        function inputbaru() {  //form input baru
            let nama = document.getElementById("Nama").value;
            let umur = document.getElementById("Umur").value;
            let jabatan = document.getElementById("Jabatan").value;
            let status = document.getElementById("Status").value;
        
            let gapok = jabatan == "Manajer" ? 15000000 : jabatan == "Asisten Manajer" ? 10000000 : 5000000;
            let tunjangan_jabatan = 0.15 * gapok;
            let bpjs = 0.10 * gapok;
            let tunjangan_keluarga = (status == "Menikah") ? 0.20 * gapok : 0;
            let total_gaji = gapok + tunjangan_jabatan + bpjs + tunjangan_keluarga;
        
            switch (true) {
                case (nama === ""):
                case (umur === ""):
                case (jabatan === ""):
                case (status === ""):
                    alert("Harap isi semua kolom sebelum menambahkan data!");
                    return;
            }
            
            let tabel = document.querySelector("tbody");
            let row = tabel.insertRow();
            row.innerHTML = `
                <td>${nama}</td>
                <td>${umur}</td>
                <td>${jabatan}</td>
                <td>${status}</td>
                <td>${gapok}</td>
                <td>${tunjangan_jabatan}</td>
                <td>${bpjs}</td>
                <td>${tunjangan_keluarga}</td>
                <td>${total_gaji}</td>
            `;
        
            updateTotalGaji();

            document.getElementById("Nama").value = "";
            document.getElementById("Umur").value = "";
            document.getElementById("jabatan").value = "";
            document.getElementById("Status").value = "";
        }