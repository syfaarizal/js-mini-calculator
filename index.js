const angka1 = prompt("Masukan angka ke 1");
const angka2 = prompt("Masukan angka ke 2");
const operator = prompt("Masukan operator (+, -, *, /)");

const num1 = parseFloat(angka1);
const num2 = parseFloat(angka2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Input bukan angka yang valid!")
} else {
    let hasil;

    switch(operator){
        case "+":
            hasil = num1 + num2;
            break;
        case "-":
            hasil = num1 - num2;
            break;
        case "*":
            hasil = num1 * num2;
            break;
        case "/":
            hasil = num1 / num2;
            break;
        default:
            hasil = "Operator tidak dikenali. Silakan gunakan +, -, *, atau /."
    }

    if (typeof hasil === "string") {
    console.log(hasil); 
    } else {
    console.log(`📊 Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`);
    }
}