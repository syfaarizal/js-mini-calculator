# 🧮 JavaScript Challenge — Day 3: Mini Kalkulator Interaktif

Bagian dari tantangan harian saya: **Code Sprint 30 – 30 Hari JavaScript Konsisten**.  
Di hari ke-3 ini, saya membangun program kalkulator interaktif sederhana menggunakan JavaScript dasar.

---

## 🎯 Tujuan Challenge

- Mengambil input dari user (angka dan operator)
- Melakukan perhitungan matematika sederhana
- Menangani input tidak valid
- Memberikan output yang jelas, informatif, dan ramah pengguna

---

## 💻 Deskripsi Program

Program ini akan:
1. Meminta user memasukkan **angka pertama**
2. Meminta user memasukkan **angka kedua**
3. Meminta user memilih **operator**: `+`, `-`, `*`, atau `/`
4. Melakukan perhitungan dan menampilkan hasilnya

---

## 🧠 Fitur yang Diterapkan

- Input diambil dari `prompt()` (mode browser)
- Konversi string ke angka dengan `parseFloat()`
- Validasi input angka menggunakan `isNaN()`
- Penggunaan `switch-case` untuk menangani berbagai operator
- Format output menggunakan template literal dan emoji
- Penanganan error jika operator tidak dikenali
- Cek tipe data hasil agar bisa ditangani berbeda jika error (`typeof hasil === "string"`)

---

## 🧪 Contoh Output

<pre><code>
Masukan angka ke 1: 5
Masukan angka ke 2: 3
Masukan operator: *
📊 Hasil dari 5 * 3 adalah 15
</code></pre>

Jika user input simbol gak valid:
<pre><code>
Operator tidak dikenali. Silakan gunakan +, -, *, atau /
</code></pre>

---

## 💡 Insight & Evaluasi Pribadi

Awalnya saya sempat bingung dan banyak coba-coba. Saya salah ketik `prompt()` jadi `promt()`, dan sempat salah pakai `switch` sebelum mengubah input string menjadi angka. Tapi dari semua error itu, saya jadi:

- Paham pentingnya `parseFloat()` untuk angka desimal
- Belajar deklarasi `let hasil;` lebih dulu sebelum digunakan
- Tahu bedanya `parseInt()` vs `parseFloat()`
- Mengerti pentingnya validasi `isNaN()`
- Menerapkan `switch-case` dengan kondisi yang rapi dan modular
- Menyadari pentingnya mengecek tipe data saat handling hasil perhitungan

> 💬 Saya belum sepenuhnya puas dengan versi sekarang dan berencana untuk membuat versi **lebih modular dan interaktif** di revisi mendatang.

---

## 🛠 Next Improvement (Planned)

- Menambahkan penanganan pembagian dengan nol (`/0`)
- Membuat versi berbasis fungsi `hitung(num1, num2, operator)`
- Menambahkan opsi “hitung lagi?”
- Menyimpan riwayat perhitungan (optional)

---

## 📌 Author

Made with focus, frustration, and fun by **Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-portfolio/)

---

> **Challenge ini adalah batu loncatan menuju pemahaman logika program yang lebih dalam.**  
> Siap lanjut ke [Day 4: Tebak Angka Game](#)? 🎯
