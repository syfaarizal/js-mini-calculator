let lanjut = true;

while(lanjut) {
    const angka1 = prompt("Masukan angka ke 1");
    const angka2 = prompt("Masukan angka ke 2");
    const operator = prompt("Masukan operator (+, -, *, /)");

    const num1 = parseFloat(angka1);
    const num2 = parseFloat(angka2);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("❌ Input bukan angka yang valid!")
    } else {

        function hitung(num1, num2, operator) {
            switch(operator){
                case "+": return num1 + num2;
                case "-": return num1 - num2;
                case "*": return num1 * num2;
                case "/": return num2 === 0 ? "⚠️ Error: bagi 0" : num1 / num2;
                default: return "❌ Operator tidak dikenali. Silakan gunakan +, -, *, atau /."
            }
        }

        const hasil = hitung(num1, num2, operator);

        if (typeof hasil === "string") {
            console.log(hasil); 
        } else {
            console.log(`📊 Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`);
        }
    }

    lanjut = confirm("Ingin menghitung lagi?")
}