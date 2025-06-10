# 🧮 JavaScript Challenge — Day 3: Mini Kalkulator Interaktif

Bagian dari tantangan harian **Code Sprint 30 – 30 Hari JavaScript Konsisten**.  
Pada hari ke-3 ini, saya membangun program kalkulator interaktif menggunakan JavaScript dasar yang kemudian saya refactor menjadi versi modular dan lebih dinamis.

---

## 🎯 Tujuan Challenge

- Menerima input angka dan operator dari pengguna
- Melakukan perhitungan matematika dasar
- Menangani berbagai kasus kesalahan (invalid input, pembagian dengan nol, operator tidak dikenali)
- Menyajikan hasil perhitungan dengan format yang ramah pengguna dan konsisten

---

## 💻 Deskripsi Program

Program ini akan:
1. Meminta pengguna memasukkan **angka pertama**
2. Meminta pengguna memasukkan **angka kedua**
3. Meminta pengguna memilih **operator**: `+`, `-`, `*`, atau `/`
4. Melakukan perhitungan sesuai operator dan menampilkan hasilnya
5. Memberikan opsi untuk melakukan perhitungan ulang

---

## 🧠 Fitur yang Diterapkan

- Input menggunakan `prompt()` (mode browser)
- Konversi input dari string ke angka dengan `parseFloat()`
- Validasi angka dengan `isNaN()`
- Struktur logika menggunakan `switch-case`
- Refactor ke dalam fungsi `hitung(num1, num2, operator)` dengan nilai `return`
- Penanganan pembagian dengan nol
- Output terstruktur dengan template literal dan emoji
- Pengulangan proses dengan konfirmasi (`confirm()` + `while` loop)

---

## 🧪 Contoh Output

<pre><code>
Masukan angka ke 1: 10  
Masukan angka ke 2: 0  
Masukan operator: /  
⚠️ Error: bagi 0

📊 Hasil dari 5 * 3 adalah 15
</code></pre>

Jika operator tidak valid:
<pre><code>
❌ Operator tidak dikenali. Silakan gunakan +, -, *, atau /
</code></pre>

---

## 🔍 Insight & Refleksi

Di awal, saya mengalami banyak kebingungan mulai dari typo (`promt()`), penggunaan `switch` tanpa parsing angka, hingga error karena `function` tidak dipanggil. Namun dari semua kesalahan tersebut, saya berhasil memahami beberapa konsep penting:

- Perbedaan antara `parseInt()` dan `parseFloat()` serta kapan menggunakannya
- Pentingnya mendeklarasikan variabel sebelum digunakan (`let hasil;`)
- Fungsi `typeof` sebagai cara mendeteksi error berbasis tipe data
- Konsep `function hoisting` dalam JavaScript
- Manfaat dari modularisasi kode agar lebih bersih, reusable, dan mudah dikembangkan
- Pola logika `while + confirm()` sebagai cara membuat aplikasi yang interaktif

Challenge ini menjadi latihan yang sangat bermakna untuk memahami **alur pemrosesan input, logika pengambilan keputusan, dan struktur program yang rapi**.

---

## 🔧 Fitur Tambahan

- Validasi angka dan operator
- Modularisasi logika kalkulasi ke dalam fungsi
- Pengulangan perhitungan tanpa reload
- Penanganan error pembagian nol
- Refactor agar lebih readable dan maintainable

---

## 📌 Author

Made with intention, iteration, and improvement by  
**Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-portfolio/)

---

> Challenge ini membuka wawasan saya bahwa *satu fitur sederhana bisa menjadi ladang eksplorasi mendalam tentang cara berpikir sebagai seorang developer.*  
> Siap lanjut ke [Day 4: Tebak Angka Game](#)? 🎯
