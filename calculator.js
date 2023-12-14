let initialSavings = 0;
let annualInterestRate = 0.0;
let savingPeriod =0;
let totalSaving = 0;

initialSavings = parseFloat(prompt("masukan jumlah tabungan awal: "));
annualInterestRate = parseFloat(prompt("masukan tingkat bunga tahuan (%): "));
savingPeriod = parseInt(prompt("masukan periode simpanan dalam tahun: "));

let interest = (initialSavings * annualInterestRate * savingPeriod)/ 100 ;

totalSaving = initialSavings + interest;




